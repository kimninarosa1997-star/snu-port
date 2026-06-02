"use client";

import { portfolio } from "@/lib/portfolio-data";

const EMPHASIS = ["아름답고", "지속", "가능한"];

function AboutStatement({ copyId }: { copyId: string }) {
  const words = portfolio.aboutStatement.split(" ");

  return (
    <p className="inline-flex shrink-0 items-center whitespace-nowrap pr-16 text-[clamp(1.25rem,3.5vw,2.25rem)] font-light leading-snug text-neutral-300">
      <span className="mr-3 text-neutral-600">…</span>
      {words.map((word, i) => {
        const isEmphasis = EMPHASIS.some((e) => word.includes(e));
        if (isEmphasis) {
          return (
            <strong key={`${copyId}-${i}`} className="mx-[0.15em] font-bold text-white">
              {word}
            </strong>
          );
        }
        return (
          <span key={`${copyId}-${i}`}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

export function AboutMarquee() {
  return (
    <div
      className="about-marquee mt-20 md:mt-28"
      aria-label={portfolio.aboutStatement}
    >
      <div className="about-marquee-track">
        <AboutStatement copyId="a" />
        <AboutStatement copyId="b" />
      </div>
    </div>
  );
}
