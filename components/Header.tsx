"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LangToggle } from "@/components/ui/LangToggle";
import { localized, siteContent, uiStrings } from "@/lib/content";
import { DESKTOP_HEADER_NAV, FULL_HEADER_NAV } from "@/lib/nav-links";
import { scrollToSection } from "@/lib/scroll";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const { locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const drawerId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    closeMenu();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFirst = () => {
      const nodes = drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      nodes?.[0]?.focus();
    };
    const raf = requestAnimationFrame(focusFirst);
    const menuButton = menuButtonRef.current;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const nodes = drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes?.length) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen, closeMenu]);

  const navLabel = (item: { labelKr: string; labelEn: string }) =>
    locale === "ko" ? item.labelKr : item.labelEn;

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
            handleNavClick("#home");
          }}
          className="text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-opacity hover:opacity-70 focus-visible:focus-ring"
          aria-label={siteContent.meta.name}
        >
          JK
        </a>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <nav
            className="hidden items-center gap-2 lg:flex lg:gap-3 text-label uppercase tracking-[var(--tracking-label)] text-muted"
            aria-label={localized(locale, uiStrings.a11y.primaryNav)}
          >
            {DESKTOP_HEADER_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="transition-colors hover:text-foreground focus-visible:focus-ring"
              >
                {navLabel(item)}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden min-h-11 items-center justify-center border border-border px-4 py-2 text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring lg:inline-flex"
          >
            {localized(locale, uiStrings.header.contactCta)}
          </a>

          <LangToggle compact />

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={drawerId}
            aria-label={localized(locale, uiStrings.a11y.menuButton)}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen
              ? localized(locale, uiStrings.a11y.closeMenu)
              : localized(locale, uiStrings.a11y.menuButton)}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-neutral-950/60"
            aria-label={localized(locale, uiStrings.a11y.closeMenu)}
            onClick={closeMenu}
          />
          <nav
            id={drawerId}
            ref={drawerRef}
            aria-label={localized(locale, uiStrings.a11y.mobileNav)}
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-border bg-surface-overlay shadow-[var(--shadow-elevated)]"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="text-label uppercase tracking-[var(--tracking-label)] text-muted">
                {localized(locale, uiStrings.a11y.mobileNav)}
              </span>
              <button
                type="button"
                className="min-h-11 px-2 text-label uppercase tracking-[var(--tracking-label)] text-foreground focus-visible:focus-ring"
                onClick={closeMenu}
              >
                {localized(locale, uiStrings.a11y.closeMenu)}
              </button>
            </div>
            <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              {FULL_HEADER_NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex min-h-11 items-center px-3 text-label uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-foreground focus-visible:focus-ring"
                  >
                    {navLabel(item)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
