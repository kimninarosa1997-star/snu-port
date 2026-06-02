"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ScrollParallaxProps = {
  children: ReactNode;
  speed?: number;
  speedX?: number;
  anchor?: "self" | "parent";
  className?: string;
};

export function ScrollParallax({
  children,
  speed = 0.1,
  speedX = 0,
  anchor = "self",
  className = "",
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let raf = 0;

    const update = () => {
      const target = anchor === "parent" ? node.parentElement : node;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const viewH = window.innerHeight;

      if (anchor === "parent") {
        const offsetY = rect.top * speed * -0.4;
        const offsetX = rect.top * speedX * 0.06;
        node.style.setProperty("--parallax-y", `${offsetY.toFixed(2)}px`);
        node.style.setProperty("--parallax-x", `${offsetX.toFixed(2)}px`);
        return;
      }

      const centerDelta = rect.top + rect.height * 0.5 - viewH * 0.5;
      node.style.setProperty("--parallax-y", `${(centerDelta * speed * -1).toFixed(2)}px`);
      node.style.setProperty("--parallax-x", `${(centerDelta * speedX * -1).toFixed(2)}px`);
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
        node.style.removeProperty("--parallax-x");
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
  }, [speed, speedX, anchor]);

  return (
    <div
      ref={ref}
      className={`scroll-parallax ${className}`.trim()}
      style={
        {
          transform: "translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0)",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
