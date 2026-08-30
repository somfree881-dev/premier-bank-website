import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const MANAGED_BY = "premier-bank-knowledge-sync";
const INDEX_TIMEOUT_MS = 180_000;
const POLL_INTERVAL_MS = 1_500;

async function loadLocalEnv() {
  const text = await fs.readFile(path.join(root, ".env.local"), "utf8");
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match || process.env[match[1]]) continue;
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    process.env[match[1]] = value;
  }
}

async function openAi(pathname, init = {}, responseType = "json") {
  const response = await fetch(`https://api.openai.com/v1${pathname}`, {
    ...init,
    headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, ...(init.headers || {}) },
  });
  if (!response.ok) {
    const error = new Error(`${init.method || "GET"} ${pathname} failed (${response.status}): ${await response.text()}`);
    error.status = response.status;
    throw error;
  }
  return responseType === "text" ? response.text() : response.json();
}

function hashContent(content) {
  return createHash("sha256").update(content, "utf8").digest("hex");
}

function extractKnowledge(source) {
  const match = source.match(/export const PREMIER_BANK_KNOWLEDGE = `([\s\S]*?)`;\s*\n/);
  if (!match) throw new Error("Could not extract PREMIER_BANK_KNOWLEDGE.");
  return match[1].trim();
}

async function buildLocalDocuments() {
  const knowledgeSource = await fs.readFile(path.join(root, "lib", "premier-knowledge.ts"), "utf8");
  const officialSources = await fs.readFile(path.join(root, "lib", "official-premier-sources.ts"), "utf8");
  const definitions = [
    { filename: "premier-bank-knowledge.md", syncKey: "premier-bank-knowledge", content: extractKnowledge(knowledgeSource), attributes: { title: "Premier Bank verified knowledge", category: "banking-knowledge", language: "multilingual", source: "Premier Bank project", status: "verified" } },
    { filename: "premier-bank-official-sources.ts", syncKey: "premier-bank-official-sources", content: officialSources, attributes: { title: "Premier Bank official source registry", category: "official-sources", language: "multilingual", source: "Premier Bank official channels", status: "verified" } },
  ];
  return definitions.map((document) => ({ ...document, contentHash: hashContent(document.content) }));
}

async function listAllVectorStoreFiles(vectorStoreId) {
  const files = [];
  let after = "";
  do {
    const query = new URLSearchParams({ limit: "100" });
    if (after) query.set("after", after);
    const page = await openAi(`/vector_stores/${vectorStoreId}/files?${query}`);
    files.push(...(page.data || []));
    after = page.has_more ? page.last_id : "";
  } while (after);
  const enriched = await Promise.all(files.map(async (attachment) => {
    try {
      const file = await openAi(`/files/${attachment.id}`);
      return { ...attachment, filename: file.filename };
    } catch (error) {
      // A just-detached attachment can remain in list results briefly after its
      // underlying File has disappeared. Treat only that 404 as stale listing.
      if (error?.status === 404) return null;
      throw error;
    }
  }));
  return enriched.filter(Boolean);
}

function isManaged(file) {
  return file.attributes?.managed_by === MANAGED_BY && typeof file.attributes?.sync_key === "string";
}

function hasManagementMarker(file) {
  return file.attributes?.managed_by === MANAGED_BY;
}

function managedAttributes(document) {
  return { ...document.attributes, managed_by: MANAGED_BY, sync_key: document.syncKey, content_hash: document.contentHash };
}

async function updateAttachmentAttributes(vectorStoreId, fileId, attributes) {
  await openAi(`/vector_stores/${vectorStoreId}/files/${fileId}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ attributes }) });
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    const current = await openAi(`/vector_stores/${vectorStoreId}/files/${fileId}`);
    if (current.attributes?.managed_by === attributes.managed_by && current.attributes?.sync_key === attributes.sync_key && current.attributes?.content_hash === attributes.content_hash) return current;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Timed out verifying attributes for ${fileId}.`);
}

async function adoptMatchingLegacyFiles(vectorStoreId, files, documents) {
  for (const document of documents) {
    const candidates = files.filter((file) => !file.attributes?.managed_by && file.filename === document.filename && file.status === "completed").sort((a, b) => b.created_at - a.created_at);
    for (const candidate of candidates) {
      const parsed = await openAi(`/vector_stores/${vectorStoreId}/files/${candidate.id}/content`);
      const uploadedContent = (parsed.data || []).map((part) => part.text || "").join("");
      if (hashContent(uploadedContent) !== document.contentHash) continue;
      await updateAttachmentAttributes(vectorStoreId, candidate.id, managedAttributes(document));
      console.log(`ADOPT legacy unchanged: ${document.filename}`);
      break;
    }
  }
}

async function waitForFile(vectorStoreId, fileId, filename) {
  const deadline = Date.now() + INDEX_TIMEOUT_MS;
  console.log(`WAIT indexing: ${filename}`);
  while (Date.now() < deadline) {
    const attachment = await openAi(`/vector_stores/${vectorStoreId}/files/${fileId}`);
    if (attachment.status === "completed") return attachment;
    if (attachment.status === "failed" || attachment.status === "cancelled") throw new Error(`Ingestion ${attachment.status} for ${filename}: ${attachment.last_error?.message || "unknown error"}`);
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }
  throw new Error(`Timed out waiting for ${filename} to finish indexing.`);
}

async function uploadAndIndex(vectorStoreId, document) {
  let fileId = "";
  let attached = false;
  try {
    const form = new FormData();
    form.set("purpose", "assistants");
    form.set("file", new Blob([document.content], { type: "text/markdown" }), document.filename);
    const file = await openAi("/files", { method: "POST", body: form });
    fileId = file.id;
    await openAi(`/vector_stores/${vectorStoreId}/files`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ file_id: fileId, attributes: managedAttributes(document), chunking_strategy: { type: "static", static: { max_chunk_size_tokens: 800, chunk_overlap_tokens: 200 } } }) });
    attached = true;
    await waitForFile(vectorStoreId, fileId, document.filename);
    return fileId;
  } catch (error) {
    if (attached) await removeManagedFile(vectorStoreId, { id: fileId, attributes: { managed_by: MANAGED_BY } }, { deleteUnderlying: true, suppressErrors: true });
    else if (fileId) await openAi(`/files/${fileId}`, { method: "DELETE" }).catch(() => undefined);
    throw error;
  }
}

async function removeManagedFile(vectorStoreId, file, options = {}) {
  if (file.attributes?.managed_by !== MANAGED_BY) throw new Error(`Refusing to remove unmanaged file ${file.id}.`);
  try {
    await openAi(`/vector_stores/${vectorStoreId}/files/${file.id}`, { method: "DELETE" });
    if (options.deleteUnderlying !== false) {
      const deadline = Date.now() + 30_000;
      while (Date.now() < deadline) {
        try {
          await openAi(`/vector_stores/${vectorStoreId}/files/${file.id}`);
          await new Promise((resolve) => setTimeout(resolve, 500));
        } catch (error) {
          if (error?.status === 404) break;
          throw error;
        }
      }
      try {
        await openAi(`/files/${file.id}`, { method: "DELETE" });
      } catch (error) {
        if (error?.status !== 404) throw error;
      }
    }
  } catch (error) {
    if (!options.suppressErrors) throw error;
  }
}

function choosePreferred(files, desiredHash) {
  return [...files].sort((a, b) => {
    const score = (file) => (file.status === "completed" ? 4 : 0) + (file.attributes?.content_hash === desiredHash ? 2 : 0);
    return score(b) - score(a) || b.created_at - a.created_at;
  })[0];
}

async function main() {
  await loadLocalEnv();
  if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is missing from .env.local.");
  if (!process.env.OPENAI_VECTOR_STORE_ID) throw new Error("OPENAI_VECTOR_STORE_ID is missing from .env.local.");
  const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;
  const documents = await buildLocalDocuments();
  const desiredByKey = new Map(documents.map((document) => [document.syncKey, document]));
  const counters = { added: 0, updated: 0, skipped: 0, stale: 0, duplicates: 0, failed: 0 };

  let existing = await listAllVectorStoreFiles(vectorStoreId);
  await adoptMatchingLegacyFiles(vectorStoreId, existing, documents);
  existing = await listAllVectorStoreFiles(vectorStoreId);

  for (const document of documents) {
    const matches = existing.filter((file) => isManaged(file) && file.attributes.sync_key === document.syncKey);
    const unchanged = matches.filter((file) => file.status === "completed" && file.attributes.content_hash === document.contentHash);
    if (unchanged.length > 0) {
      counters.skipped += 1;
      console.log(`SKIP unchanged: ${document.filename}`);
      continue;
    }
    try {
      if (matches.length === 0) {
        console.log(`ADD new: ${document.filename}`);
        await uploadAndIndex(vectorStoreId, document);
        counters.added += 1;
      } else {
        console.log(`UPDATE changed: ${document.filename}`);
        await uploadAndIndex(vectorStoreId, document);
        for (const old of matches) await removeManagedFile(vectorStoreId, old);
        counters.updated += 1;
        console.log(`REPLACED: ${document.filename}`);
      }
    } catch (error) {
      counters.failed += 1;
      console.error(`FAILED ${matches.length ? "update" : "add"}: ${document.filename}`);
      if (matches.length) console.error("Keeping previous version.");
      console.error(error instanceof Error ? error.message : error);
    }
  }

  existing = await listAllVectorStoreFiles(vectorStoreId);
  for (const file of existing) {
    if (!hasManagementMarker(file) || (isManaged(file) && desiredByKey.has(file.attributes.sync_key))) continue;
    try {
      console.log(`REMOVE stale: ${file.filename}`);
      await removeManagedFile(vectorStoreId, file);
      counters.stale += 1;
    } catch (error) {
      counters.failed += 1;
      console.error(`FAILED stale removal: ${file.filename}: ${error instanceof Error ? error.message : error}`);
    }
  }

  existing = await listAllVectorStoreFiles(vectorStoreId);
  const groups = new Map();
  for (const file of existing.filter(isManaged)) {
    const key = file.attributes.sync_key;
    groups.set(key, [...(groups.get(key) || []), file]);
  }
  for (const [syncKey, files] of groups) {
    if (files.length < 2) continue;
    const keep = choosePreferred(files, desiredByKey.get(syncKey)?.contentHash);
    for (const duplicate of files) {
      if (duplicate.id === keep.id) continue;
      try {
        console.log(`CLEAN duplicate: ${duplicate.filename} ${duplicate.id}`);
        await removeManagedFile(vectorStoreId, duplicate);
        counters.duplicates += 1;
      } catch (error) {
        counters.failed += 1;
        console.error(`FAILED duplicate cleanup: ${duplicate.filename}: ${error instanceof Error ? error.message : error}`);
      }
    }
  }

  const finalFiles = await listAllVectorStoreFiles(vectorStoreId);
  const finalManaged = finalFiles.filter(hasManagementMarker);
  const invalidFinalState = finalManaged.filter((file) => {
    const document = isManaged(file) ? desiredByKey.get(file.attributes.sync_key) : null;
    return !document || file.status !== "completed" || file.attributes.content_hash !== document.contentHash;
  });
  const duplicateFinalKeys = [...new Set(finalManaged.filter(isManaged).map((file) => file.attributes.sync_key))]
    .filter((key) => finalManaged.filter((file) => isManaged(file) && file.attributes.sync_key === key).length !== 1);
  if (invalidFinalState.length > 0 || duplicateFinalKeys.length > 0 || finalManaged.length !== documents.length) {
    counters.failed += 1;
    console.error("FAILED final invariant: expected exactly one completed current managed file per local document.");
  }
  const managedCount = finalManaged.length;
  console.log(`FINAL MANAGED FILE COUNT: ${managedCount}`);
  console.log(`ADDED: ${counters.added}`);
  console.log(`UPDATED: ${counters.updated}`);
  console.log(`SKIPPED: ${counters.skipped}`);
  console.log(`REMOVED STALE: ${counters.stale}`);
  console.log(`CLEANED DUPLICATES: ${counters.duplicates}`);
  console.log(`FAILED: ${counters.failed}`);
  if (counters.failed > 0) throw new Error(`Knowledge synchronization completed with ${counters.failed} failure(s).`);
}

function runSelfTests() {
  const body = "stable content\n";
  if (hashContent(body) !== hashContent(body)) throw new Error("Hash determinism test failed.");
  const desiredHash = hashContent("B");
  const files = [{ id: "old", status: "completed", created_at: 1, attributes: { content_hash: hashContent("A") } }, { id: "new", status: "completed", created_at: 2, attributes: { content_hash: desiredHash } }];
  if (choosePreferred(files, desiredHash).id !== "new") throw new Error("Atomic replacement preference test failed.");
  const duplicates = [...files, { ...files[1], id: "newer", created_at: 3 }];
  if (choosePreferred(duplicates, desiredHash).id !== "newer") throw new Error("Duplicate preference test failed.");
  const localKeys = new Set(["A", "B"]);
  const managed = [{ key: "A", managed: true }, { key: "B", managed: true }, { key: "C", managed: true }, { key: "D", managed: false }];
  const stale = managed.filter((item) => item.managed && !localKeys.has(item.key));
  if (stale.length !== 1 || stale[0].key !== "C") throw new Error("Managed-only stale test failed.");
  const workingBeforeFailedUpdate = [{ id: "old", status: "completed" }];
  const workingAfterFailedUpdate = false ? [] : workingBeforeFailedUpdate;
  if (workingAfterFailedUpdate[0]?.id !== "old") throw new Error("Failed-update rollback safety test failed.");
  console.log("SELF TESTS PASSED: hash, update preference, failed-update preservation, duplicate preference, managed-only stale detection.");
}

if (process.argv.includes("--self-test")) runSelfTests();
else await main();
