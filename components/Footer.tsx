"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { localizedFn, siteContent, uiStrings } from "@/lib/content";

export function Footer() {
  const { locale } = useLanguage();
  const { contact, footer, meta } = siteContent;

  return (
    <footer className="studio-footer bg-neutral-950 text-neutral-050">
      <div className="mx-auto max-w-content border-b border-neutral-800 layout-gutter py-10 md:py-12">
        <p className="max-w-prose text-body text-neutral-300">{footer}</p>
        <a
          href={`mailto:${contact.email}`}
          className="mt-6 inline-block font-bold text-body-l text-neutral-050 transition-opacity hover:opacity-80 focus-visible:focus-ring"
          aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, contact.name)}
        >
          {contact.email}
        </a>
      </div>

      <div className="mx-auto max-w-content overflow-hidden layout-gutter py-8 md:py-10">
        <p className="studio-footer-name" aria-hidden="true">
          {meta.name.toUpperCase()}
        </p>
        <p className="sr-only">
          {meta.nameKr} · {meta.positionKr}
        </p>
      </div>
    </footer>
  );
}
