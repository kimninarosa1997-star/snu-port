import { Marquee } from "@/components/ui/Marquee";import { uiStrings } from "@/lib/content";
import type { SectionTitle } from "@/lib/content/types";
import { pickLocale } from "@/lib/content/helpers";

type SectionHeadingProps = {
  meta: SectionTitle;
  locale: "ko" | "en";
  headingId: string;
  variant?: "dark" | "light" | "muted";
  marqueeKey?: "projects" | "skills";
  showDescription?: boolean;
};

export function SectionHeading({
  meta,
  locale,
  headingId,
  variant = "dark",
  marqueeKey,
  showDescription = true,
}: SectionHeadingProps) {
  const title = pickLocale(locale, meta.titleKr, meta.titleEn);
  const description = pickLocale(locale, meta.descriptionKr, meta.descriptionEn);
  const marqueeItems =
    marqueeKey != null
      ? locale === "ko"
        ? uiStrings.marquee[marqueeKey].kr
        : uiStrings.marquee[marqueeKey].en
      : null;

  return (
    <header>
      {marqueeItems ? (
        <Marquee
          items={marqueeItems}
          className={`mb-8 text-label uppercase tracking-[var(--tracking-label)] ${
            variant === "light" ? "text-[var(--color-band-light-muted)]" : "text-muted"
          }`}
          speed="slow"
        />
      ) : null}
      <h2
        id={headingId}
        className={`text-headline ${variant === "light" ? "text-[var(--color-band-light-ink)]" : ""}`}
      >
        {title}
      </h2>
      {showDescription ? (
        <p
          className={`mt-4 max-w-prose text-body-l ${
            variant === "light" ? "text-[var(--color-band-light-muted)]" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
