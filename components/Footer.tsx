"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Marquee } from "@/components/ui/Marquee";
import { localizedFn, siteContent, uiStrings } from "@/lib/content";

export function Footer() {
  const { locale } = useLanguage();
  const { contact, footer, meta } = siteContent;
  const footerMarquee =
    locale === "ko" ? uiStrings.marquee.footer.kr : uiStrings.marquee.footer.en;

  return (
    <footer className="band-dark border-t border-border">
      <div className="mx-auto max-w-content px-6 py-8 md:px-10">
        <p className="text-label text-muted">{footer}</p>
      </div>
      <a
        href={`mailto:${contact.email}`}
        className="block border-t border-border py-5 transition-opacity hover:opacity-80 focus-visible:focus-ring"
        aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, contact.name)}
      >
        <Marquee
          items={Array.from({ length: 8 }, (_, i) => footerMarquee[i % footerMarquee.length]!)}
          className="text-label uppercase tracking-[var(--tracking-label)] text-muted"
          speed="slow"
        />
      </a>
      <p className="sr-only">
        {meta.nameKr} · {meta.positionKr}
      </p>
    </footer>
  );
}
