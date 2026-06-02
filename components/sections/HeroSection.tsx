"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { siteContent, localized, uiStrings } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

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

  const supporting = pickLocale(locale, hero.supportingKr, hero.supportingEn);
  const tagline = pickLocale(locale, hero.oneLineKr, hero.oneLineEn);
  const profileAlt =
    locale === "ko"
      ? uiStrings.about.profileAlt.kr(meta.nameKr)
      : uiStrings.about.profileAlt.en(meta.name);

  const heroWords =
    locale === "ko"
      ? ["김", "진경", "도시", "설계"]
      : ["Jinkyung", "Kim", "Urban", "Designer"];

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="band-dark min-h-[min(100svh,900px)] section-py"
    >
      <div className="mx-auto w-full max-w-content layout-gutter">
        <div className="hero-enter grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          <div className="order-2 flex flex-col gap-0 lg:order-1 lg:text-right">
            <span className="text-hero-stack leading-none">{heroWords[0]}</span>
            <span className="text-hero-stack leading-none lg:ml-auto">{heroWords[2]}</span>
          </div>

          <div className="hero-image-enter order-1 mx-auto w-full max-w-[280px] lg:order-2 lg:max-w-[320px]">
            <ProfileImage
              alt={profileAlt}
              fallbackCaption={localized(locale, uiStrings.profile.fallbackCaption)}
              className="aspect-square max-w-none border-neutral-800"
              square
            />
          </div>

          <div className="order-3 flex flex-col gap-0 lg:order-3">
            <span className="text-hero-stack leading-none">{heroWords[1]}</span>
            <span className="text-hero-stack leading-none">{heroWords[3]}</span>
          </div>
        </div>

        <div className="hero-enter mx-auto mt-12 max-w-prose lg:mt-16">
          <p className="text-label text-muted">
            {locale === "ko" ? `Hey, ${meta.nameKr} here.` : `Hey, ${meta.name} here.`}
          </p>
          <h1 id="hero-heading" className="sr-only">
            {meta.name} — {tagline}
          </h1>
          <p className="mt-4 text-body-l leading-relaxed text-neutral-100">{supporting}</p>
          <p className="mt-3 font-display text-[length:var(--text-editorial)] italic text-foreground">
            {tagline}
          </p>
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
