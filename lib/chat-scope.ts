import type { ChatLanguage } from "./chat-languages";

type ScopeMessages = { clarify: string; clarifyAgain: string; outOfScope: string };

const scopeMessages: Record<ChatLanguage, ScopeMessages> = {
  so: {
    clarify: "Fadlan si wanaagsan iigu faahfaahi waxa aad rabto, si aan si sax ah kaaga caawiyo.",
    clarifyAgain: "Kuma fahmin su'aashaada weli. Fadlan ii sheeg waxa aad rabto inaad ka ogaato Premier Bank, tusaale ahaan account, Mastercard, Premier Wallet, branch, ATM, financing ama adeeg kale.",
    outOfScope: "Waan ka xumahay, arrintaas kama jawaabi karo. Waxaan kaa caawin karaa oo keliya adeegyada, products-ka, account-yada, cards-ka, branches-ka iyo macluumaadka la xiriira Premier Bank.",
  },
  en: {
    clarify: "Please explain what you need a little more clearly so I can help you.",
    clarifyAgain: "I still do not understand your question. Please tell me what you would like to know about Premier Bank, for example an account, Mastercard, Premier Wallet, branch, ATM, financing, or another service.",
    outOfScope: "Sorry, I can only help with Premier Bank products, services, accounts, cards, branches, and related information.",
  },
  sw: {
    clarify: "Tafadhali eleza kwa undani kidogo unachohitaji ili niweze kukusaidia vizuri.",
    clarifyAgain: "Bado sielewi swali lako. Tafadhali niambie unachotaka kujua kuhusu Premier Bank, kwa mfano akaunti, Mastercard, Premier Wallet, tawi, ATM, financing au huduma nyingine.",
    outOfScope: "Samahani, ninaweza kusaidia tu kuhusu bidhaa, huduma, akaunti, kadi, matawi na taarifa zinazohusiana na Premier Bank.",
  },
  am: {
    clarify: "እባክዎ ምን እንደሚፈልጉ በትንሹ የበለጠ ያብራሩልኝ እንድረዳዎ።",
    clarifyAgain: "ጥያቄዎን እስካሁን አልተረዳሁም። ስለ Premier Bank ምን ማወቅ እንደሚፈልጉ ይንገሩኝ፣ ለምሳሌ ሂሳብ፣ Mastercard፣ Premier Wallet፣ ቅርንጫፍ፣ ATM ወይም financing።",
    outOfScope: "ይቅርታ፣ ስለ Premier Bank ምርቶች፣ አገልግሎቶች፣ ሂሳቦች፣ ካርዶች እና ቅርንጫፎች ብቻ መርዳት እችላለሁ።",
  },
  zh: {
    clarify: "请再清楚说明一下您需要什么，以便我更好地帮助您。",
    clarifyAgain: "我仍然没有理解您的问题。请告诉我您想了解 Premier Bank 的哪项内容，例如账户、Mastercard、Premier Wallet、分行、ATM、融资或其他服务。",
    outOfScope: "抱歉，我只能协助 Premier Bank 的产品、服务、账户、银行卡、分行和相关信息。",
  },
  tr: {
    clarify: "Size yardımcı olabilmem için lütfen neye ihtiyacınız olduğunu biraz daha açıklar mısınız?",
    clarifyAgain: "Sorunuzu hâlâ anlayamadım. Lütfen Premier Bank hakkında ne öğrenmek istediğinizi belirtin; örneğin hesap, Mastercard, Premier Wallet, şube, ATM, finansman veya başka bir hizmet.",
    outOfScope: "Üzgünüm, yalnızca Premier Bank ürünleri, hizmetleri, hesapları, kartları, şubeleri ve ilgili bilgiler konusunda yardımcı olabilirim.",
  },
};

function normalize(value: string) {
  return value.toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/g, " ").trim();
}

function includesAny(value: string, phrases: readonly string[]) {
  const normalized = normalize(value);
  return phrases.some((phrase) => normalized.includes(normalize(phrase)));
}

const premierTerms = [
  "premier", "bank", "account", "akoon", "akoont", "akaunti", "hesap", "mastercard", "master card", "card", "kaarka", "kadi", "kart", "wallet", "wallet send", "virtual card", "digital card", "premier tap", "tap to pay", "contactless", "ring payment", "smartwatch", "smart watch", "saacad", "ookiyaale", "glasses", "eyewear", "wristband", "bracelet", "key fob", "sticker", "nfc", "payment gateway", "mpgs", "merchant", "ecommerce", "electricity bill", "koronto", "meter", "registration", "sign up", "diiwaan", "jabane", "safari resort", "bosaso airport", "al jazeera hotel", "jabir plaza", "cash deposit", "sos", "csr", "community", "award", "awards", "somali tech", "nira", "ekyc", "digital identity", "financial inclusion", "sips", "simad", "leap microfinance", "qardul xasan", "visa payments forum", "hajj", "umrah", "otp", "pin", "cvv", "password", "atm", "branch", "xarun", "xarumo", "xarunta", "laan", "laanta", "laamaha", "tawi", "matawi", "financing", "maalgelin", "finance", "transfer", "lacag", "payments", "payment", "online banking", "digital banking", "swift", "pos", "payroll", "diaspora", "agency banking", "visa", "statement", "balance", "transaction", "airtime", "biil", "service", "services", "adeeg", "adeegyo", "huduma", "hizmet", "服务", "አገልግሎት", "hargeisa", "mogadishu", "muqdisho", "banadir", "banaadir", "somalia", "soomaaliya", "ሂሳብ", "ቅርንጫፍ", "账户", "分行", "万事达", "钱包",
] as const;

const offTopicTerms = [
  "weather", "cimilo", "cimilada", "football", "soccer", "kubad", "politics", "siyaasad", "election", "movie", "film", "recipe", "cunto karin", "history homework", "homework", "programming", "javascript", "typescript", "css", "react", "python", "code", "bitcoin price", "celebrity", "horoscope",
] as const;

export function isClarificationMessage(message: string) {
  return Object.values(scopeMessages).some((item) => item.clarify === message || item.clarifyAgain === message);
}

export function getScopeResponse(question: string, language: ChatLanguage, askedToClarifyBefore: boolean) {
  const isPremierRelated = includesAny(question, premierTerms);
  if (!isPremierRelated && includesAny(question, offTopicTerms)) return scopeMessages[language].outOfScope;
  if (!isPremierRelated) return askedToClarifyBefore ? scopeMessages[language].clarifyAgain : scopeMessages[language].clarify;
  return null;
}
