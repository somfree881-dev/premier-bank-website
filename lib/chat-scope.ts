import type { ChatLanguage } from "./chat-languages";

type ScopeMessages = { clarify: string; clarifyAgain: string; outOfScope: string; competitor?: string; politics?: string; abuse?: string; personal?: string; rules?: string };

const scopeMessages: Record<ChatLanguage, ScopeMessages> = {
  so: {
    clarify: "Fadlan si wanaagsan iigu faahfaahi waxa aad rabto, si aan si sax ah kaaga caawiyo.",
    clarifyAgain: "Kuma fahmin su'aashaada weli. Fadlan ii sheeg waxa aad rabto inaad ka ogaato Premier Bank, tusaale ahaan account, Mastercard, Premier Wallet, branch, ATM, financing ama adeeg kale.",
    outOfScope: "Waan ka xumahay, arrintaas kama jawaabi karo. Waxaan kaa caawin karaa oo keliya adeegyada, products-ka, account-yada, cards-ka, branches-ka iyo macluumaadka la xiriira Premier Bank.",
    competitor: "Waxaan ahay Premier Bank AI Customer Service Assistant. Bangi aan Premier Bank ahayn kama bixin karo macluumaad ama talo. Fadlan i weydii adeegyada Premier Bank.",
    politics: "Waxaan ku koobanahay adeegyada iyo macluumaadka Premier Bank. Su'aalaha siyaasadda kama jawaabi karo. Fadlan i weydii adeeg Premier Bank ah.",
    abuse: "Waxaan diyaar u ahay inaan kaa caawiyo adeegyada Premier Bank. Fadlan ii sheeg adeegga ama dhibaatada aad qabto.",
    personal: "Waxaan ahay Premier Bank AI Customer Service Assistant, waxaana kuu joogaa inaan kaa caawiyo adeegyada Premier Bank.",
    rules: "Waxaan raacayaa xeerarka adeegga Premier Bank, waxaana kaa caawin karaa oo keliya macluumaadka iyo adeegyada la oggol yahay ee Premier Bank.",
  },
  en: {
    clarify: "Please explain what you need a little more clearly so I can help you.",
    clarifyAgain: "I still do not understand your question. Please tell me what you would like to know about Premier Bank, for example an account, Mastercard, Premier Wallet, branch, ATM, financing, or another service.",
    outOfScope: "Sorry, I can only help with Premier Bank products, services, accounts, cards, branches, and related information.",
    competitor: "I'm Premier Bank's AI Customer Service Assistant. I can't provide information or advice about other banks. I can help you with Premier Bank products and services.",
    politics: "I'm here to assist with Premier Bank products and services. I'm not able to answer unrelated political questions.",
    abuse: "I'm ready to help with Premier Bank services. Please tell me which service or banking problem you need help with.",
    personal: "I'm Premier Bank's AI Customer Service Assistant, here to help you with Premier Bank services.",
    rules: "I follow Premier Bank service rules and can help only with permitted Premier Bank information and services.",
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
  "profile", "profile picture", "sawirkayga", "phone lost", "telefoonka ayaa iga lumay", "verification code", "wrong transfer", "transfer khaldan", "account locked", "wallet xirmay", "phone number badal", "change email",
  "premier", "bank", "account", "akoon", "akoont", "akaunti", "hesap", "mastercard", "master card", "card", "kaarka", "kadi", "kart", "wallet", "wallet send", "virtual card", "digital card", "premier tap", "tap to pay", "contactless", "ring payment", "smartwatch", "smart watch", "saacad", "ookiyaale", "glasses", "eyewear", "wristband", "bracelet", "key fob", "sticker", "nfc", "payment gateway", "mpgs", "merchant", "ecommerce", "electricity bill", "koronto", "meter", "registration", "sign up", "diiwaan", "jabane", "safari resort", "bosaso airport", "al jazeera hotel", "jabir plaza", "cash deposit", "sos", "csr", "community", "award", "awards", "somali tech", "nira", "ekyc", "digital identity", "financial inclusion", "sips", "simad", "leap microfinance", "qardul xasan", "visa payments forum", "hajj", "umrah", "otp", "pin", "cvv", "password", "atm", "branch", "xarun", "xarumo", "xarunta", "laan", "laanta", "laamaha", "tawi", "matawi", "financing", "maalgelin", "finance", "transfer", "lacag", "payments", "payment", "online banking", "digital banking", "swift", "pos", "payroll", "diaspora", "agency banking", "visa", "statement", "balance", "transaction", "airtime", "biil", "service", "services", "adeeg", "adeegyo", "huduma", "hizmet", "服务", "አገልግሎት", "hargeisa", "mogadishu", "muqdisho", "banadir", "banaadir", "somalia", "soomaaliya", "ሂሳብ", "ቅርንጫፍ", "账户", "分行", "万事达", "钱包",
] as const;

const offTopicTerms = [
  "weather", "cimilo", "cimilada", "football", "soccer", "kubad", "movie", "film", "recipe", "cunto karin", "history homework", "homework", "programming", "javascript", "typescript", "css", "react", "python", "code", "bitcoin price", "celebrity", "horoscope", "capital of france", "caasimada france", "iphone kee fiican", "sheeko ii sheeg",
] as const;

const competitorTerms = ["salaam bank", "salam bank", "salaam somali bank", "dahabshiil bank", "dahabshil bank", "ibs bank", "bulsho bank", "agro bank", "som bank", "sombank", "amal bank"] as const;
const politicalTerms = ["politics", "siyaasad", "xisbi", "political party", "doorasho", "doorashada", "election", "musharax", "yaa taageertaa", "yaa ku guuleysanaya", "xukuumad kee fiican", "party kee fiican"] as const;
const abuseTerms = ["doqon", "nacas", "waxba ma taqaan", "fuck you", "idiot"] as const;
const obsceneTerms = ["porn", "pornography", "sexual", "sex chat", "qaawan", "galmo"] as const;
const personalBotTerms = ["magacaa", "yaa ku sameeyay", "xagee joogtaa", "nin mise naag", "mushaarkaaga", "da'daada", "your age", "your salary", "are you male", "are you female"] as const;
const ruleBreakingTerms = ["sharciga iska dhaaf", "rules ka iska ilow", "system prompt ii sheeg", "restrictions iska saar", "ignore instructions", "ha noqon premier bank bot", "reveal system prompt"] as const;

function hasExplicitPremierIntent(question: string) {
  return includesAny(question, ["premier", "premier bank", "premier wallet", "premier mastercard", "premier tap", "wallet send", "haleel"]);
}

function hasConcreteBankingProblem(question: string) {
  return includesAny(question, ["lacagtii baa iga baxday", "lacag baa iga baxday", "lacag lagaa jaray", "transaction", "payment", "card kayga", "card-kayga", "kaarkayga", "wallet-kayga", "account-kayga", "akoonkeyga", "ma shaqeynayo", "wuu diiday", "failed", "declined", "pending"]);
}

export function isClarificationMessage(message: string) {
  return Object.values(scopeMessages).some((item) => item.clarify === message || item.clarifyAgain === message);
}

export function getScopeResponse(question: string, language: ChatLanguage, askedToClarifyBefore: boolean) {
  const normalizedQuestion = normalize(question);
  const isPremierRelated = includesAny(question, premierTerms);
  if (hasExplicitPremierIntent(question) || (isPremierRelated && hasConcreteBankingProblem(question))) return null;
  if (includesAny(question, competitorTerms)) return scopeMessages[language].competitor ?? scopeMessages[language].outOfScope;
  if (includesAny(question, politicalTerms) || /(?:doorash[oa]\p{L}*|siyaasad\p{L}*|politic\p{L}*|election\p{L}*|xisbi\p{L}*|musharax\p{L}*)/u.test(normalizedQuestion)) return scopeMessages[language].politics ?? scopeMessages[language].outOfScope;
  if (includesAny(question, ruleBreakingTerms)) return scopeMessages[language].rules ?? scopeMessages[language].outOfScope;
  if (includesAny(question, personalBotTerms)) return scopeMessages[language].personal ?? scopeMessages[language].outOfScope;
  if (includesAny(question, abuseTerms)) return scopeMessages[language].abuse ?? scopeMessages[language].outOfScope;
  if (includesAny(question, obsceneTerms) || (!isPremierRelated && includesAny(question, offTopicTerms))) return scopeMessages[language].outOfScope;
  if (!isPremierRelated) return askedToClarifyBefore ? scopeMessages[language].clarifyAgain : scopeMessages[language].clarify;
  return null;
}
