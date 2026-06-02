"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { localized, localizedFn, siteContent, uiStrings } from "@/lib/content";
import { getSectionMeta, pickLocale, splitParagraphs } from "@/lib/content/helpers";

export function ContactSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "contact");
  const { contact } = siteContent;

  if (!sectionMeta) return null;

  const copy = pickLocale(locale, contact.copyKr, contact.copyEn);
  const instagramField = contact.fields.find((field) => field.id === "C-CON-006");
  const emailSubject = locale === "ko" ? "포트폴리오 문의" : "Portfolio Inquiry";
  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="studio-section border-t border-border bg-section-alt">
      <div className="mx-auto max-w-content layout-gutter section-py">
        <header className="pb-8 md:pb-10">
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
            <a
              href={mailtoHref}
              aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, contact.name)}
              className="inline-flex min-h-11 items-center font-bold text-body-l text-foreground transition-opacity hover:opacity-80 focus-visible:focus-ring"
            >
              {contact.email}
            </a>

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
