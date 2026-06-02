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
    <section
      id="top"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28 md:px-10 md:pt-32"
    >
      <div className="relative mx-auto flex min-h-[min(72vh,640px)] max-w-7xl flex-col items-center justify-center">
        <div className="hero-stage relative flex h-[min(58vh,520px)] w-full items-center justify-center">
          <div className="hero-image-reveal absolute inset-[8%] md:inset-[10%]">
            <div className="relative h-full w-full overflow-hidden rounded-sm">
              <Image
                src={CITY_IMAGE}
                alt="도시 스카이라인"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50" />
            </div>
          </div>

          <h1
            className="hero-name-pan pointer-events-none relative z-10 whitespace-nowrap text-[clamp(2.75rem,11vw,7.5rem)] font-black uppercase leading-none tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            aria-label={portfolio.nameEn}
          >
            JinKyung Kim
          </h1>
        </div>

        <div className="relative z-10 mt-10 w-full max-w-3xl text-center">
          <p className="text-[clamp(0.65rem,2vw,0.95rem)] font-bold tracking-[0.35em] text-white/80 md:tracking-[0.45em]">
            {portfolio.title}
          </p>
          <p className="mt-2 text-[clamp(0.55rem,1.4vw,0.8rem)] font-medium tracking-[0.18em] text-neutral-500">
            {portfolio.subtitle}
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 w-full max-w-5xl">
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
