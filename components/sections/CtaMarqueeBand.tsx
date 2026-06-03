"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Marquee } from "@/components/ui/Marquee";
import { localized, siteContent, uiStrings } from "@/lib/content";

export function CtaMarqueeBand() {
  const { locale } = useLanguage();
  const { contact } = siteContent;
  const label = localized(locale, uiStrings.ctaBand.label);
  const items = Array.from({ length: 6 }, () => label);

  return (
    <section aria-label={localized(locale, uiStrings.ctaBand.sectionAria)} className="band-cta">
      <Link
        href={`mailto:${contact.email}`}
        className="block border-y border-neutral-800 py-4 transition-opacity hover:opacity-80 focus-visible:focus-ring"
      >
        <Marquee
          items={items}
          className="text-label uppercase tracking-[var(--tracking-label)] text-foreground"
          speed="normal"
        />
      </Link>
    </section>
  );
}
