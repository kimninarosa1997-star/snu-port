"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { localized, uiStrings } from "@/lib/content";
import type { Locale } from "@/lib/content/helpers";

export function LangToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center uppercase tracking-[var(--tracking-label)] ${
        compact ? "gap-0.5 text-[0.625rem] leading-none text-muted" : "gap-2 text-label"
      }`}
      role="group"
      aria-label={localized(locale, uiStrings.a11y.langToggle)}
    >
      {(["ko", "en"] as Locale[]).map((code, index) => (
        <span key={code} className="inline-flex items-center">
          {index > 0 ? (
            <span className="mx-0.5 text-border" aria-hidden="true">
              /
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={locale === code}
            className={`transition-colors focus-visible:focus-ring ${
              locale === code ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
