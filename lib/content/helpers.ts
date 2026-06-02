import type { SiteContent } from "./types";

export type Locale = "ko" | "en";

export function getSectionMeta(content: SiteContent, sectionId: string) {
  return content.sections.find((section) => section.sectionId === sectionId);
}

export function pickLocale<T extends string>(
  locale: Locale,
  kr: T,
  en: T,
): T {
  return locale === "ko" ? kr : en;
}

export function splitParagraphs(text: string): string[] {
  return text.split("\n").filter(Boolean);
}
