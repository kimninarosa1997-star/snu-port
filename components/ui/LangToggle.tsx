"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { localized, uiStrings } from "@/lib/content";
import type { Locale } from "@/lib/content/helpers";

export function LangToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-2 text-label uppercase tracking-[var(--tracking-label)]"
      role="group"
      aria-label={localized(locale, uiStrings.a11y.langToggle)}
    >
      {(["ko", "en"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={`px-1 transition-colors focus-visible:focus-ring ${
            locale === code ? "text-foreground" : "text-muted hover:text-foreground"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
