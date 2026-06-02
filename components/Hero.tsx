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
      <div className="hero-visual relative min-h-[min(82vh,720px)] w-full overflow-hidden">
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

        <div className="relative z-10 flex h-full min-h-[inherit] w-full flex-col items-stretch justify-between pt-20 pb-10 md:pt-24 md:pb-14">
          <div className="hero-stage flex w-full flex-1 items-center overflow-hidden">
            <div className="hero-text-settle flex flex-col items-end gap-1 md:gap-2">
              <p
                className="pointer-events-none whitespace-nowrap font-serif text-[clamp(2.25rem,10vw,6rem)] font-normal italic leading-none tracking-tight text-white/95 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
                aria-hidden
              >
                Architect
              </p>
              <h1
                className="pointer-events-none whitespace-nowrap text-[clamp(2.75rem,12vw,8rem)] font-black uppercase leading-none tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
                aria-label={`${portfolio.nameEn}, Architect`}
              >
                JinKyung Kim
              </h1>
            </div>
          </div>

          <div className="w-full shrink-0 space-y-2 overflow-hidden px-4 text-center md:px-6">
            <p className="text-[clamp(0.65rem,1.8vw,0.95rem)] font-semibold tracking-[0.35em] text-neutral-200 md:tracking-[0.45em]">
              {portfolio.title}
            </p>
            <p className="text-[clamp(0.55rem,1.6vw,0.85rem)] font-medium tracking-[0.22em] text-neutral-400 md:tracking-[0.28em]">
              {portfolio.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-7xl px-6 pb-20 md:mt-16 md:px-10 md:pb-24">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <p className="text-lg leading-relaxed text-neutral-200 md:text-xl">
            {portfolio.intro}
          </p>
          <p className="text-sm leading-relaxed text-neutral-500 md:text-base md:pt-2">
            {portfolio.philosophy}
          </p>
        </div>
      </div>
    </section>
  );
}
