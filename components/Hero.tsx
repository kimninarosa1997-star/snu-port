import { portfolio } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28 md:px-10 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-24 select-none px-4 md:top-28">
        <h1 className="text-center text-[clamp(3.5rem,14vw,11rem)] font-black leading-[0.85] tracking-tighter text-white/90">
          {portfolio.nameEn.split(" ").map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <p className="mt-2 text-center text-[clamp(0.65rem,2vw,1.1rem)] font-bold tracking-[0.35em] text-white/70 md:tracking-[0.5em]">
          {portfolio.title}
        </p>
        <p className="text-center text-[clamp(0.55rem,1.5vw,0.85rem)] font-medium tracking-[0.2em] text-neutral-500">
          {portfolio.subtitle}
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-[clamp(12rem,38vw,22rem)] w-full max-w-5xl">
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
