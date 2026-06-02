"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent, localized, uiStrings } from "@/lib/content";
import { getSectionMeta, pickLocale, splitParagraphs } from "@/lib/content/helpers";

export function AboutSection() {
  const { locale } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const sectionMeta = getSectionMeta(siteContent, "about");
  const { about, strengths, education, interests } = siteContent;

  if (!sectionMeta) return null;

  const fullBody = pickLocale(locale, about.bodyKr, about.bodyEn);
  const minimalBody = pickLocale(locale, about.minimalKr, about.minimalEn);

  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="band-muted section-py"
      >
        <div className="mx-auto max-w-content layout-gutter">
          <h2 id="about-heading" className="text-center text-headline">
            {locale === "ko" ? (
              <>
                조금 <span className="italic">소개</span>.
              </>
            ) : (
              <>
                A <span className="italic">little</span> about me.
              </>
            )}
          </h2>

          <div className="mx-auto mt-12 max-w-[52rem] text-center font-display text-editorial leading-relaxed">
            <div className="space-y-6 md:hidden">
              {splitParagraphs(expanded ? fullBody : minimalBody).map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="hidden space-y-6 md:block">
              {splitParagraphs(fullBody).map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <button
              type="button"
              className="mt-8 text-label uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-[var(--color-band-muted-ink)] focus-visible:focus-ring md:hidden"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded
                ? localized(locale, uiStrings.about.showLess)
                : localized(locale, uiStrings.about.readMore)}
            </button>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-details-heading" className="band-dark section-py">
        <div className="mx-auto max-w-content layout-gutter">
          <h3 id="about-details-heading" className="sr-only">
            {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {strengths.map((strength) => (
              <article key={strength.id} className="border-t border-border pt-6">
                <h4 className="font-display text-[length:var(--text-title)] font-medium text-foreground">
                  {strength.title}.
                </h4>
                <p className="mt-3 text-body leading-relaxed text-neutral-100">
                  {pickLocale(locale, strength.descriptionKr, strength.descriptionEn)}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h4 className="text-label text-muted">
              {localized(locale, uiStrings.about.researchInterests)}
            </h4>
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
            <h4 className="text-label text-muted">
              {localized(locale, uiStrings.about.education)}
            </h4>
            <ol className="mt-8 space-y-8">
              {education.map((item) => (
                <li
                  key={item.id}
                  className="grid gap-2 border-b border-border pb-8 last:border-0 md:grid-cols-[1fr_auto]"
                >
                  <div>
                    <p className="text-title font-medium text-foreground">{item.institution}</p>
                    <p className="mt-1 text-caption text-neutral-300">
                      {item.major} · {item.degree}
                    </p>
                    {item.note ? (
                      <p className="mt-2 text-body text-muted">{item.note}</p>
                    ) : null}
                  </div>
                  <p className="text-caption text-neutral-300">{item.period}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
