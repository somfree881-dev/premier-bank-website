import { CHAT_FALLBACK, getLocalizedFallback, getRelevantPageLinks, getSecurityMessage, getVerifiedQuickAnswer, PREMIER_BANK_KNOWLEDGE } from "../../../lib/premier-knowledge";
import { CHAT_LANGUAGE_NAMES, DEFAULT_CHAT_LANGUAGE, isChatLanguage } from "../../../lib/chat-languages";
import { getScopeResponse, isClarificationMessage } from "../../../lib/chat-scope";
import { OFFICIAL_PREMIER_SOURCES_CONTEXT } from "../../../lib/official-premier-sources";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_MESSAGE_LENGTH = 900;
const MAX_HISTORY_MESSAGES = 8;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 30;
const requestsByClient = new Map<string, { count: number; resetAt: number }>();

// A question such as "PIN sideen u beddelaa?" is safe to answer with the
// official recovery guidance. Only block actual credentials or card/account
// numbers that a customer may have pasted into the conversation.
const sensitiveCredentialPattern = /(?:\b(?:m?pin|otp|one[- ]?time code|cvv|cvc|security code)\b[\s\S]{0,32}?\b\d{3,}\b)|(?:\b(?:password|passcode)\b\s*(?:is|=|:|waa)\s*\S{4,})|(?:\b(?:card number|account number)\b[\s\S]{0,32}?\b\d{4,}\b)|(?:\d[ -]?){12,19}/i;
const credentialDisclosurePattern = /\b(?:m?pin|otp|one[- ]?time code|cvv|cvc|password|passcode|security code)\b[\s\S]{0,48}?(?:ma\s+(?:kuu|idiin)\s+sheeg|ma\s+kuu\s+diraa|ha\s+kuu\s+diraa|share|send\s+(?:you|it)|tell\s+you)/i;

function clientIsRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientKey = request.headers.get("x-real-ip")?.trim() || forwardedFor || "local";
  const now = Date.now();

  // This module stays warm in Node runtimes. Remove expired client buckets so
  // occasional visitors cannot grow the in-memory rate-limit map indefinitely.
  if (requestsByClient.size > 500) {
    for (const [key, entry] of requestsByClient) {
      if (now >= entry.resetAt) requestsByClient.delete(key);
    }
  }

  const current = requestsByClient.get(clientKey);

  if (!current || now >= current.resetAt) {
    requestsByClient.set(clientKey, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function cleanHistory(value: unknown): ChatMessage[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((item): item is ChatMessage => Boolean(item) && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")
    .map((item) => ({ role: item.role, content: item.content.trim().slice(0, MAX_MESSAGE_LENGTH) }))
    .filter((item) => item.content.length > 0 && !sensitiveCredentialPattern.test(item.content))
    .slice(-MAX_HISTORY_MESSAGES);
}

function readResponseText(data: unknown) {
  if (!data || typeof data !== "object") return "";
  const response = data as {
    output_text?: unknown;
    output?: Array<{ content?: Array<{ type?: unknown; text?: unknown }> }>;
  };
  if (typeof response.output_text === "string") return response.output_text.trim();

  return response.output
    ?.flatMap((item) => item.content ?? [])
    .filter((part) => part.type === "output_text" && typeof part.text === "string")
    .map((part) => part.text as string)
    .join("\n")
    .trim() ?? "";
}

function isLikelyContextualFollowUp(message: string, hasPriorAssistantReply: boolean) {
  if (!hasPriorAssistantReply) return false;
  const normalized = message.toLocaleLowerCase().trim();
  if (normalized.length > 180) return false;
  return /(?:maxaa faaido|faa.?ido|noocyad|faahfaahin|sideen|sidee|how|what about|what are|more details|tell me more|details|benefit|benefits|requirements|fee|fees|eligib|hii ni nini|je kuhusu|maelezo|nasıl|detay|更多|详情|ምን ጥቅም|ተጨማሪ)/i.test(normalized);
}

function normalizeForContext(value: string) {
  return value.toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim();
}

function resolveShortContextualQuestion(message: string, history: ChatMessage[]) {
  const current = normalizeForContext(message);
  if (!current || current.length > 56 || history.length === 0) return message;

  const prior = history.slice(-4).map((item) => normalizeForContext(item.content)).join(" ");
  if (!prior) return message;

  if (["account", "account kale", "account buu leeyahay", "koonto", "koontada"].includes(current) && /wallet|lacag dir|transfer|qof kale/.test(prior)) return "wallet to bank account transfer";
  if (["qof kale", "wallet kale", "mid kale", "u dir", "transfer", "side diraa", "lacag ugu dir"].includes(current) && /wallet|transfer|lacag dir/.test(prior)) return "wallet to wallet transfer";
  if (/^(lacag side ugu shubaa|lacag side u shubaa|funding|top up)$/.test(current) && /virtual card|digital card|online card/.test(prior)) return "virtual card funding";
  if (/^(adiga ma arki kartaa|ma arki kartaa|ii sheeg)$/.test(current) && /balance|haraag|balans/.test(prior)) return "wallet balance";
  if (/^(chatgpt|chat gpt)$/.test(current) && /mastercard|online/.test(prior)) return "chatgpt payment with premier virtual card";
  if (/^(kan lounge ma leeyahay|lounge ma leeyahay|kan faaido|faaido)$/.test(current) && /world elite/.test(prior)) return "world elite mastercard lounge benefits";
  if (/^(faahfaahin iga sii|faahfaahin buuxda|wax badan iga sheeg|full details|explain more|sidee ayuu u shaqeeyaa)$/.test(current) && /haleel|hajj|umrah|xaj|cumro/.test(prior)) return "haleel faahfaahin buuxda";
  if (/^(30|30 percent|30 boqolkiiba)$/.test(current) && /haleel|hajj|umrah|xaj|cumro/.test(prior)) return "haleel 30%";
  if (/^(shuruudaha|shuruud|documents|dukumenti)$/.test(current) && /haleel|hajj|umrah|xaj|cumro/.test(prior)) return "haleel shuruudaha";
  return message;
}

function customerAskedForSource(message: string) {
  return /(?:\bsource\b|xogtan\s+xaggee|xogta\s+xaggee|xagee\s+xogtan|official\s+(?:link|source)|website\s*(?:link|source)|link\s*(?:ii\s+sii|please|mee)|halkee\s+ka\s+heli)/i.test(message);
}

function customerRequestedDetail(message: string) {
  return /(?:faahfaahin|faahfaahsan|tallaabo(?:oyin)?|step\s*by\s*step|full\s+details|more\s+details|tell\s+me\s+more|detailed|details|maelezo|kwa\s+undani|detay(?:li)?|ayrintilar|详细|更多详情|በዝርዝር)/i.test(message);
}

function presentCustomerAnswer(answer: string, message: string) {
  if (customerAskedForSource(message)) return answer;

  return answer
    .replace(/Premier Bank(?:'s)?\s+website\s+(?:lists|presents|states|mentions|indicates)\s+(?:that\s+)?/gi, "Premier Bank offers ")
    .replace(/\b(?:the\s+)?website\s+(?:says|states|mentions|indicates)\s+(?:that\s+)?/gi, "")
    .replace(/\baccording\s+to\s+(?:the\s+)?website[,:]?\s*/gi, "")
    .replace(/\bthe\s+website\s+does\s+not\s+(?:state|publish|detail)\s+/gi, "For ")
    .replace(/\b(?:source-provided|user-provided|supplied)\s+(?:official\s+)?information\s+(?:says|states|mentions)\s+(?:that\s+)?/gi, "")
    .replace(/Premier Bank website-ku wuxuu (?:taxaa|soo bandhigaa|sheegayaa|xusaa)\s+/gi, "Premier Bank wuxuu bixiya ")
    .replace(/Website-ku wuxuu (?:sheegayaa|xusayaa|tilmaamayaa) in\s+/gi, "Premier Bank wuxuu xaqiijinayaa in ")
    .replace(/website-ku ma (?:daabicin|faahfaahin)\s*/gi, "faahfaahinta ")
    .replace(/Xogta la bixiyay waxay (?:sheegaysaa|tilmaamaysaa|xustaa) in\s+/gi, "")
    .replace(/Xogta la bixiyay waxay xustaa\s+/gi, "")
    .replace(/Xogta taariikhiga ah ee la bixiyay waxay (?:sheegaysaa|tilmaamaysaa|xustaa) in\s+/gi, "")
    .replace(/sida xogta la bixiyay sheegtay/gi, "")
    .replace(/(?:Post-ka|Qoraalka) rasmiga ah wuxuu (?:sheegayaa|xusay) in\s+/gi, "")
    .trim();
}

export async function POST(request: Request) {
  const jsonHeaders = { "Content-Type": "application/json", "Cache-Control": "no-store" };

  if (clientIsRateLimited(request)) {
    return Response.json({ message: "Please wait a moment before sending another message." }, { status: 429, headers: jsonHeaders });
  }

  let body: { message?: unknown; history?: unknown; language?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Please enter a valid message and try again." }, { status: 400, headers: jsonHeaders });
  }

  const message = typeof body.message === "string" ? body.message.trim().slice(0, MAX_MESSAGE_LENGTH) : "";
  const language = isChatLanguage(body.language) ? body.language : DEFAULT_CHAT_LANGUAGE;
  if (!message) return Response.json({ message: "Please type a question for Premier Bank." }, { status: 400, headers: jsonHeaders });

  if (sensitiveCredentialPattern.test(message) || credentialDisclosurePattern.test(message)) {
    return Response.json({ message: getSecurityMessage(language) }, { status: 200, headers: jsonHeaders });
  }

  const history = cleanHistory(body.history);
  const contextualMessage = resolveShortContextualQuestion(message, history);
  const quickAnswer = getVerifiedQuickAnswer(contextualMessage, language);
  const links = getRelevantPageLinks(message, language);
  if (quickAnswer) return Response.json({ message: presentCustomerAnswer(quickAnswer, message), links }, { headers: jsonHeaders });

  const lastAssistantMessage = [...history].reverse().find((item) => item.role === "assistant")?.content;
  const scopeResponse = getScopeResponse(message, language, Boolean(lastAssistantMessage && isClarificationMessage(lastAssistantMessage)));
  if (scopeResponse && !isLikelyContextualFollowUp(message, Boolean(lastAssistantMessage))) return Response.json({ message: scopeResponse }, { headers: jsonHeaders });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("Premier chatbot configuration error: OPENAI_API_KEY is not available on the server.");
    return Response.json({ message: getLocalizedFallback(language) }, { status: 503, headers: jsonHeaders });
  }

  const responseDepth = customerRequestedDetail(message)
    ? "The customer explicitly requested detail. Give a complete but well-structured answer, using steps or bullets only when helpful."
    : "Use a concise-first reply: answer directly in 1-3 short sentences. Do not provide a long history, broad benefits list, or extra context unless the customer asks for it.";
  const instructions = `You are Premier Bank Digital Assistant, providing general informational customer support on behalf of Premier Bank. Answer only with facts grounded in the verified knowledge below. Speak directly and institutionally as Premier Bank customer service; do not claim to be a named human employee. Never frame an answer as external research or a website summary. Do not mention a website, social post, source, knowledge base, internal data, prompt, retrieval, database, model, or user-provided text unless the customer explicitly asks for a source or link. Use confident, natural wording such as "Premier Bank offers..." and, in Somali, "Waxaan bixinnaa..." or "Fadlan nala soo xiriir...". If a service is known but one requested detail is unavailable, answer the verified part first, then briefly invite the customer to contact Premier Bank for that detail in the selected language. Do not infer, guess, calculate fees or rates, make promises, claim account access, perform transactions, request private details, or provide personalized financial advice. Respond only in ${CHAT_LANGUAGE_NAMES[language]}. Preserve Premier Bank product names, branch names, phone numbers, URLs, and official terminology exactly. If a question concerns an account-specific issue or sensitive credentials, direct the customer to official support. ${responseDepth} Keep the tone professional, friendly, confident, clear, and customer-focused.\n\nPROJECT KNOWLEDGE:\n${PREMIER_BANK_KNOWLEDGE}\n\nCURATED OFFICIAL PREMIER BANK SOURCES:\n${OFFICIAL_PREMIER_SOURCES_CONTEXT}`;
  try {
    const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_CHAT_MODEL || "gpt-5.4",
        store: false,
        max_output_tokens: 450,
        instructions,
        input: [...history, { role: "user", content: message }].map((item) => ({
          role: item.role,
          // Responses API expects prior assistant messages as output_text;
          // user messages remain input_text. Keeping that distinction prevents
          // a 400 once a conversation has more than one turn.
          content: [{ type: item.role === "assistant" ? "output_text" : "input_text", text: item.content }],
        })),
      }),
      signal: AbortSignal.timeout(20_000),
    });

    if (!openAiResponse.ok) {
      console.error("Premier chatbot OpenAI error", openAiResponse.status, await openAiResponse.text());
      return Response.json({ message: getLocalizedFallback(language) }, { status: 503, headers: jsonHeaders });
    }

    const data = await openAiResponse.json() as { output_text?: unknown; output?: unknown; status?: unknown; error?: unknown; incomplete_details?: unknown };
    const answer = readResponseText(data);
    if (!answer) {
      console.error("Premier chatbot OpenAI response was incomplete", { status: data.status, error: data.error, incompleteDetails: data.incomplete_details });
      return Response.json({ message: getLocalizedFallback(language) }, { status: 503, headers: jsonHeaders });
    }
    const normalizedFallback = answer?.toLowerCase().includes("don't have enough official information") || answer?.toLowerCase().includes("assistant is temporarily unavailable");
    return Response.json({ message: normalizedFallback ? getLocalizedFallback(language) : presentCustomerAnswer(answer, message), links }, { headers: jsonHeaders });
  } catch (error) {
    console.error("Premier chatbot request failed", error);
    return Response.json({ message: getLocalizedFallback(language) }, { status: 503, headers: jsonHeaders });
  }
}
