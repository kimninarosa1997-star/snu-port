"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Marquee } from "@/components/ui/Marquee";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";
import { scrollToSection } from "@/lib/scroll";

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
  const { ctaPrimary, ctaSecondary } = hero;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="flex min-h-[min(100svh,720px)] flex-col bg-background"
    >
      <div className="studio-hero-stage relative flex min-h-0 flex-1 flex-col">
        <div className="hero-fullbleed relative min-h-[38vh] w-full flex-1 overflow-hidden bg-neutral-950 sm:min-h-[42vh]">
          <Image
            src={HERO_CITY_IMAGE}
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={80}
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

      <div className="shrink-0 border-b border-border">
        <div className="mx-auto flex max-w-content flex-col gap-6 layout-gutter py-8 md:py-10">
          <div className="max-w-prose">
            <h1 id="hero-heading" className="text-label text-muted">
              {locale === "ko" ? `Hey, ${meta.nameKr} here.` : `Hey, ${meta.name} here.`}
            </h1>
            <p className="mt-4 font-display text-body-l leading-relaxed text-foreground">{supporting}</p>
            <p className="mt-3 text-body font-medium text-muted">{tagline}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={ctaPrimary.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(ctaPrimary.href);
              }}
              className="inline-flex min-h-11 w-full items-center justify-center bg-neutral-950 px-7 py-3 text-label uppercase tracking-[var(--tracking-label)] text-neutral-050 transition-colors hover:bg-neutral-800 focus-visible:focus-ring sm:w-auto"
            >
              {ctaPrimary.label}
            </a>
            <a
              href={ctaSecondary.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(ctaSecondary.href);
              }}
              className="inline-flex min-h-11 w-full items-center justify-center border border-border px-7 py-3 text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring sm:w-auto"
            >
              {ctaSecondary.label}
            </a>
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
