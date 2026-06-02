"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProfileImage } from "@/components/ui/ProfileImage";
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
  const profileAlt =
    locale === "ko"
      ? uiStrings.about.profileAlt.kr(siteContent.meta.nameKr)
      : uiStrings.about.profileAlt.en(siteContent.meta.name);

  const bodyParagraphs = (text: string) =>
    splitParagraphs(text).map((paragraph) => (
      <p key={paragraph.slice(0, 24)} className="text-body leading-relaxed text-muted">
        {paragraph}
      </p>
    ));

  return (
    <>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="studio-section border-t border-border bg-background section-py"
      >
        <div className="mx-auto max-w-content layout-gutter">
          <header className="pb-8 md:pb-10">
            <h2 id="about-heading" className="text-studio-section-title">
              {locale === "ko" ? "About" : "About"}
            </h2>
          </header>

          <div className="mx-auto mt-12 max-w-[56rem]">
            <div className="grid items-start gap-10 md:grid-cols-[minmax(0,240px)_1fr] md:gap-12 lg:grid-cols-[minmax(0,280px)_1fr]">
              <ProfileImage
                alt={profileAlt}
                fallbackCaption={localized(locale, uiStrings.profile.fallbackCaption)}
                className="mx-auto w-full max-w-[240px] border-neutral-800/30 md:mx-0 lg:max-w-[280px]"
              />

              <div className="space-y-4 text-left md:pt-2">
                <div className="space-y-4 md:hidden">{bodyParagraphs(expanded ? fullBody : minimalBody)}</div>
                <div className="hidden space-y-4 md:block">{bodyParagraphs(fullBody)}</div>
                <button
                  type="button"
                  className="mt-4 text-label uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-foreground focus-visible:focus-ring md:hidden"
                  aria-expanded={expanded}
                  onClick={() => setExpanded((value) => !value)}
                >
                  {expanded
                    ? localized(locale, uiStrings.about.showLess)
                    : localized(locale, uiStrings.about.readMore)}
                </button>

                {education.length > 0 ? (
                  <div className="mt-8 space-y-1.5">
                    {education.map((item) => (
                      <p key={item.id} className="text-caption leading-relaxed text-muted">
                        {item.institution} · {item.major}
                        {item.note ? ` · ${item.note}` : null}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-details-heading" className="studio-section bg-background section-py">
        <div className="mx-auto max-w-content layout-gutter">
          <h3 id="about-details-heading" className="sr-only">
            {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {strengths.map((strength) => (
              <article
                key={strength.id}
                className="border border-border bg-white/80 p-5 backdrop-blur-sm"
              >
                <h4 className="text-subhead font-bold text-foreground">
                  {strength.title}
                </h4>
                <p className="mt-3 text-body leading-relaxed text-muted">
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
                  className="border border-border bg-white/80 px-4 py-3 text-label text-muted backdrop-blur-sm"
                >
                  {pickLocale(locale, interest.titleKr, interest.titleEn)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
