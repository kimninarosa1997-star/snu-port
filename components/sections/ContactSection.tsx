"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Marquee } from "@/components/ui/Marquee";
import { localized, localizedFn, siteContent, uiStrings } from "@/lib/content";
import { getSectionMeta, pickLocale, splitParagraphs } from "@/lib/content/helpers";

export function ContactSection() {
  const { locale } = useLanguage();
  const [copied, setCopied] = useState(false);
  const sectionMeta = getSectionMeta(siteContent, "contact");
  const { contact, meta } = siteContent;

  if (!sectionMeta) return null;

  const copy = pickLocale(locale, contact.copyKr, contact.copyEn);
  const instagramField = contact.fields.find((field) => field.id === "C-CON-006");
  const footerMarquee =
    locale === "ko" ? uiStrings.marquee.footer.kr : uiStrings.marquee.footer.en;

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
    <section id="contact" aria-labelledby="contact-heading" className="band-dark">
      <div className="mx-auto max-w-content section-py layout-gutter">
        <p className="text-display-m leading-none text-neutral-800" aria-hidden="true">
          {locale === "ko" ? "함께" : "Let's"}
        </p>
        <h2 id="contact-heading" className="text-headline">
          {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div className="space-y-4 text-body-l leading-relaxed text-neutral-100">
            {splitParagraphs(copy).map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${contact.email}`}
                aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, contact.name)}
                className="inline-flex min-h-11 w-full items-center justify-center bg-neutral-050 px-8 py-4 text-label uppercase tracking-[var(--tracking-label)] text-neutral-950 transition-opacity hover:opacity-90 focus-visible:focus-ring sm:w-auto"
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
              <p className="mt-8 text-caption text-neutral-300" aria-disabled="true">
                {localized(locale, uiStrings.contact.instagramPending)}
              </p>
            ) : null}
          </div>
        </div>

        <p className="mt-16 text-caption text-muted">
          {meta.nameKr} · {meta.positionKr}
        </p>
      </div>

      <a
        href={`mailto:${contact.email}`}
        className="block border-t border-border py-5 transition-opacity hover:opacity-80 focus-visible:focus-ring"
        aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, contact.name)}
      >
        <Marquee
          items={Array.from({ length: 8 }, (_, i) => footerMarquee[i % footerMarquee.length]!)}
          className="text-label uppercase tracking-[var(--tracking-label)] text-muted"
          speed="slow"
        />
      </a>
    </section>
  );
}
