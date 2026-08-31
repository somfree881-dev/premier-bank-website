import type { ChatLanguage } from "./chat-languages";

type VideoCategory = "premier_wallet" | "payroll" | "mastercard" | "premier_tap" | "wearables" | "haleel" | "scam" | "diaspora" | "atm_cash" | "virtual_card" | "premier_gateway" | "wallet_send";

type ApprovedVideo = {
  id: string;
  title: string;
  url: string;
  categories: readonly VideoCategory[];
  active: true;
};

export const APPROVED_PREMIER_VIDEOS: readonly ApprovedVideo[] = [
  { id: "pb_wallet_01", title: "Premier Wallet 01", url: "https://www.facebook.com/share/v/1DXGZC5CE4/", categories: ["premier_wallet"], active: true },
  { id: "pb_wallet_02", title: "Premier Wallet 02", url: "https://www.facebook.com/share/v/1DSbDLeXvu/", categories: ["premier_wallet"], active: true },
  { id: "pb_wallet_03", title: "Premier Wallet 03", url: "https://www.facebook.com/share/v/18JViEjnWF/", categories: ["premier_wallet"], active: true },
  { id: "pb_wallet_04", title: "Premier Wallet 04", url: "https://www.facebook.com/share/v/17pjMzCPhr/", categories: ["premier_wallet"], active: true },
  { id: "pb_wallet_05", title: "Premier Wallet 05", url: "https://www.facebook.com/share/v/19G7eP5p85/", categories: ["premier_wallet"], active: true },
  { id: "pb_wallet_06", title: "Premier Wallet 06", url: "https://www.facebook.com/share/v/1BwqjbxrEV/", categories: ["premier_wallet"], active: true },
  { id: "pb_wallet_07", title: "Premier Wallet 07", url: "https://www.facebook.com/share/v/19KUg1zpGy/", categories: ["premier_wallet"], active: true },
  { id: "pb_payroll_01", title: "Premier Bank Payroll", url: "https://www.facebook.com/share/r/1dJnXEv6Ts/", categories: ["payroll"], active: true },
  { id: "pb_mastercard_01", title: "Premier Mastercard 01", url: "https://www.facebook.com/share/v/1Livpd5VTB/", categories: ["mastercard"], active: true },
  { id: "pb_mastercard_02", title: "Premier Mastercard 02", url: "https://www.facebook.com/share/v/18UqAk9oCk/", categories: ["mastercard"], active: true },
  { id: "pb_mastercard_03", title: "Premier Mastercard 03", url: "https://www.facebook.com/share/v/19cg57bjkn/", categories: ["mastercard"], active: true },
  { id: "pb_tap_01", title: "Premier Tap / Wearables / Diaspora", url: "https://www.facebook.com/share/v/1GaFUNKXhW/", categories: ["premier_tap", "wearables", "diaspora"], active: true },
  { id: "pb_tap_02", title: "Premier Tap / Tap2Pay", url: "https://www.facebook.com/share/v/1Bnkmri5TU/", categories: ["premier_tap"], active: true },
  { id: "pb_tap_youtube", title: "Premier Tap - Habka Ugu Fudud Lacag Bixinta Casriga Ah", url: "https://youtu.be/KflE753vFpg", categories: ["premier_tap"], active: true },
  { id: "pb_haleel_01", title: "Haleel - Xajka iyo Cumrada", url: "https://www.facebook.com/share/v/1EpmUhqFZa/", categories: ["haleel"], active: true },
  { id: "pb_scam_01", title: "Scam iyo khiyaano wacyigelin", url: "https://www.facebook.com/reel/1013761274916544", categories: ["scam"], active: true },
  { id: "pb_atm_01", title: "ATM iyo Cash 01", url: "https://www.facebook.com/share/v/1NYQsjFhTq/", categories: ["atm_cash"], active: true },
  { id: "pb_atm_02", title: "ATM iyo Cash 02", url: "https://www.facebook.com/share/v/1DkX6DtfEE/", categories: ["atm_cash"], active: true },
  { id: "pb_virtual_01", title: "Premier Virtual Card", url: "https://www.facebook.com/share/v/1GYSAQTjxS/", categories: ["virtual_card"], active: true },
  { id: "pb_gateway_01", title: "Premier Gateway", url: "https://www.facebook.com/share/v/1FakpfdfYc/", categories: ["premier_gateway"], active: true },
  { id: "pb_gateway_youtube", title: "Premier Payment Gateway - Ku Xidhnow Dunida, Lana Ganacso Macaamiishaada", url: "https://youtu.be/OkaOWVYy_4g", categories: ["premier_gateway"], active: true },
  { id: "pb_wallet_send_01", title: "Wallet Send", url: "https://www.facebook.com/watch/?v=881086390235716", categories: ["wallet_send"], active: true },
] as const;

const commandCategories: ReadonlyArray<{ commands: readonly string[]; category: VideoCategory | "all" | "pos" | "swift" | "branch"; label: string }> = [
  { commands: ["/video", "/videos", "/muuqaal", "/muuqaalo"], category: "all", label: "Muuqaalada Premier Bank" },
  { commands: ["/pos", "/pos video", "/pos videos"], category: "pos", label: "POS" },
  { commands: ["/premier wallet", "/premierwallet", "/wallet", "/walet", "/premier walet"], category: "premier_wallet", label: "Premier Wallet" },
  { commands: ["/swift", "/swift video", "/swift videos", "/swift transfer"], category: "swift", label: "SWIFT" },
  { commands: ["/payroll", "/payrol", "/pay roll", "/payroll videos"], category: "payroll", label: "Premier Bank Payroll" },
  { commands: ["/mastercard", "/master card", "/master", "/mastercard videos", "/master card videos"], category: "mastercard", label: "Premier Mastercard" },
  { commands: ["/premier tap", "/premier tab", "/premiertap", "/premiertab", "/tap", "/tab", "/tap2pay", "/tap 2 pay"], category: "premier_tap", label: "Premier Tap / Tap2Pay" },
  { commands: ["/wearables", "/werables", "/wearable", "/werable", "/nfc wearables"], category: "wearables", label: "Premier Tap Wearables" },
  { commands: ["/branch", "/branches", "/locator", "/locators", "/location", "/locations"], category: "branch", label: "Branch Locator" },
  { commands: ["/xajj", "/xaj", "/hajj", "/haj", "/cumro", "/cumra", "/umra", "/umrah", "/haleel", "/halel"], category: "haleel", label: "Haleel - Xajka iyo Cumrada" },
  { commands: ["/tuug", "/tuugo", "/hacker", "/hakcer", "/scam", "/scams", "/fraud", "/khiyaano", "/khiyaano online"], category: "scam", label: "Scam iyo khiyaano wacyigelin" },
  { commands: ["/qurbajoogta", "/qurba joogta", "/qurbajoog", "/diaspora", "/diaspora banking"], category: "diaspora", label: "Adeegyada qurbajoogta" },
  { commands: ["/cash", "/atm cash", "/atm", "/cash withdrawal", "/atm videos"], category: "atm_cash", label: "ATM iyo Cash" },
  { commands: ["/virtual card", "/virtualcard", "/virtual", "/v card", "/digital card"], category: "virtual_card", label: "Premier Virtual Card" },
  { commands: ["/premier gateway", "/premier gatewey", "/premier gatway", "/gateway", "/gatewey"], category: "premier_gateway", label: "Premier Gateway" },
] as const;

const categoryLabels: Record<VideoCategory, string> = {
  premier_wallet: "Premier Wallet",
  payroll: "Payroll",
  mastercard: "Premier Mastercard",
  premier_tap: "Premier Tap",
  wearables: "Wearables",
  haleel: "Haleel / Hajj / Umrah",
  scam: "Scam & Fraud Awareness",
  diaspora: "Diaspora",
  atm_cash: "ATM / Cash",
  virtual_card: "Virtual Card",
  premier_gateway: "Premier Gateway",
  wallet_send: "Wallet Send",
};

function normalizeCommand(value: string) {
  return value.toLocaleLowerCase().trim().replace(/\s+/g, " ");
}

function renderVideos(videos: readonly ApprovedVideo[], heading: string) {
  const unique = [...new Map(videos.filter((video) => video.active).map((video) => [video.url, video])).values()];
  return `**${heading}**\n\n${unique.map((video) => `- [${video.title}](${video.url})`).join("\n")}`;
}

export function resolvePremierVideoCommand(message: string, language: ChatLanguage) {
  if (!message.trim().startsWith("/")) return null;
  const normalized = normalizeCommand(message);
  const route = commandCategories.find(({ commands }) => commands.includes(normalized));
  if (!route) return null;

  if (route.category === "branch") return language === "so" ? "Linkiga Branch Locator-ka hadda kuma jiro xogta command-kan." : "The Branch Locator link is not currently stored in this command resource.";
  if (route.category === "pos" || route.category === "swift") return language === "so" ? "Muuqaal qaybtaan ku saabsan hadda ma hayo; qoraal ahaan ayaan kuu caawin karaa." : "I do not currently have an approved video for this category; I can help in writing.";

  if (route.category === "all") {
    const seen = new Set<string>();
    const sections: string[] = [];
    for (const category of Object.keys(categoryLabels) as VideoCategory[]) {
      const videos = APPROVED_PREMIER_VIDEOS.filter((video) => video.categories.includes(category) && !seen.has(video.url));
      videos.forEach((video) => seen.add(video.url));
      if (videos.length) sections.push(renderVideos(videos, categoryLabels[category]));
    }
    return `${language === "so" ? "Muuqaalada Premier Bank ee aan hayo waa kuwan:" : "Here are the approved Premier Bank videos:"}\n\n${sections.join("\n\n")}`;
  }

  const videos = APPROVED_PREMIER_VIDEOS.filter((video) => video.categories.includes(route.category as VideoCategory));
  if (!videos.length) return language === "so" ? "Muuqaal qaybtaan ku saabsan hadda ma hayo; qoraal ahaan ayaan kuu caawin karaa." : "I do not currently have an approved video for this category; I can help in writing.";
  return renderVideos(videos, language === "so" ? `Muuqaalada ${route.label}` : `${route.label} videos`);
}

