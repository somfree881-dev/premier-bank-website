"use client";

import Image from "next/image";
import { ChevronDown, Globe2, Mic, Send, X } from "lucide-react";
import { FormEvent, KeyboardEvent, ReactNode, useEffect, useRef, useState } from "react";
import { CHAT_LANGUAGES, DEFAULT_CHAT_LANGUAGE, type ChatLanguage } from "../lib/chat-languages";

type ChatLink = { label: string; href: string };
type Message = { id: number; role: "assistant" | "user"; content: string; links?: ChatLink[] };
type StoredChat = { language: ChatLanguage; messages: Message[]; lastUserMessageAt: number };
type SpeechRecognitionResultLike = { isFinal: boolean; 0: { transcript: string } };
type SpeechRecognitionEventLike = { resultIndex: number; results: ArrayLike<SpeechRecognitionResultLike> };
type SpeechRecognitionErrorEventLike = { error: string };
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
};
type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

const CHAT_STORAGE_KEY = "premier-bank-chat-state";
const CHAT_INACTIVITY_MS = 10 * 60 * 1000;
const sensitiveStoragePattern = /\b(?:password|passcode|pin|otp|one[- ]?time code|cvv|cvc|card number|account number|security code)\b|(?:\d[ -]?){12,19}/i;
const allowedChatLinks = new Set(["/personal-banking/current-account", "/personal-banking/diaspora-banking", "/branch-locator", "/#accounts", "/#premier-wallet", "/#mastercard", "/#financing", "/#agency-banking", "/#banking-services", "/#contact"]);
const allowedMarkdownExternalLinks = new Set([
  "https://www.premierbank.so/",
  "https://online.premierbank.so/omni_corporate_web_portal/#/omni",
  "https://swiy.co/premierwallet",
  "https://hi.switchy.io/premierwallet",
  "https://www.facebook.com/watch/?v=881086390235716",
  "https://youtu.be/OkaOWVYy_4g",
  "https://youtu.be/KflE753vFpg",
  "https://www.facebook.com/share/v/1DXGZC5CE4/",
  "https://www.facebook.com/share/v/1DSbDLeXvu/",
  "https://www.facebook.com/share/v/18JViEjnWF/",
  "https://www.facebook.com/share/v/17pjMzCPhr/",
  "https://www.facebook.com/share/v/19G7eP5p85/",
  "https://www.facebook.com/share/v/1BwqjbxrEV/",
  "https://www.facebook.com/share/v/19KUg1zpGy/",
  "https://www.facebook.com/share/r/1dJnXEv6Ts/",
  "https://www.facebook.com/share/v/1Livpd5VTB/",
  "https://www.facebook.com/share/v/18UqAk9oCk/",
  "https://www.facebook.com/share/v/19cg57bjkn/",
  "https://www.facebook.com/share/v/1GaFUNKXhW/",
  "https://www.facebook.com/share/v/1Bnkmri5TU/",
  "https://www.facebook.com/share/v/1EpmUhqFZa/",
  "https://www.facebook.com/reel/1013761274916544",
  "https://www.facebook.com/share/v/1NYQsjFhTq/",
  "https://www.facebook.com/share/v/1DkX6DtfEE/",
  "https://www.facebook.com/share/v/1GYSAQTjxS/",
  "https://www.facebook.com/share/v/1FakpfdfYc/",
]);
const allowedMarkdownExternalPrefixes = [
  "https://www.premierbank.so/",
  "https://www.facebook.com/premierbankso/",
  "https://www.instagram.com/premierbankso/",
  "https://twitter.com/premierbankSO",
  "https://www.linkedin.com/company/premier-bank-so",
  "https://www.youtube.com/channel/UCw3yoOilntIYZrqKR1uisKg",
] as const;
const markdownTokenPattern = /(\*\*[^*\n]+\*\*|\[[^\]\n]+\]\([^\s)]+\)|https:\/\/[^\s<]+)/g;
const speechRecognitionLanguages: Record<ChatLanguage, string> = { so: "so-SO", en: "en-US", sw: "sw-KE", am: "am-ET", zh: "zh-CN", tr: "tr-TR" };
type VoiceMessages = { permission: string; unsupported: string; noSpeech: string; audioCapture: string; network: string; service: string; recognition: string; listening: string };
const voiceErrors: Record<ChatLanguage, VoiceMessages> = {
  so: { permission: "Fadlan oggolow isticmaalka makarafoonka.", unsupported: "Cod-gelinta browser-kan lagama taageero. Fadlan qoraal ku qor fariintaada.", noSpeech: "Wax hadal ah lama maqal. Fadlan mar kale isku day.", audioCapture: "Makarafoonka cod lagama heli karo. Hubi inuu diyaar yahay, kadib mar kale isku day.", network: "Cod-gelintu hadda ma shaqaynayso. Fadlan mar kale isku day ama qoraal ku qor.", service: "Adeegga cod-aqoonsiga browser-kan hadda lama heli karo. Fadlan qoraal ku qor fariintaada.", recognition: "Codka lama aqoonsan. Fadlan mar kale isku day.", listening: "Codkaaga waa la dhageysanayaa" },
  en: { permission: "Please allow microphone access.", unsupported: "Voice input is not supported by this browser. Please type your message.", noSpeech: "No speech was heard. Please try again.", audioCapture: "The microphone could not capture audio. Check that it is available and try again.", network: "Voice input is currently unavailable. Please try again or type your message.", service: "This browser's speech-recognition service is currently unavailable. Please type your message.", recognition: "Your speech could not be recognized. Please try again.", listening: "Listening" },
  sw: { permission: "Tafadhali ruhusu matumizi ya maikrofoni.", unsupported: "Uingizaji wa sauti hautumiki kwenye kivinjari hiki. Tafadhali andika ujumbe wako.", noSpeech: "Hakuna sauti iliyosikika. Tafadhali jaribu tena.", audioCapture: "Maikrofoni haikuweza kunasa sauti. Hakikisha inapatikana kisha ujaribu tena.", network: "Uingizaji wa sauti haupatikani sasa. Jaribu tena au andika ujumbe wako.", service: "Huduma ya utambuzi wa sauti ya kivinjari hiki haipatikani sasa. Tafadhali andika ujumbe wako.", recognition: "Sauti haikutambuliwa. Tafadhali jaribu tena.", listening: "Inasikiliza" },
  am: { permission: "እባክዎ የማይክሮፎን ፈቃድ ይስጡ።", unsupported: "ይህ አሳሽ የድምጽ ግቤትን አይደግፍም። እባክዎ መልዕክትዎን ይጻፉ።", noSpeech: "ምንም ድምጽ አልተሰማም። እባክዎ እንደገና ይሞክሩ።", audioCapture: "ማይክሮፎኑ ድምጽ መቅረጽ አልቻለም። መገኘቱን ያረጋግጡና እንደገና ይሞክሩ።", network: "የድምጽ ግቤት አሁን አይሰራም። እንደገና ይሞክሩ ወይም መልዕክትዎን ይጻፉ።", service: "የዚህ አሳሽ የድምጽ ማወቂያ አገልግሎት አሁን አይገኝም። እባክዎ መልዕክትዎን ይጻፉ።", recognition: "ድምጹ አልታወቀም። እባክዎ እንደገና ይሞክሩ።", listening: "በማዳመጥ ላይ" },
  zh: { permission: "请允许使用麦克风。", unsupported: "此浏览器不支持语音输入，请输入您的消息。", noSpeech: "未听到语音，请重试。", audioCapture: "麦克风无法采集音频，请检查后重试。", network: "语音输入当前不可用，请重试或输入消息。", service: "此浏览器的语音识别服务当前不可用，请输入消息。", recognition: "无法识别语音，请重试。", listening: "正在聆听" },
  tr: { permission: "Lütfen mikrofon erişimine izin verin.", unsupported: "Bu tarayıcı sesli girişi desteklemiyor. Lütfen mesajınızı yazın.", noSpeech: "Herhangi bir konuşma duyulmadı. Lütfen tekrar deneyin.", audioCapture: "Mikrofon ses yakalayamadı. Kullanılabilir olduğunu kontrol edip tekrar deneyin.", network: "Sesli giriş şu anda kullanılamıyor. Tekrar deneyin veya mesajınızı yazın.", service: "Bu tarayıcının konuşma tanıma hizmeti şu anda kullanılamıyor. Lütfen mesajınızı yazın.", recognition: "Konuşma tanınamadı. Lütfen tekrar deneyin.", listening: "Dinleniyor" },
};

function isSafeMarkdownHref(href: string) {
  return allowedChatLinks.has(href)
    || allowedMarkdownExternalLinks.has(href)
    || allowedMarkdownExternalPrefixes.some((prefix) => href.startsWith(prefix));
}

function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(markdownTokenPattern)) {
    const token = match[0];
    const start = match.index ?? 0;
    if (start > cursor) nodes.push(text.slice(cursor, start));

    if (token.startsWith("**")) {
      nodes.push(<strong key={`${keyPrefix}-bold-${start}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("[")) {
      const link = /^\[([^\]\n]+)\]\(([^\s)]+)\)$/.exec(token);
      if (link) {
        const [, label, href] = link;
        nodes.push(isSafeMarkdownHref(href)
          ? <a key={`${keyPrefix}-link-${start}`} href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noreferrer" : undefined}>{label}</a>
          : label);
      } else {
        nodes.push(token);
      }
    } else {
      const href = token.replace(/[.,;:!?]+$/, "");
      const trailingText = token.slice(href.length);
      nodes.push(isSafeMarkdownHref(href)
        ? <a key={`${keyPrefix}-url-${start}`} href={href} target="_blank" rel="noreferrer">{href}</a>
        : href);
      if (trailingText) nodes.push(trailingText);
    }
    cursor = start + token.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function renderMarkdown(content: string): ReactNode[] {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let lineIndex = 0;

  while (lineIndex < lines.length) {
    const line = lines[lineIndex];
    if (!line.trim()) {
      lineIndex += 1;
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      blocks.push(<p className={`premier-chat-markdown-heading level-${level}`} key={`heading-${lineIndex}`}>{renderInlineMarkdown(heading[2], `heading-${lineIndex}`)}</p>);
      lineIndex += 1;
      continue;
    }

    const unordered = /^[-*]\s+(.+)$/.exec(line);
    const ordered = /^\d+\.\s+(.+)$/.exec(line);
    if (unordered || ordered) {
      const isOrdered = Boolean(ordered);
      const entries: string[] = [];
      const entryPattern = isOrdered ? /^\d+\.\s+(.+)$/ : /^[-*]\s+(.+)$/;
      while (lineIndex < lines.length) {
        const entry = entryPattern.exec(lines[lineIndex]);
        if (!entry) break;
        entries.push(entry[1]);
        lineIndex += 1;
      }
      const List = isOrdered ? "ol" : "ul";
      blocks.push(<List key={`list-${lineIndex}`} className="premier-chat-markdown-list">{entries.map((entry, entryIndex) => <li key={`${lineIndex}-${entryIndex}`}>{renderInlineMarkdown(entry, `list-${lineIndex}-${entryIndex}`)}</li>)}</List>);
      continue;
    }

    const paragraph: string[] = [];
    while (lineIndex < lines.length && lines[lineIndex].trim() && !/^(#{1,3})\s+|^[-*]\s+|^\d+\.\s+/.test(lines[lineIndex])) {
      paragraph.push(lines[lineIndex]);
      lineIndex += 1;
    }
    blocks.push(<p key={`paragraph-${lineIndex}`}>{renderInlineMarkdown(paragraph.join(" "), `paragraph-${lineIndex}`)}</p>);
  }

  return blocks;
}

function isSafeChatLink(value: unknown): value is ChatLink {
  if (!value || typeof value !== "object") return false;
  const link = value as Partial<ChatLink>;
  return typeof link.label === "string" && link.label.length <= 120 && typeof link.href === "string" && allowedChatLinks.has(link.href);
}

const welcomes: Record<ChatLanguage, string> = {
  so: "Ku soo dhawoow Premier Bank 👋 Fadlan dooro luqadda aad doorbidayso. Waxaan ahay kaaliyahaaga bangiga dijitaalka ah.",
  en: "Welcome to Premier Bank. I'm your digital banking assistant. How can I help you today?",
  sw: "Karibu Premier Bank. Mimi ni msaidizi wako wa benki ya kidijitali. Ninaweza kukusaidiaje leo?",
  am: "ወደ Premier Bank እንኳን በደህና መጡ። እኔ የዲጂታል ባንክ ረዳትዎ ነኝ። ዛሬ እንዴት ልርዳዎ?",
  zh: "欢迎来到 Premier Bank。我是您的数字银行助手。今天我可以如何帮助您？",
  tr: "Premier Bank'e hoş geldiniz. Ben dijital bankacılık asistanınızım. Size bugün nasıl yardımcı olabilirim?",
};

const welcome = (language: ChatLanguage): Message => ({ id: 0, role: "assistant", content: welcomes[language] });
const suggestions: Record<ChatLanguage, string[]> = {
  so: ["Waa maxay Current Account?", "Sideen account u furan karaa?", "Waa maxay Premier Wallet?", "Xaggee ka heli karaa branch?", "Lacag ma ATM kala bixi karaa anigoon card wadan?", "Sideen Premier Bank ula xiriiri karaa?"],
  en: ["What is a Current Account?", "How can I open an account?", "What is Premier Wallet?", "Where can I find a Premier Bank branch?", "Can I withdraw money without my card?", "How can I contact Premier Bank?"],
  sw: ["Current Account ni nini?", "Ninawezaje kufungua akaunti?", "Premier Wallet ni nini?", "Ninaweza kupata tawi wapi?", "Je, ninaweza kutoa pesa bila kadi?", "Ninawezaje kuwasiliana na Premier Bank?"],
  am: ["Current Account ምንድን ነው?", "ሂሳብ እንዴት ልከፍት እችላለሁ?", "Premier Wallet ምንድን ነው?", "ቅርንጫፍ የት ማግኘት እችላለሁ?", "ያለ ካርድ ገንዘብ ማውጣት እችላለሁ?", "Premier Bankን እንዴት ማነጋገር እችላለሁ?"],
  zh: ["Current Account 是什么？", "我如何开设账户？", "Premier Wallet 是什么？", "我在哪里可以找到分行？", "没有银行卡可以提现吗？", "我如何联系 Premier Bank？"],
  tr: ["Current Account nedir?", "Nasıl hesap açabilirim?", "Premier Wallet nedir?", "Şubeyi nerede bulabilirim?", "Kartım olmadan para çekebilir miyim?", "Premier Bank ile nasıl iletişime geçebilirim?"],
};

function isStoredChat(value: unknown): value is StoredChat {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<StoredChat>;
  return typeof candidate.lastUserMessageAt === "number" && Number.isFinite(candidate.lastUserMessageAt) && CHAT_LANGUAGES.some((item) => item.code === candidate.language) && Array.isArray(candidate.messages) && candidate.messages.length <= 30 && candidate.messages.every((message) => message && typeof message.id === "number" && Number.isFinite(message.id) && (message.role === "user" || message.role === "assistant") && typeof message.content === "string" && message.content.length <= 900 && (!message.links || (Array.isArray(message.links) && message.links.every(isSafeChatLink))));
}

export function PremierChatbot() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<ChatLanguage>(DEFAULT_CHAT_LANGUAGE);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>(() => [welcome(DEFAULT_CHAT_LANGUAGE)]);
  const [isSending, setIsSending] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const lastUserMessageRef = useRef(0);
  const nextMessageIdRef = useRef(0);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const voiceStartInProgressRef = useRef(false);
  const voiceSessionRef = useRef(0);
  const mountedRef = useRef(true);
  const microphonePermissionRef = useRef<PermissionState | "unknown">("unknown");

  function nextMessageId() {
    const id = Math.max(Date.now(), nextMessageIdRef.current + 1);
    nextMessageIdRef.current = id;
    return id;
  }

  function startFreshConversation() {
    localStorage.removeItem(CHAT_STORAGE_KEY);
    lastUserMessageRef.current = 0;
    setLanguage(DEFAULT_CHAT_LANGUAGE);
    setMessages([welcome(DEFAULT_CHAT_LANGUAGE)]);
    setError("");
  }

  function clearIfInactive() {
    if (lastUserMessageRef.current && Date.now() - lastUserMessageRef.current > CHAT_INACTIVITY_MS) startFreshConversation();
  }

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CHAT_STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (isStoredChat(parsed) && Date.now() - parsed.lastUserMessageAt <= CHAT_INACTIVITY_MS && !parsed.messages.some((message) => sensitiveStoragePattern.test(message.content))) {
          lastUserMessageRef.current = parsed.lastUserMessageAt;
          setLanguage(parsed.language);
          setMessages(parsed.messages.slice(-30));
          nextMessageIdRef.current = Math.max(0, ...parsed.messages.map((message) => message.id));
        } else {
          localStorage.removeItem(CHAT_STORAGE_KEY);
        }
      }
    } catch {
      localStorage.removeItem(CHAT_STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated || !lastUserMessageRef.current) return;
    if (messages.some((message) => sensitiveStoragePattern.test(message.content))) {
      localStorage.removeItem(CHAT_STORAGE_KEY);
      return;
    }
    const state: StoredChat = { language, messages: messages.slice(-30), lastUserMessageAt: lastUserMessageRef.current };
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(state));
  }, [hydrated, language, messages]);

  useEffect(() => {
    const timer = window.setInterval(clearIfInactive, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateTheme = () => setIsDark(Boolean(document.querySelector("main.dark-site")));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      clearIfInactive();
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isSending]);

  useEffect(() => {
    const permissionsApi = navigator.permissions as (Permissions & { query: (descriptor: PermissionDescriptor | { name: "microphone" }) => Promise<PermissionStatus> }) | undefined;
    if (!permissionsApi?.query) return;
    void permissionsApi.query({ name: "microphone" }).then((permission) => {
      microphonePermissionRef.current = permission.state;
    }).catch(() => {
      microphonePermissionRef.current = "unknown";
    });
  }, []);

  useEffect(() => () => {
    mountedRef.current = false;
    voiceSessionRef.current += 1;
    const recognition = recognitionRef.current;
    recognitionRef.current = null;
    if (recognition) {
      recognition.onstart = null;
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      try { recognition.abort(); } catch { /* Recognition may already be closed. */ }
    }
  }, []);

  function stopVoiceRecognition() {
    voiceSessionRef.current += 1;
    voiceStartInProgressRef.current = false;
    const recognition = recognitionRef.current;
    recognitionRef.current = null;
    if (recognition) {
      recognition.onstart = null;
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      try { recognition.stop(); } catch {
        try { recognition.abort(); } catch { /* Recognition may already be closed. */ }
      }
    }
    setIsListening(false);
  }

  async function startVoiceRecognition() {
    if (isSending) return;
    if (isListening || recognitionRef.current || voiceStartInProgressRef.current) {
      stopVoiceRecognition();
      return;
    }

    setError("");
    const recognitionApi = (window as typeof window & { SpeechRecognition?: SpeechRecognitionConstructor; webkitSpeechRecognition?: SpeechRecognitionConstructor }).SpeechRecognition
      ?? (window as typeof window & { webkitSpeechRecognition?: SpeechRecognitionConstructor }).webkitSpeechRecognition;
    if (!recognitionApi) {
      setError(voiceErrors[language].unsupported);
      return;
    }

    const session = ++voiceSessionRef.current;
    voiceStartInProgressRef.current = true;
    let microphoneGranted = microphonePermissionRef.current === "granted";

    try {
      const permissionsApi = navigator.permissions as (Permissions & { query: (descriptor: PermissionDescriptor | { name: "microphone" }) => Promise<PermissionStatus> }) | undefined;
      if (microphonePermissionRef.current === "denied") {
        setError(voiceErrors[language].permission);
        return;
      }
      if (microphonePermissionRef.current === "unknown" && permissionsApi?.query) {
        try {
          const permission = await permissionsApi.query({ name: "microphone" });
          microphonePermissionRef.current = permission.state;
          if (permission.state === "denied") {
            if (mountedRef.current && session === voiceSessionRef.current) setError(voiceErrors[language].permission);
            return;
          }
          microphoneGranted = permission.state === "granted";
        } catch {
          // Safari and some mobile browsers do not expose microphone permission queries.
        }
      }

      if (!microphoneGranted && navigator.mediaDevices?.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((track) => track.stop());
          microphoneGranted = true;
          microphonePermissionRef.current = "granted";
        } catch (mediaError) {
          const name = mediaError instanceof DOMException ? mediaError.name : "";
          if (name === "NotAllowedError" || name === "SecurityError") microphonePermissionRef.current = "denied";
          if (mountedRef.current && session === voiceSessionRef.current) {
            setError(name === "NotAllowedError" || name === "SecurityError" ? voiceErrors[language].permission : voiceErrors[language].audioCapture);
          }
          return;
        }
      }

      if (!mountedRef.current || session !== voiceSessionRef.current) return;

      const recognition = new recognitionApi();
      recognitionRef.current = recognition;
      recognition.lang = speechRecognitionLanguages[language];
      recognition.interimResults = true;
      recognition.continuous = false;
      recognition.maxAlternatives = 1;
      const originalInput = input.trim();
      recognition.onstart = () => {
        if (!mountedRef.current || recognitionRef.current !== recognition) return;
        setError("");
        setIsListening(true);
      };
      recognition.onresult = (event) => {
        if (!mountedRef.current || recognitionRef.current !== recognition) return;
        const transcript = Array.from(event.results).map((result) => result[0]?.transcript.trim()).filter(Boolean).join(" ");
        if (transcript) {
          setInput([originalInput, transcript].filter(Boolean).join(" ").slice(0, 900));
          requestAnimationFrame(() => inputRef.current?.focus());
        }
      };
      recognition.onerror = (event) => {
        if (!mountedRef.current || recognitionRef.current !== recognition || event.error === "aborted") return;
        if (event.error === "not-allowed") setError(microphoneGranted ? voiceErrors[language].service : voiceErrors[language].permission);
        else if (event.error === "service-not-allowed" || event.error === "language-not-supported") setError(voiceErrors[language].service);
        else if (event.error === "no-speech") setError(voiceErrors[language].noSpeech);
        else if (event.error === "audio-capture") setError(voiceErrors[language].audioCapture);
        else if (event.error === "network") setError(voiceErrors[language].network);
        else setError(voiceErrors[language].recognition);
      };
      recognition.onend = () => {
        if (!mountedRef.current) return;
        if (recognitionRef.current === recognition) recognitionRef.current = null;
        setIsListening(false);
      };
      recognition.start();
    } catch {
      recognitionRef.current = null;
      if (mountedRef.current && session === voiceSessionRef.current) {
        setIsListening(false);
        setError(voiceErrors[language].recognition);
      }
    } finally {
      voiceStartInProgressRef.current = false;
    }
  }

  async function sendMessage(rawMessage?: string) {
    const content = (rawMessage ?? input).trim();
    if (!content || isSending) return;

    const nextMessages = [...messages, { id: nextMessageId(), role: "user" as const, content }];
    lastUserMessageRef.current = Date.now();
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content,
          language,
          // The current message is sent separately, so this is prior context only.
          history: messages.slice(-6).map(({ role, content: message }) => ({ role, content: message })),
        }),
      });
      const data = await response.json().catch(() => null) as { message?: string; links?: unknown } | null;
      if (!response.ok) {
        // Validation and rate-limit responses are actionable and are not an API outage.
        if (response.status < 500 && data?.message) {
          setMessages((current) => [...current, { id: nextMessageId(), role: "assistant", content: data.message! }]);
          return;
        }
        throw new Error(`Chat request failed with ${response.status}`);
      }
      if (!data?.message) throw new Error("Chat response was malformed");
      const links = Array.isArray(data.links) ? data.links.filter(isSafeChatLink) : undefined;
      setMessages((current) => [...current, { id: nextMessageId(), role: "assistant", content: data.message!, links }]);
    } catch {
      setError("I’m sorry, the assistant is temporarily unavailable. Please contact Premier Bank support for assistance.");
    } finally {
      setIsSending(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage();
    }
  }

  return <aside className={`premier-chatbot${isDark ? " is-dark" : ""}${open ? " is-open" : ""}`} aria-label="Premier Bank digital assistant">
    {open && <section className="premier-chat-window" aria-label="Chat with Premier Bank">
      <header className="premier-chat-header">
        <div className="premier-chat-brand"><span><Image className="premier-chat-brand-icon" src="/images/iconlogo.png" alt="Premier Bank" width={26} height={26} /></span><div><b>Premier Bank Assistant</b><small><i />Online - Informational support</small></div></div>
        <div className="premier-chat-actions">
          <label className="premier-chat-language"><Globe2 size={14} /><span>Language</span><select value={language} onChange={(event) => { stopVoiceRecognition(); setLanguage(event.target.value as ChatLanguage); }} aria-label="Chat language">{CHAT_LANGUAGES.map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}</select></label>
          <button type="button" onClick={() => { stopVoiceRecognition(); setOpen(false); }} aria-label="Close chat"><X size={19} /></button>
        </div>
      </header>
      <div className="premier-chat-messages" ref={messagesRef} aria-live="polite">
        {messages.map((message) => <div className={`premier-chat-message ${message.role}`} key={message.id}>{message.role === "assistant" && <Image className="premier-chat-message-avatar" src="/images/iconlogo.png" alt="Premier Bank" width={24} height={24} />}<div>{message.role === "assistant" ? <div className="premier-chat-markdown">{renderMarkdown(message.content)}</div> : <p>{message.content}</p>}{message.links?.map((link) => <a className="premier-chat-page-link" href={link.href} key={link.href}>{link.label}</a>)}</div></div>)}
        {isSending && <div className="premier-chat-typing" aria-label="Assistant is typing"><i /><i /><i /></div>}
        {messages.length === 1 && <div className="premier-chat-suggestions"><span>Suggested questions</span>{suggestions[language].map((suggestion) => <button type="button" key={suggestion} onClick={() => void sendMessage(suggestion)}>{suggestion}<ChevronDown size={14} /></button>)}</div>}
        {error && <p className="premier-chat-error" role="alert">{error}</p>}
      </div>
      <form className="premier-chat-input" onSubmit={submit}>
        <button className={`premier-chat-mic${isListening ? " is-listening" : ""}`} type="button" onClick={() => void startVoiceRecognition()} disabled={isSending} aria-label={isListening ? voiceErrors[language].listening : "Ask by voice"} aria-pressed={isListening} title={isListening ? voiceErrors[language].listening : "Ask by voice"}><Mic size={17} /></button>
        <input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={handleKeyDown} maxLength={900} placeholder="Ask a Premier Bank question..." aria-label="Message Premier Bank assistant" disabled={isSending} />
        <button type="submit" disabled={!input.trim() || isSending} aria-label="Send message"><Send size={17} /></button>
      </form>
      <p className="premier-chat-notice">For general information only. Never share PINs, passwords, OTPs, or card details.</p>
    </section>}
    <button type="button" className="premier-chat-launcher" onClick={() => { if (open) stopVoiceRecognition(); setOpen((value) => !value); }} aria-label={open ? "Close Premier Bank assistant" : "Open Premier Bank assistant"} aria-expanded={open}>
      {open ? <X size={23} /> : <Image className="premier-chat-launcher-logo" src="/images/iconlogo.png" alt="Premier Bank" width={26} height={26} />}<span>{open ? "Close" : "Chat with us"}</span>
    </button>
    <style>{`.premier-chatbot{position:fixed;z-index:2200;right:22px;bottom:22px;font-family:Poppins,Arial,sans-serif}.premier-chat-launcher{display:flex;align-items:center;gap:10px;border:0;border-radius:999px;padding:14px 18px;background:#002e5e;color:#fff;font:800 13px Poppins,Arial,sans-serif;box-shadow:0 13px 27px rgba(0,46,94,.28);cursor:pointer;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}.premier-chat-launcher:hover{transform:translateY(-4px) scale(1.025);background:#093f73;box-shadow:0 20px 32px rgba(0,46,94,.38)}.premier-chat-launcher svg{color:#b5e168}.premier-chat-window{position:absolute;right:0;bottom:62px;display:flex;flex-direction:column;width:min(390px,calc(100vw - 32px));height:min(590px,calc(100vh - 116px));overflow:hidden;border:1px solid #d7e5e7;border-radius:20px;background:#f8fcfd;box-shadow:0 25px 60px rgba(0,31,64,.26);animation:premierChatOpen .28s cubic-bezier(.2,.8,.2,1) both}.premier-chat-header{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:17px 17px 16px;background:linear-gradient(120deg,#002e5e,#0b5267);color:#fff}.premier-chat-header>div{display:flex;align-items:center;gap:10px}.premier-chat-header>div>span{display:grid;place-items:center;width:37px;height:37px;border-radius:11px;background:rgba(179,225,104,.16);color:#b5e168}.premier-chat-header b,.premier-chat-header small{display:block}.premier-chat-header b{font-size:13px}.premier-chat-header small{margin-top:2px;color:#d4e4ea;font-size:9px}.premier-chat-header small i{display:inline-block;width:6px;height:6px;margin-right:4px;border-radius:50%;background:#aadd65}.premier-chat-header button{display:grid;place-items:center;width:32px;height:32px;border:1px solid rgba(255,255,255,.2);border-radius:9px;background:transparent;color:#fff;cursor:pointer;transition:.2s}.premier-chat-header button:hover{background:rgba(255,255,255,.13)}.premier-chat-messages{flex:1;overflow-y:auto;padding:17px 14px;background:linear-gradient(145deg,#f8fcfd,#f2faed)}.premier-chat-message{display:flex;align-items:flex-end;gap:7px;margin:0 0 12px;animation:premierChatMessage .24s ease both}.premier-chat-message>svg{flex:none;margin-bottom:4px;color:#74aa35}.premier-chat-message p,.premier-chat-markdown{max-width:83%;margin:0;padding:11px 12px;border-radius:13px 13px 13px 3px;background:#fff;box-shadow:0 5px 13px rgba(0,46,94,.07);color:#36566f;font-size:12px;line-height:1.55;white-space:pre-wrap}.premier-chat-markdown{white-space:normal}.premier-chat-markdown p{max-width:none;margin:0;padding:0;border-radius:0;background:transparent;box-shadow:none;color:inherit;font:inherit;line-height:inherit;white-space:normal}.premier-chat-markdown p+p{margin-top:8px}.premier-chat-markdown strong{font-weight:800;color:inherit}.premier-chat-markdown a{color:#4e8120;font-weight:800;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:2px}.premier-chat-markdown a:hover{color:#002e5e}.premier-chat-markdown-list{margin:7px 0 0;padding-left:18px}.premier-chat-markdown-list li+li{margin-top:3px}.premier-chat-markdown-heading{margin-bottom:4px!important;font-weight:800!important;line-height:1.35!important}.premier-chat-markdown-heading.level-1{font-size:14px!important}.premier-chat-markdown-heading.level-2{font-size:13px!important}.premier-chat-markdown-heading.level-3{font-size:12px!important}.premier-chat-message.user{justify-content:flex-end}.premier-chat-message.user p{border-radius:13px 13px 3px 13px;background:#002e5e;color:#fff}.premier-chat-suggestions{display:grid;gap:7px;margin:4px 0 12px}.premier-chat-suggestions>span{margin:3px 0 2px;color:#6e8798;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.8px}.premier-chat-suggestions button{display:flex;align-items:center;justify-content:space-between;gap:9px;border:1px solid #d7e8d5;border-radius:9px;padding:9px 10px;background:#fff;color:#315570;font:600 11px Poppins,Arial,sans-serif;text-align:left;cursor:pointer;transition:.2s}.premier-chat-suggestions button:hover{transform:translateX(3px);border-color:#93c748;background:#f4faec;color:#527d1e}.premier-chat-suggestions button svg{transform:rotate(-90deg);color:#7dab38}.premier-chat-typing{display:flex;align-items:center;gap:4px;width:max-content;margin:0 0 12px 22px;padding:11px 13px;border-radius:12px;background:#fff;box-shadow:0 5px 13px rgba(0,46,94,.07)}.premier-chat-typing i{width:5px;height:5px;border-radius:50%;background:#78aa36;animation:premierChatDot .8s ease-in-out infinite}.premier-chat-typing i:nth-child(2){animation-delay:.13s}.premier-chat-typing i:nth-child(3){animation-delay:.26s}.premier-chat-error{margin:4px 0 12px;padding:10px;border:1px solid #f3c5c5;border-radius:9px;background:#fff4f4;color:#a83737;font-size:11px;line-height:1.5}.premier-chat-input{display:flex;gap:8px;padding:12px;border-top:1px solid #dce8e9;background:#fff}.premier-chat-input input{min-width:0;flex:1;border:1px solid #d7e4e7;border-radius:10px;padding:10px 11px;outline:0;background:#f8fbfc;color:#173b5c;font:500 12px Poppins,Arial,sans-serif}.premier-chat-input input:focus{border-color:#93c748;box-shadow:0 0 0 3px rgba(147,199,72,.14)}.premier-chat-input button{display:grid;place-items:center;flex:none;width:41px;border:0;border-radius:10px;background:#93c748;color:#173622;cursor:pointer;transition:.2s}.premier-chat-input button:hover:not(:disabled){transform:translateY(-2px);filter:brightness(1.04)}.premier-chat-input button:disabled{cursor:not-allowed;opacity:.5}.premier-chat-mic{border:1px solid #d7e4e7!important;background:#f4faec!important;color:#527d1e!important}.premier-chat-mic.is-listening{border-color:#93c748!important;background:#e3f5c8!important;animation:premierChatMic 1.1s ease-in-out infinite}.premier-chat-notice{display:flex;align-items:center;justify-content:center;gap:5px;margin:0;padding:8px 12px;background:#f4faec;color:#698393;font-size:9px;text-align:center;line-height:1.35}.premier-chat-notice svg{color:#77aa35}.premier-chatbot.is-dark .premier-chat-window{border-color:#25546e;background:#082943;box-shadow:0 25px 60px rgba(0,3,14,.48)}.premier-chatbot.is-dark .premier-chat-messages{background:linear-gradient(145deg,#082943,#0b3751)}.premier-chatbot.is-dark .premier-chat-message p,.premier-chatbot.is-dark .premier-chat-markdown,.premier-chatbot.is-dark .premier-chat-suggestions button,.premier-chatbot.is-dark .premier-chat-typing,.premier-chatbot.is-dark .premier-chat-input{background:#103b58;color:#dcebf3}.premier-chatbot.is-dark .premier-chat-markdown p{background:transparent;color:inherit}.premier-chatbot.is-dark .premier-chat-markdown a{color:#b5e168}.premier-chatbot.is-dark .premier-chat-message.user p{background:#93c748;color:#173622}.premier-chatbot.is-dark .premier-chat-suggestions button{border-color:#285b73}.premier-chatbot.is-dark .premier-chat-input{border-color:#25546e}.premier-chatbot.is-dark .premier-chat-input input{border-color:#285b73;background:#092c46;color:#fff}.premier-chatbot.is-dark .premier-chat-mic{border-color:#35647d!important;background:#0a314d!important;color:#b5e168!important}.premier-chatbot.is-dark .premier-chat-mic.is-listening{border-color:#b5e168!important;background:#164d50!important}.premier-chatbot.is-dark .premier-chat-notice{background:#0a314d;color:#b8cedb}.premier-chatbot.is-dark .premier-chat-error{background:#3c2024;color:#ffd5d5;border-color:#7c3c44}@keyframes premierChatOpen{from{opacity:0;transform:translateY(15px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes premierChatMessage{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes premierChatDot{50%{transform:translateY(-4px);opacity:.45}}@keyframes premierChatMic{50%{box-shadow:0 0 0 5px rgba(147,199,72,.17)}}@media(max-width:520px){.premier-chatbot{right:12px;bottom:12px}.premier-chat-window{right:-2px;bottom:59px;width:calc(100vw - 24px);height:min(600px,calc(100vh - 86px));border-radius:17px}.premier-chat-launcher{width:50px;height:50px;justify-content:center;padding:0;border-radius:50%}.premier-chat-launcher span{display:none}.premier-chat-header{padding:15px}.premier-chat-messages{padding:14px 11px}.premier-chat-message p,.premier-chat-markdown{max-width:87%;font-size:11px}}@media(prefers-reduced-motion:reduce){.premier-chatbot *{animation:none!important;transition:none!important}}`}</style>
    <style>{`.premier-chat-header>.premier-chat-brand{min-width:0}.premier-chat-header>.premier-chat-brand>span{box-sizing:border-box;display:grid;place-items:center;flex:none;width:36px;min-width:36px;height:36px;aspect-ratio:1;padding:4px;overflow:hidden;border:1px solid rgba(0,46,94,.12);border-radius:50%;background:#fff;color:#78ad32}.premier-chat-brand-icon{display:block;flex:none;width:26px;height:26px;object-fit:contain}.premier-chat-message-avatar{box-sizing:border-box;flex:none;width:30px;height:30px;margin:0 2px 4px 0;padding:4px;border:1px solid rgba(0,46,94,.12);border-radius:50%;background:#fff;object-fit:contain}.premier-chat-launcher-logo{box-sizing:border-box;display:block;width:32px;height:32px;padding:4px;border:1px solid rgba(0,46,94,.12);border-radius:50%;background:#fff;object-fit:contain}.premier-chat-header>.premier-chat-actions{display:flex;align-items:center;gap:7px;flex:none}.premier-chat-language{display:flex;align-items:center;gap:4px;min-width:0;border:1px solid rgba(255,255,255,.22);border-radius:8px;padding:5px 6px;color:#dcebf3;font-size:9px;font-weight:700;white-space:nowrap}.premier-chat-language svg{flex:none;color:#b5e168}.premier-chat-language select{min-width:0;max-width:76px;border:0;outline:0;background:transparent;color:#fff;font:700 9px Poppins,Arial,sans-serif;cursor:pointer}.premier-chat-language option{background:#0b5267;color:#fff}.premier-chat-page-link{display:inline-flex;align-items:center;margin-top:6px;border-bottom:1px solid #93c748;color:#5d9025;font-size:10px;font-weight:800;line-height:1.5;text-decoration:none;transition:color .2s,border-color .2s}.premier-chat-page-link:hover{border-color:#002e5e;color:#002e5e}.premier-chatbot.is-dark .premier-chat-language{border-color:#35647d}.premier-chatbot.is-dark .premier-chat-language select{color:#fff}.premier-chatbot.is-dark .premier-chat-page-link{color:#b5e168;border-color:#b5e168}@media(max-width:520px){.premier-chat-language span{display:none}.premier-chat-language{gap:2px;padding:5px}.premier-chat-language select{max-width:68px}.premier-chat-header>.premier-chat-actions{gap:5px}}`}</style>
    <style>{`@media(max-width:520px){.premier-chat-window{bottom:79px;height:min(600px,calc(100vh - 106px))}.premier-chat-launcher{flex-direction:column;width:58px;height:70px;justify-content:center;gap:2px;padding:5px;border-radius:18px}.premier-chat-launcher span{display:block;font-size:8px;line-height:1.15;text-align:center}}`}</style>
    <style>{`@media(max-width:520px){.premier-chat-window{bottom:113px;height:min(600px,calc(100vh - 140px))}.premier-chat-launcher{width:50px;height:104px;gap:5px;padding:7px 5px;border-radius:999px}.premier-chat-launcher span{font-size:8px;line-height:1;white-space:nowrap;writing-mode:vertical-rl;transform:rotate(180deg)}}`}</style>
    <style>{`@media(max-width:520px){.premier-chat-launcher{flex-direction:column-reverse}}`}</style>
  </aside>;
}
