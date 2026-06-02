"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Marquee } from "@/components/ui/Marquee";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

const HERO_CITY_IMAGE = "/images/hero-city.jpg";

const HERO_KEYWORDS = ["Architecture", "Urban", "Real Estate"] as const;

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
    <section id="home" aria-labelledby="hero-heading" className="bg-background">
      <div className="studio-hero-stage">
        <div className="hero-fullbleed relative h-svh w-full overflow-hidden bg-neutral-950">
          <Image
            src={HERO_CITY_IMAGE}
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />

          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-neutral-950/45 via-transparent to-neutral-950/50"
            aria-hidden="true"
          />

          <div className="hero-keywords-overlay pointer-events-none absolute inset-0 z-10 flex flex-col justify-between py-10 md:py-14">
            <Marquee
              items={HERO_KEYWORDS}
              separator=" · "
              className="hero-keywords-marquee w-full"
              speed="slow"
              ariaHidden
            />
            <Marquee
              items={HERO_KEYWORDS}
              separator=" · "
              className="hero-keywords-marquee hero-keywords-marquee--reverse w-full"
              speed="slow"
              ariaHidden
            />
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="mx-auto max-w-content layout-gutter py-10 md:py-14">
          <div className="max-w-prose">
            <h1 id="hero-heading" className="sr-only">
              {meta.name} — {tagline}
            </h1>
            <p className="text-label text-muted">
              {locale === "ko" ? `Hey, ${meta.nameKr} here.` : `Hey, ${meta.name} here.`}
            </p>
            <p className="mt-4 font-display text-body-l leading-relaxed text-foreground">{supporting}</p>
            <p className="mt-3 text-body font-medium text-muted">{tagline}</p>
          </div>
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
