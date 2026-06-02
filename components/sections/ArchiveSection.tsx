"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale, splitParagraphs } from "@/lib/content/helpers";

export function ArchiveSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "archive");
  const { archive, archiveIntro } = siteContent;

  if (!sectionMeta) return null;

  const intro = pickLocale(locale, archiveIntro.kr, archiveIntro.en);

  return (
    <section id="archive" aria-labelledby="archive-heading" className="band-light section-py">
      <div className="mx-auto max-w-content layout-gutter">
        <SectionHeading
          meta={sectionMeta}
          locale={locale}
          headingId="archive-heading"
          variant="light"
        />

        <div className="mt-10 max-w-prose space-y-4 text-body-l text-[var(--color-band-light-muted)]">
          {splitParagraphs(intro).map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ol className="timeline-list mt-16 space-y-10">
          {archive.map((item) => (
            <li key={item.id}>
              <span className="timeline-dot" aria-hidden="true" />
              <span className="inline-block border border-neutral-800/20 px-2 py-1 text-label text-[var(--color-band-light-muted)]">
                {item.type}
              </span>
              <p className="mt-3 text-title font-medium text-[var(--color-band-light-ink)]">
                {item.title}
              </p>
              <p className="mt-1 text-caption text-[var(--color-band-light-muted)]">
                {item.period}
              </p>
              <p className="mt-3 text-body leading-relaxed text-[var(--color-band-light-muted)]">
                {pickLocale(locale, item.descriptionKr, item.descriptionEn)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
