"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LangToggle } from "@/components/ui/LangToggle";
import { localized, siteContent, uiStrings } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

const HEADER_NAV = [
  { href: "#projects", labelKr: "Work", labelEn: "Work" },
  { href: "#archive", labelKr: "News", labelEn: "News" },
  { href: "#about", labelKr: "About", labelEn: "About" },
  { href: "#contact", labelKr: "Contact", labelEn: "Contact" },
] as const;

export function Header() {
  const { locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-[var(--duration-base)] ${
        scrolled ? "border-b border-border bg-surface-overlay" : "border-b border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-content items-center justify-between gap-3 layout-gutter">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-opacity hover:opacity-70 focus-visible:focus-ring"
          aria-label={siteContent.meta.name}
        >
          JK
        </a>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <nav
            className="flex items-center gap-2 sm:gap-3 text-label uppercase tracking-[var(--tracking-label)] text-muted"
            aria-label={localized(locale, uiStrings.a11y.primaryNav)}
          >
            {HEADER_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="transition-colors hover:text-foreground focus-visible:focus-ring"
              >
                {locale === "ko" ? item.labelKr : item.labelEn}
              </a>
            ))}
          </nav>

          <LangToggle compact />
        </div>
      </div>
    </header>
  );
}
