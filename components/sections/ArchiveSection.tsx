"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale, splitParagraphs } from "@/lib/content/helpers";

const NEWS_ACCENTS = [
  "bg-primary",
  "bg-neutral-800",
  "bg-neutral-300",
] as const;

export function ArchiveSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "archive");
  const { archive, archiveIntro } = siteContent;

  if (!sectionMeta) return null;

  const intro = pickLocale(locale, archiveIntro.kr, archiveIntro.en);
  const readLabel = locale === "ko" ? "더 보기 →" : "Read more →";

  return (
    <section id="archive" aria-labelledby="archive-heading" className="studio-section border-t border-border bg-background">
      <div className="mx-auto max-w-content layout-gutter section-py">
        <header className="pb-8 md:pb-10">
          <h2 id="archive-heading" className="text-studio-section-title">
            {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
          </h2>
        </header>

        <div className="mt-8 max-w-prose space-y-4 text-body-l text-muted">
          {splitParagraphs(intro).map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {archive.map((item, index) => (
            <li key={item.id} className="studio-news-card border-t border-border pt-6">
              <div
                className={`h-28 ${NEWS_ACCENTS[index % NEWS_ACCENTS.length]} ${index % NEWS_ACCENTS.length === 2 ? "text-neutral-950" : ""}`}
                aria-hidden="true"
              />
              <p className="mt-5 text-label uppercase tracking-[var(--tracking-label)] text-muted">
                {item.type} · {item.period}
              </p>
              <h3 className="mt-2 text-title font-bold leading-snug text-foreground">{item.title}</h3>
              <p className="mt-3 line-clamp-3 text-body leading-relaxed text-muted">
                {pickLocale(locale, item.descriptionKr, item.descriptionEn)}
              </p>
              <p className="mt-4 text-label font-medium uppercase tracking-[var(--tracking-label)] text-muted">
                {readLabel}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
