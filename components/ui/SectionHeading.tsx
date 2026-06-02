import type { Locale } from "@/lib/content/helpers";
import { pickLocale } from "@/lib/content/helpers";
import type { SectionTitle } from "@/lib/content/types";

type SectionHeadingProps = {
  meta: SectionTitle;
  locale: Locale;
  headingId: string;
};

export function SectionHeading({ meta, locale, headingId }: SectionHeadingProps) {
  return (
    <header className="max-w-[42rem]">
      <h2
        id={headingId}
        className="text-[length:var(--text-headline)] font-medium leading-[var(--text-headline-lh)] tracking-tight text-foreground"
      >
        {pickLocale(locale, meta.titleKr, meta.titleEn)}
      </h2>
      <p className="mt-4 text-[length:var(--text-body-l)] leading-relaxed text-muted">
        {pickLocale(locale, meta.descriptionKr, meta.descriptionEn)}
      </p>
    </header>
  );
}
