"use client";

import { useEffect } from "react";

const INTRO_SCROLL_MS = 1400;

export function PageEntryScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    history.scrollRestoration = "manual";

    const { hash } = window.location;
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    const maxScroll = document.documentElement.scrollHeight;
    window.scrollTo(0, maxScroll);

    const html = document.documentElement;
    html.style.overflow = "hidden";

    const scrollTimer = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 120);

    const unlockTimer = window.setTimeout(() => {
      html.style.overflow = "";
    }, INTRO_SCROLL_MS + 120);

    return () => {
      window.clearTimeout(scrollTimer);
      window.clearTimeout(unlockTimer);
      html.style.overflow = "";
    };
  }, []);

  return null;
}
