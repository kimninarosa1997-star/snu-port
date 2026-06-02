"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    history.scrollRestoration = "manual";

    const { hash } = window.location;
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    const target = document.getElementById(id);
    if (!target) {
      window.scrollTo(0, 0);
      return;
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return null;
}
