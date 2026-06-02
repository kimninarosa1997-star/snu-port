"use client";

export function CTABanner() {
  return (
    <section className="border-y border-border bg-background">
      <a
        href="#contact"
        onClick={(e) => {
          const target = document.getElementById("contact");
          if (!target) return;
          e.preventDefault();
          window.history.replaceState(null, "", "#contact");
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="group mx-auto flex max-w-content items-center justify-center gap-3 px-6 py-16 text-center transition-colors duration-[var(--duration-base)] hover:bg-surface md:py-20"
      >
        <span className="text-[clamp(1.5rem,4vw,3rem)] font-black tracking-tight">
          Want to work together?
        </span>
        <span className="text-faint transition-colors group-hover:text-foreground">•</span>
        <span className="text-[clamp(1.5rem,4vw,3rem)] font-black tracking-tight underline decoration-border-strong underline-offset-8 transition-colors group-hover:decoration-foreground">
          Click here
        </span>
      </a>
    </section>
  );
}
