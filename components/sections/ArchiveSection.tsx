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
    <section id="archive" aria-labelledby="archive-heading" className="section-py">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          meta={sectionMeta}
          locale={locale}
          headingId="archive-heading"
        />

        <div className="mt-10 max-w-[42rem] space-y-4 text-[length:var(--text-body-l)] leading-relaxed text-neutral-100">
          {splitParagraphs(intro).map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ol className="mt-16 space-y-10 border-l border-border pl-6">
          {archive.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute -left-[calc(0.5rem+1px)] top-1.5 h-2 w-2 bg-primary/40" />
              <span className="inline-block bg-primary/15 px-2 py-1 text-label text-primary">
                {item.type}
              </span>
              <p className="mt-3 text-[length:var(--text-title)] font-medium text-foreground">
                {item.title}
              </p>
              <p className="mt-1 text-caption text-neutral-300">{item.period}</p>
              <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-neutral-100">
                {pickLocale(locale, item.descriptionKr, item.descriptionEn)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
