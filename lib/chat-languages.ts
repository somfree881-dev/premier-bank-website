export const CHAT_LANGUAGES = [
  { code: "so", label: "Somali" },
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "am", label: "Amharic" },
  { code: "zh", label: "Chinese" },
  { code: "tr", label: "Turkish" },
] as const;

export type ChatLanguage = (typeof CHAT_LANGUAGES)[number]["code"];

export const DEFAULT_CHAT_LANGUAGE: ChatLanguage = "so";

export const CHAT_LANGUAGE_NAMES: Record<ChatLanguage, string> = {
  so: "Somali",
  en: "English",
  sw: "Kiswahili",
  am: "Amharic",
  zh: "Chinese",
  tr: "Turkish",
};

export function isChatLanguage(value: unknown): value is ChatLanguage {
  return typeof value === "string" && CHAT_LANGUAGES.some((language) => language.code === value);
}
