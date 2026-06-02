"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section id="contact" aria-labelledby="contact-heading" className="section-py bg-neutral-900">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div>
            <SectionHeading
              meta={sectionMeta}
              locale={locale}
              headingId="contact-heading"
            />
            <div className="mt-10 space-y-4 text-[length:var(--text-body-l)] leading-relaxed text-neutral-100">
              {splitParagraphs(copy).map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:pt-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${contact.email}`}
                aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, contact.name)}
                className="inline-flex min-h-11 w-full items-center justify-center bg-primary px-8 py-4 text-label uppercase tracking-[var(--tracking-label)] text-on-primary transition-opacity hover:opacity-95 focus-visible:focus-ring sm:w-auto"
              >
                {contact.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-11 w-full items-center justify-center border border-border px-6 py-3 text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring sm:w-auto"
                aria-live="polite"
              >
                {copied
                  ? localized(locale, uiStrings.contact.copySuccess)
                  : localized(locale, uiStrings.contact.copyEmail)}
              </button>
            </div>

            {instagramField ? (
              <p
                className="mt-8 text-caption text-neutral-300"
                aria-disabled="true"
              >
                {localized(locale, uiStrings.contact.instagramPending)}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
