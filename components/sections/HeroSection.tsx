"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";
import { scrollToSection } from "@/lib/scroll";

export function HeroSection() {
  const { locale } = useLanguage();
  const { hero, meta } = siteContent;
  const sectionMeta = getSectionMeta(siteContent, "home");

  useEffect(() => {
    history.scrollRestoration = "manual";
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const oneLine = pickLocale(locale, hero.oneLineKr, hero.oneLineEn);
  const supporting = pickLocale(locale, hero.supportingKr, hero.supportingEn);
  const subLine = locale === "ko" ? hero.oneLineEn : hero.oneLineKr;
  const keywords =
    locale === "ko" ? hero.interestKeywordsKr : meta.keywords.slice(0, 6);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="flex min-h-[min(100svh,720px)] flex-col justify-center section-py"
    >
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <div className="hero-title-enter max-w-[42rem]">
          <p className="text-label text-muted">
            {meta.name}
            {locale === "ko" ? ` · ${meta.nameKr}` : ""}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 font-display text-[length:var(--text-display-xl)] uppercase leading-[var(--text-display-xl-lh)] tracking-[var(--tracking-display)] text-foreground"
          >
            {oneLine}
          </h1>
          <p className="mt-4 text-label text-muted">{subLine}</p>
        </div>

        <p className="mt-10 max-w-[42rem] text-[length:var(--text-body-l)] leading-relaxed text-neutral-100">
          {supporting}
        </p>

        {keywords.length > 0 ? (
          <ul
            className="mt-8 flex max-w-full gap-2 overflow-x-auto pb-1 md:flex-wrap"
            aria-label={locale === "ko" ? "관심 키워드" : "Keywords"}
          >
            {keywords.map((keyword) => (
              <li
                key={keyword}
                className="shrink-0 border border-border px-3 py-2 text-label uppercase tracking-[var(--tracking-label)] text-neutral-300"
              >
                {keyword}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={hero.ctaPrimary.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(hero.ctaPrimary.href);
            }}
            className="inline-flex w-full items-center justify-center bg-neutral-050 px-7 py-3.5 text-label uppercase tracking-[var(--tracking-label)] text-neutral-950 transition-colors hover:bg-neutral-100 focus-visible:focus-ring sm:w-auto"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(hero.ctaSecondary.href);
            }}
            className="inline-flex w-full items-center justify-center border border-border bg-transparent px-7 py-3.5 text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring sm:w-auto"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>

        {sectionMeta ? (
          <p className="sr-only">
            {pickLocale(locale, sectionMeta.descriptionKr, sectionMeta.descriptionEn)}
          </p>
        ) : null}
      </div>
    </section>
  );
}
