"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LangToggle } from "@/components/ui/LangToggle";
import { localized, siteContent, uiStrings } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

export function Header() {
  const { locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigation } = siteContent;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-[background-color,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] ${
        scrolled ? "border-border bg-surface-overlay" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-content items-center justify-between px-6 md:px-10">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex h-9 w-9 items-center justify-center border border-border text-label text-foreground transition-colors hover:border-foreground focus-visible:focus-ring"
          aria-label={siteContent.meta.name}
        >
          JK
        </a>

        <nav className="hidden items-center gap-6 text-label text-muted lg:flex" aria-label={localized(locale, uiStrings.a11y.primaryNav)}>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="uppercase tracking-[var(--tracking-label)] transition-colors hover:text-foreground focus-visible:focus-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LangToggle />
          <button
          type="button"
          className="border border-border px-3 py-2 text-label uppercase tracking-[var(--tracking-label)] text-foreground lg:hidden focus-visible:focus-ring"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          >
            {localized(locale, uiStrings.a11y.menuButton)}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[var(--header-height)] z-40 bg-canvas px-6 py-8 shadow-[var(--shadow-elevated)] lg:hidden"
        >
          <nav className="flex flex-col gap-8 text-label uppercase tracking-[var(--tracking-label)] text-muted" aria-label={localized(locale, uiStrings.a11y.mobileNav)}>
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  scrollToSection(item.href);
                }}
                className="transition-colors hover:text-foreground focus-visible:focus-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 border-t border-border pt-8">
            <LangToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
