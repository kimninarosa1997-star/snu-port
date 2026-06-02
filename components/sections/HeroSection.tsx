"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

/** Replace with `/images/hero-city.jpg` after adding a local asset */
const HERO_CITY_SRC =
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=2400&q=85";

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

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-svh w-full overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src={HERO_CITY_SRC}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg-spread object-cover object-center"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-svh flex-col layout-gutter">
        <div className="hero-title-stage flex flex-1 w-full flex-col items-end justify-center overflow-hidden pt-[var(--header-height)] text-right">
          <p
            className="hero-text-travel-left text-hero-role whitespace-nowrap text-foreground drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)]"
            aria-hidden="true"
          >
            Architect
          </p>
          <p
            className="hero-text-travel-right mt-1 whitespace-nowrap text-hero-name text-foreground drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)] sm:mt-2"
            aria-hidden="true"
          >
            Jinkyung Kim
          </p>
        </div>

        <div className="hero-enter mx-auto w-full max-w-prose pb-[clamp(2rem,8vh,5rem)]">
          <h1 id="hero-heading" className="sr-only">
            Architect Jinkyung Kim — {tagline}
          </h1>
          <p className="text-label text-neutral-300">
            {locale === "ko" ? `Hey, ${meta.nameKr} here.` : `Hey, ${meta.name} here.`}
          </p>
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
