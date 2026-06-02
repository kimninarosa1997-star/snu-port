"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ProjectsFloatBgProps = {
  children: ReactNode;
};

export function ProjectsFloatBg({ children }: ProjectsFloatBgProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const section = text.closest(".projects-float") as HTMLElement | null;
    if (!section) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const viewH = window.innerHeight;

      const scrollRange = sectionH + viewH * 0.4;
      const scrolled = viewH * 0.2 - rect.top;
      const progress = Math.min(Math.max(scrolled / scrollRange, 0), 1);

      const travel = Math.max(sectionH * 0.78 - viewH * 0.15, 0);
      const offsetY = media.matches ? 0 : progress * travel;

      text.style.setProperty("--projects-bg-y", `${offsetY.toFixed(2)}px`);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const onMotionChange = () => update();
    media.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div className="projects-float-bg pointer-events-none select-none" aria-hidden="true">
      <p ref={textRef} className="projects-float-bg-text">
        {children}
      </p>
    </div>
  );
}
