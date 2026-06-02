"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ScrollParallaxProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export function ScrollParallax({ children, speed = 0.1, className = "" }: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let raf = 0;

    const update = () => {
      const rect = node.getBoundingClientRect();
      const viewH = window.innerHeight;
      const centerDelta = rect.top + rect.height * 0.5 - viewH * 0.5;
      const offset = centerDelta * speed * -1;
      node.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const onMotionChange = () => {
      if (media.matches) {
        node.style.removeProperty("--parallax-y");
      } else {
        update();
      }
    };
    media.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", onMotionChange);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`scroll-parallax ${className}`.trim()}
      style={{ transform: "translate3d(0, var(--parallax-y, 0px), 0)" } as CSSProperties}
    >
      {children}
    </div>
  );
}
