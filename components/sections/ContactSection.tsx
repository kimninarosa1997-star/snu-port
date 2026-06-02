"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { localized, localizedFn, siteContent, uiStrings } from "@/lib/content";
import { getSectionMeta, pickLocale, splitParagraphs } from "@/lib/content/helpers";

export function ContactSection() {
  const { locale } = useLanguage();
  const [copied, setCopied] = useState(false);
  const sectionMeta = getSectionMeta(siteContent, "contact");
  const { contact } = siteContent;

  if (!sectionMeta) return null;

  const copy = pickLocale(locale, contact.copyKr, contact.copyEn);
  const instagramField = contact.fields.find((field) => field.id === "C-CON-006");

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="studio-section border-t border-border bg-background">
      <div className="mx-auto max-w-content layout-gutter section-py">
        <header className="border-b border-border pb-8 md:pb-10">
          <h2 id="contact-heading" className="text-studio-section-title">
            {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
          </h2>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div className="space-y-4 text-body-l leading-relaxed text-foreground">
            {splitParagraphs(copy).map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${contact.email}`}
                aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, contact.name)}
                className="inline-flex min-h-11 items-center font-bold text-body-l text-foreground transition-opacity hover:opacity-80 focus-visible:focus-ring"
              >
                {contact.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-11 items-center border border-border px-6 py-3 text-label uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:border-foreground hover:text-foreground focus-visible:focus-ring"
                aria-live="polite"
              >
                {copied
                  ? localized(locale, uiStrings.contact.copySuccess)
                  : localized(locale, uiStrings.contact.copyEmail)}
              </button>
            </div>

            {instagramField ? (
              <p className="mt-8 text-caption text-muted" aria-disabled="true">
                {localized(locale, uiStrings.contact.instagramPending)}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
