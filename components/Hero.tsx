"use client";

import Image from "next/image";
import { useEffect } from "react";
import { portfolio } from "@/lib/portfolio-data";

const CITY_IMAGE =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85";

export function Hero() {
  useEffect(() => {
    history.scrollRestoration = "manual";
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="hero-visual relative min-h-[min(82vh,720px)] overflow-hidden">
          <div className="hero-image-reveal absolute inset-0 z-0">
            <div className="relative h-full w-full">
              <Image
                src={CITY_IMAGE}
                alt="도시 스카이라인"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/55" />
            </div>
          </div>

          <div className="relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-between pt-20 pb-10 md:pt-24 md:pb-14">
            <div className="hero-stage flex w-full flex-1 flex-col items-center justify-center gap-1 overflow-hidden md:gap-2">
              <p
                className="hero-pan-left pointer-events-none whitespace-nowrap font-serif text-[clamp(2rem,8vw,5rem)] font-normal italic leading-none tracking-tight text-white/95 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
                aria-hidden
              >
                Architect
              </p>
              <h1
                className="hero-pan-right pointer-events-none whitespace-nowrap text-[clamp(2.75rem,11vw,7.5rem)] font-black uppercase leading-none tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
                aria-label={`${portfolio.nameEn}, Architect`}
              >
                JinKyung Kim
              </h1>
            </div>

            <div className="w-full max-w-3xl shrink-0 text-center">
              <p className="text-[clamp(0.55rem,1.4vw,0.8rem)] font-medium tracking-[0.18em] text-neutral-300">
                {portfolio.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-14 pb-20 md:mt-16 md:pb-24">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <p className="text-lg leading-relaxed text-neutral-200 md:text-xl">
              {portfolio.intro}
            </p>
            <p className="text-sm leading-relaxed text-neutral-500 md:text-base md:pt-2">
              {portfolio.philosophy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
