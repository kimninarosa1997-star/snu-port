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

const HERO_NAV = [
  { href: "#projects", labelKr: "Work", labelEn: "Work" },
  { href: "#archive", labelKr: "News", labelEn: "News" },
  { href: "#about", labelKr: "About", labelEn: "About" },
  { href: "#contact", labelKr: "Contact", labelEn: "Contact" },
] as const;

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
      <div className="studio-hero-stage bg-primary pt-[var(--header-height)]">
        <div className="mx-auto flex max-w-content flex-col items-center layout-gutter pb-10 pt-8 md:pb-14 md:pt-12">
          <Marquee
            items={HERO_KEYWORDS}
            separator=" · "
            className="hero-keywords-marquee mb-6 w-full max-w-4xl"
            speed="slow"
            ariaHidden
          />

          <div className="relative w-full max-w-4xl overflow-hidden bg-neutral-950 shadow-[0_24px_64px_oklch(0_0_0_/_0.25)] aspect-[16/10]">
            <Image
              src={HERO_CITY_IMAGE}
              alt=""
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>

          <Marquee
            items={HERO_KEYWORDS}
            separator=" · "
            className="hero-keywords-marquee hero-keywords-marquee--reverse mt-6 w-full max-w-4xl"
            speed="slow"
            ariaHidden
          />
        </div>
      </div>

      <div className="border-b border-border">
        <nav
          className="mx-auto max-w-content layout-gutter py-10 md:py-14"
          aria-label={locale === "ko" ? "주요 섹션" : "Primary sections"}
        >
          <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-12 md:gap-x-16">
            {HERO_NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-studio-nav-link focus-visible:focus-ring"
                >
                  {locale === "ko" ? item.labelKr : item.labelEn}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-prose md:mt-12">
            <h1 id="hero-heading" className="sr-only">
              {meta.name} — {tagline}
            </h1>
            <p className="text-label text-muted">
              {locale === "ko" ? `Hey, ${meta.nameKr} here.` : `Hey, ${meta.name} here.`}
            </p>
            <p className="mt-4 text-body-l leading-relaxed text-foreground">{supporting}</p>
            <p className="mt-3 text-body font-medium text-muted">{tagline}</p>
          </div>
        </nav>

        {sectionMeta ? (
          <p className="sr-only">
            {pickLocale(locale, sectionMeta.descriptionKr, sectionMeta.descriptionEn)}
          </p>
        ) : null}
      </div>
    </section>
  );
}
