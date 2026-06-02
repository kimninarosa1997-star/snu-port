"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale, splitParagraphs } from "@/lib/content/helpers";

export function AboutSection() {
  const { locale } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const sectionMeta = getSectionMeta(siteContent, "about");
  const { about, strengths, education, interests } = siteContent;

  if (!sectionMeta) return null;

  const fullBody = pickLocale(locale, about.bodyKr, about.bodyEn);
  const minimalBody = pickLocale(locale, about.minimalKr, about.minimalEn);
  const profileAlt = pickLocale(
    locale,
    `${siteContent.meta.nameKr} 프로필 사진`,
    `Portrait of ${siteContent.meta.name}`,
  );

  return (
    <section id="about" aria-labelledby="about-heading" className="section-py">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          meta={sectionMeta}
          locale={locale}
          headingId="about-heading"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          <div
            className="mx-auto aspect-[3/4] w-full max-w-xs border border-border bg-neutral-900 grayscale lg:mx-0"
            role="img"
            aria-label={profileAlt}
          >
            <div className="flex h-full items-end p-4">
              <p className="text-caption text-neutral-300">C-REQ-001 · Profile</p>
            </div>
          </div>

          <div>
            <div className="space-y-4 text-[length:var(--text-body)] leading-relaxed text-neutral-100 md:hidden">
              {splitParagraphs(expanded ? fullBody : minimalBody).map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="hidden space-y-4 text-[length:var(--text-body)] leading-relaxed text-neutral-100 md:block">
              {splitParagraphs(fullBody).map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <button
              type="button"
              className="mt-6 text-label uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-foreground focus-visible:focus-ring md:hidden"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded
                ? locale === "ko"
                  ? "접기"
                  : "Show less"
                : locale === "ko"
                  ? "더 보기"
                  : "Read more"}
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {strengths.map((strength) => (
            <article
              key={strength.id}
              className="border-t border-border pt-6 transition-colors hover:bg-neutral-900"
            >
              <h3 className="text-[length:var(--text-title)] font-medium text-foreground">
                {strength.title}
              </h3>
              <p className="mt-3 text-[length:var(--text-body)] leading-relaxed text-neutral-100">
                {pickLocale(locale, strength.descriptionKr, strength.descriptionEn)}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-label text-muted">
            {locale === "ko" ? "연구 관심분야" : "Research Interests"}
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {interests.map((interest) => (
              <li
                key={interest.id}
                className="border border-border px-4 py-3 text-label text-neutral-300"
              >
                {pickLocale(locale, interest.titleKr, interest.titleEn)}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-label text-muted">
            {locale === "ko" ? "학력" : "Education"}
          </h3>
          <ol className="mt-8 space-y-8">
            {education.map((item) => (
              <li
                key={item.id}
                className="grid gap-2 border-b border-border pb-8 last:border-0 md:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="text-[length:var(--text-title)] font-medium text-foreground">
                    {item.institution}
                  </p>
                  <p className="mt-1 text-caption text-neutral-300">
                    {item.major} · {item.degree}
                  </p>
                  {item.note ? (
                    <p className="mt-2 text-[length:var(--text-body)] text-muted">
                      {item.note}
                    </p>
                  ) : null}
                </div>
                <p className="text-caption text-neutral-300">{item.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
