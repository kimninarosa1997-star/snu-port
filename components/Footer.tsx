"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { localizedFn, siteContent, uiStrings } from "@/lib/content";

export function Footer() {
  const { locale } = useLanguage();
  const { footer, contact, meta } = siteContent;

  return (
    <footer className="section-py border-t border-border bg-background">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <p className="text-label text-muted">{footer}</p>
        <p className="mt-4 text-sm text-muted">
          {meta.nameKr} · {meta.positionKr}
        </p>
        <a
          href={`mailto:${contact.email}`}
          aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, contact.name)}
          className="mt-8 inline-block text-label text-foreground underline-offset-4 transition-opacity hover:underline focus-visible:focus-ring"
        >
          {contact.email}
        </a>
      </div>
    </footer>
  );
}
