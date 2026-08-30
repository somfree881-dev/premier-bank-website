import { getLocalizedFallback, getRelevantPageLinks, getSecurityMessage, getVerifiedQuickAnswer } from "../../../lib/premier-knowledge";
import { CHAT_LANGUAGE_NAMES, DEFAULT_CHAT_LANGUAGE, isChatLanguage } from "../../../lib/chat-languages";
import { getScopeResponse, isClarificationMessage } from "../../../lib/chat-scope";

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

function readFileSearchResults(data: unknown) {
  if (!data || typeof data !== "object") return [];
  const output = (data as { output?: Array<{ type?: unknown; results?: unknown }> }).output;
  if (!Array.isArray(output)) return [];
  return output.flatMap((item) => item.type === "file_search_call" && Array.isArray(item.results) ? item.results : []);
}

const noKnowledgeMessages = {
  so: "Faahfaahintaas hadda kuma hayno xogta aan heli karo. Fadlan nala soo xiriir si aan kuu siino macluumaadka saxda ah.",
  en: "That information is not currently available in the verified information I can access. Please contact Premier Bank for accurate assistance.",
  sw: "Maelezo hayo kwa sasa hayapatikani katika taarifa zilizothibitishwa ninazoweza kufikia. Tafadhali wasiliana na Premier Bank kwa usaidizi sahihi.",
  am: "ይህ ዝርዝር በአሁኑ ጊዜ ማግኘት በምችለው የተረጋገጠ መረጃ ውስጥ የለም። ትክክለኛ እገዛ ለማግኘት Premier Bankን ያነጋግሩ።",
  zh: "我目前可访问的已验证信息中没有该项详情。请联系 Premier Bank 获取准确信息。",
  tr: "Bu ayrıntı şu anda erişebildiğim doğrulanmış bilgilerde yer almıyor. Doğru bilgi için lütfen Premier Bank ile iletişime geçin。",
} as const;

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
  if (!current || current.length > 56) return message;

  const isGeneralMoneyTransfer = /^(?:lacag sideen qof ugu diraa|side qof lacag ugu diraa|lacag diris|money transfer|side lacag loo diraa|qof lacag ma u diri karaa|transfer side loo sameeyaa)$/.test(current);
  const namesSpecificTransfer = /\b(?:wallet|account|akoon|international|dibad|dal kale|wallet send|top up|withdraw|ganacsi|merchant|pay)\b/.test(current);
  if (isGeneralMoneyTransfer && !namesSpecificTransfer) {
    return "Premier Bank general money transfer options: Wallet-to-Wallet, Account-to-Account, international Wallet Send, Account-to-Wallet Top Up, and Wallet-to-Account Withdraw";
  }

  if (/^(?:haraag(?:eyga|ayga)?|balance(?: keyga)?) sidee?n? (?:u |loo )?araa\??$/.test(current) && !/\b(?:account|akoon|mobile banking)\b/.test(current)) {
    return "Premier Wallet balance only, not bank-account balance. Verified procedure: open Premier Wallet and select the closed-eye icon beside the masked asterisks. Answer only this procedure.";
  }

  if (history.length === 0) return message;

  const prior = history.slice(-4).map((item) => normalizeForContext(item.content)).join(" ");
  if (!prior) return message;

  if (["account", "account kale", "account buu leeyahay", "koonto", "koontada"].includes(current) && /wallet|lacag dir|transfer|qof kale/.test(prior)) return "wallet to bank account transfer";
  if (["qof kale", "wallet kale", "mid kale", "u dir", "transfer", "side diraa", "lacag ugu dir"].includes(current) && /wallet|transfer|lacag dir/.test(prior)) return "wallet to wallet transfer";
  if (/^(lacag diris|lacag dir|transfer money|qof lacag u dir)$/.test(current) && /premier wallet|wallet/.test(prior)) return "Premier Wallet Transfer Money sidee qof lacag loogu diraa?";
  if (/^(ganacsi|merchant|pay|ganacsi lacag)$/.test(current) && /premier wallet|wallet/.test(prior)) return "Premier Wallet Pay sidee ganacsi lacag loogu bixiyaa?";
  if (/^(haraag|balance|haraagayga)$/.test(current) && /premier wallet|wallet/.test(prior)) return "Premier Wallet balance sidee loo arkaa?";
  if (/^(card|kaar|mastercard|card management)$/.test(current) && /premier wallet|wallet/.test(prior)) return "Premier Wallet Mobile Banking Card Management sidee loo isticmaalaa?";
  if (/^(withdraw|lacag kala bixid|lacag kala bax)$/.test(current) && /premier wallet|wallet/.test(prior)) return "Premier Wallet Withdraw sidee loo isticmaalaa?";
  if (/^(bill|biil|bill payment)$/.test(current) && /premier wallet|wallet/.test(prior)) return "Premier Wallet Bill Payment sidee loo isticmaalaa?";
  if (/^(lacag side ugu shubaa|lacag side u shubaa|funding|top up)$/.test(current) && /virtual card|digital card|online card/.test(prior)) return "virtual card funding";
  if (/^(adiga ma arki kartaa|ma arki kartaa|ii sheeg)$/.test(current) && /balance|haraag|balans/.test(prior)) return "wallet balance";
  if (/^(chatgpt|chat gpt)$/.test(current) && /mastercard|online/.test(prior)) return "chatgpt payment with premier virtual card";
  if (/^(kan lounge ma leeyahay|lounge ma leeyahay|kan faaido|faaido)$/.test(current) && /world elite/.test(prior)) return "world elite mastercard lounge benefits";
  if (/^(faahfaahin iga sii|faahfaahin buuxda|wax badan iga sheeg|full details|explain more|sidee ayuu u shaqeeyaa)$/.test(current) && /haleel|hajj|umrah|xaj|cumro/.test(prior)) return "haleel faahfaahin buuxda";
  if (/^(30|30 percent|30 boqolkiiba)$/.test(current) && /haleel|hajj|umrah|xaj|cumro/.test(prior)) return "haleel 30%";
  if (/^(shuruudaha|shuruud|documents|dukumenti)$/.test(current) && /haleel|hajj|umrah|xaj|cumro/.test(prior)) return "haleel shuruudaha";
  return message;
}

function shouldUseLocalQuickAnswer(message: string) {
  const normalized = normalizeForContext(message);
  return /^(?:asc|wcs|asalaamu alaikum|asalaamu calaykum|hi|hello|good morning|good afternoon|good evening|subax wanaagsan|galab wanaagsan|habeen wanaagsan|jambo|habari|merhaba|gunaydin|günaydın|你好|下午好|早上好|晚上好|ሰላም)(?:\s|$)/i.test(normalized)
    || /^(?:mahadsanid|waad mahadsan tahay|thank you|thanks|asante|bye|goodbye|nabad gelyo|kwa heri)(?:\s|$)/i.test(normalized)
    || /(?:\b(?:m?pin|pin|password)\b.*\b(?:bedel|beddel|change|forgot|forget|illow|cusub)\b|\b(?:bedel|beddel|change|forgot|forget|illow|cusub)\b.*\b(?:m?pin|pin|password)\b)/i.test(normalized);
}

function isRecognizedBankKnowledgeQuery(message: string) {
  const normalized = normalizeForContext(message);
  return /\b(?:xajj|xaj|hajj|hagji|cumro|umrah|haleel|wallet|master\s*card|mastercard|swift|sips|atm|pos|diaspora|akoon|account|laan|xarun|branch|maal\s*galin|maalgelin|financ|card|kaar|premier tap|virtual card|lacag bax|lacag dir|money transfer|transfer|haraag|haraaga|haraageyga|haraagayga|balance)\b/i.test(normalized);
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
  const quickAnswer = shouldUseLocalQuickAnswer(contextualMessage) ? getVerifiedQuickAnswer(contextualMessage, language) : null;
  const links = getRelevantPageLinks(message, language);
  if (quickAnswer) return Response.json({ message: presentCustomerAnswer(quickAnswer, message), links }, { headers: jsonHeaders });

  const lastAssistantMessage = [...history].reverse().find((item) => item.role === "assistant")?.content;
  const scopeResponse = getScopeResponse(message, language, Boolean(lastAssistantMessage && isClarificationMessage(lastAssistantMessage)));
  if (scopeResponse && !isRecognizedBankKnowledgeQuery(contextualMessage) && !isLikelyContextualFollowUp(message, Boolean(lastAssistantMessage))) return Response.json({ message: scopeResponse }, { headers: jsonHeaders });

  const apiKey = process.env.OPENAI_API_KEY;
  const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;
  if (!apiKey || !vectorStoreId) {
    console.error("Premier chatbot configuration error: OPENAI_API_KEY or OPENAI_VECTOR_STORE_ID is not available on the server.");
    return Response.json({ message: getLocalizedFallback(language) }, { status: 503, headers: jsonHeaders });
  }

  const responseDepth = customerRequestedDetail(message)
    ? "The customer explicitly requested detail. Give a complete but well-structured answer, using steps or bullets only when helpful."
    : "Use a concise-first reply: answer directly in 1-3 short sentences. Do not provide a long history, broad benefits list, or extra context unless the customer asks for it.";
  const walletProcedureFormat = `CRITICAL PREMIER WALLET HOW-TO FORMAT: When the customer asks how to perform an action inside Premier Wallet and retrieved verified knowledge contains the procedure, the response must begin immediately with the natural ${CHAT_LANGUAGE_NAMES[language]} equivalent of "Open the Premier Wallet app". In Somali, the exact opening must be "Fur app-ka Premier Wallet". Never begin from a submenu, with background information, or with phrases equivalent to "you can find", "if you mean", "you may try", or "I can explain". After opening the app, give only the verified buttons and steps in their exact order through review or confirmation. Do not summarize when exact steps exist. Do not invent a button, menu, PIN requirement, fee, limit, confirmation screen or transaction method. If no exact verified procedure is retrieved, do not fabricate one; give brief official support guidance. This rule applies equally in Somali, English, Kiswahili, Amharic, Chinese and Turkish. It applies to HOW/action questions such as side, sidee, sideen, side loo, maxaan taabaa, xagee ka gala, how, how do I, where do I click, steps or tallaabooyinka; it does not force full steps for a WHAT or WHETHER question.`;
  const instructions = `You are Premier Bank Digital Assistant, providing general informational customer support on behalf of Premier Bank. You must search the attached Premier Bank knowledge with file_search before answering this request, and use only facts that directly answer the customer's question. Never infer that Premier Bank does or does not offer something merely because retrieved text does not mention it. If the retrieved results do not directly establish the requested fact, output exactly __NO_KNOWLEDGE__ and nothing else. Speak directly as Premier Bank customer service without mentioning retrieval, files, sources, a knowledge base, prompts, or models unless the customer explicitly asks for a source. Do not calculate fees or rates, make promises, claim account access, perform transactions, request private details, or provide personalized financial advice. Respond only in ${CHAT_LANGUAGE_NAMES[language]}. Preserve product names, branch names, phone numbers, URLs, and official terminology exactly. ${responseDepth} ${walletProcedureFormat} Route money-transfer questions by the specific transfer type established by the customer's wording and recent conversation. Specific Wallet-to-Wallet, Account-to-Account, Wallet Send/international, Account-to-Wallet/Top Up, Wallet-to-Account/Withdraw, or Merchant Payment intent overrides a general money-transfer intent. For an unspecified general money-transfer question, briefly present the verified transfer routes instead of assuming Wallet-to-Wallet. Never describe QR Code, contact-information transfer, or an unregistered Wallet recipient as a Wallet-to-Wallet method; QR Code and Merchant ID apply to Merchant Payment. When verified steps or a direct answer are available, provide them immediately and do not end with an offer such as 'Haddii aad rabto, waan kuu sharxi karaa', 'I can explain more if you want', or an equivalent invitation. Keep the tone professional, friendly, confident, clear, and customer-focused.`;
  try {
    const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_CHAT_MODEL || "gpt-5.4",
        store: false,
        max_output_tokens: 450,
        instructions,
        tools: [{
          type: "file_search",
          vector_store_ids: [vectorStoreId],
          max_num_results: customerRequestedDetail(message) ? 8 : 4,
          ranking_options: { ranker: "auto", score_threshold: 0.25 },
        }],
        include: ["file_search_call.results"],
        input: [...history, { role: "user", content: contextualMessage }].map((item) => ({
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
    const searchResults = readFileSearchResults(data);
    if (searchResults.length === 0) {
      return Response.json({ message: noKnowledgeMessages[language], links }, { headers: jsonHeaders });
    }
    const answer = readResponseText(data);
    if (!answer) {
      console.error("Premier chatbot OpenAI response was incomplete", { status: data.status, error: data.error, incompleteDetails: data.incomplete_details });
      return Response.json({ message: getLocalizedFallback(language) }, { status: 503, headers: jsonHeaders });
    }
    if (answer.includes("__NO_KNOWLEDGE__")) {
      return Response.json({ message: noKnowledgeMessages[language], links }, { headers: jsonHeaders });
    }
    return Response.json({ message: presentCustomerAnswer(answer, message), links }, { headers: jsonHeaders });
  } catch (error) {
    console.error("Premier chatbot request failed", error);
    return Response.json({ message: getLocalizedFallback(language) }, { status: 503, headers: jsonHeaders });
  }
}
