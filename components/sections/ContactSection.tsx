"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale, splitParagraphs } from "@/lib/content/helpers";

export function ContactSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "contact");
  const { contact } = siteContent;

  if (!sectionMeta) return null;

  const copy = pickLocale(locale, contact.copyKr, contact.copyEn);
  const publicFields = contact.fields.filter(
    (field) => !field.isPrivate && field.id !== "C-CON-001" && field.id !== "C-CON-002",
  );

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
            <a
              href={`mailto:${contact.email}`}
              aria-label={`이메일로 ${contact.name}에게 문의`}
              className="inline-flex w-full items-center justify-center bg-primary px-8 py-4 text-label uppercase tracking-[var(--tracking-label)] text-on-primary transition-opacity hover:opacity-95 focus-visible:focus-ring sm:w-auto"
            >
              {contact.email}
            </a>

            {publicFields.length > 0 ? (
              <ul className="mt-8 space-y-3 text-caption text-neutral-300">
                {publicFields.map((field) => (
                  <li key={field.id}>
                    {field.item}: {field.content}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
