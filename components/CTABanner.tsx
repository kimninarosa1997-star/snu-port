export function CTABanner() {
  return (
    <section className="border-y border-neutral-800 bg-black">
      <a
        href="#contact"
        className="group mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-16 text-center transition-colors hover:bg-neutral-950 md:py-20"
      >
        <span className="text-[clamp(1.5rem,4vw,3rem)] font-black tracking-tight">
          Want to work together?
        </span>
        <span className="text-neutral-600 transition-colors group-hover:text-white">•</span>
        <span className="text-[clamp(1.5rem,4vw,3rem)] font-black tracking-tight underline decoration-neutral-700 underline-offset-8 transition-colors group-hover:decoration-white">
          Click here
        </span>
      </a>
    </section>
  );
}
