"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import { localized, uiStrings } from "@/lib/content";

export function ThemeToggle() {
  const { locale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={theme === "light"}
      aria-label={localized(locale, uiStrings.theme.toggle)}
      className="border border-border px-2 py-1.5 text-label uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:border-foreground hover:text-foreground focus-visible:focus-ring"
    >
      {theme === "dark"
        ? localized(locale, uiStrings.theme.light)
        : localized(locale, uiStrings.theme.dark)}
    </button>
  );
}
