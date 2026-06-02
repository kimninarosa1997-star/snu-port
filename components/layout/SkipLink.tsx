"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { localized, uiStrings } from "@/lib/content";

export function SkipLink() {
  const { locale } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-border focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:focus-ring"
    >
      {localized(locale, uiStrings.a11y.skipToMain)}
    </a>
  );
}
