"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent, localized, uiStrings } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

function OrganizationLabel({ text }: { text: string }) {
  const parts = text.split(/\s*\/\s*/);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <span key={`${part.slice(0, 12)}-${index}`}>
      {index > 0 ? <br /> : null}
      {part}
    </span>
  ));
}

function timelineSortKey(period: string): number {
  const endPart = period.split("~").pop()?.trim() ?? period.trim();
  if (/present|현재|재학/i.test(endPart)) return 999_912;

  const match = endPart.match(/(\d{4})(?:\/(\d{1,2}))?/);
  if (match) return Number(match[1]) * 100 + Number(match[2] ?? 12);

  const yearOnly = period.match(/^(\d{4})$/);
  return yearOnly ? Number(yearOnly[1]) * 100 + 12 : 0;
}

export function ExperienceSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "experience");
  const { experience, courses } = siteContent;

  if (!sectionMeta) return null;

  const timelineItems = [
    ...experience.map((item) => ({
      id: item.id,
      period: item.period,
      organization: item.organization,
      role: item.role,
      result: item.result,
      sortKey: timelineSortKey(item.period),
    })),
    ...courses.map((course) => ({
      id: course.id,
      period: course.year,
      organization: pickLocale(locale, course.titleKr, course.titleEn),
      role: course.institution,
      result: course.description,
      sortKey: timelineSortKey(course.year),
    })),
  ].sort((a, b) => b.sortKey - a.sortKey);

  return (
    <section id="experience" aria-labelledby="experience-heading" className="studio-section border-t border-border bg-background section-py">
      <div className="mx-auto max-w-content layout-gutter">
        <header className="border-b border-border pb-8 md:pb-10">
          <h2 id="experience-heading" className="text-studio-section-title">
            {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
          </h2>
        </header>

        <div className="mt-12 max-w-3xl">
          <h3 className="text-subhead font-bold text-foreground">
            {localized(locale, uiStrings.experience.work)}
          </h3>
          <ol className="timeline-list mt-8 space-y-10">
            {timelineItems.map((item) => (
              <li key={item.id}>
                <span className="timeline-dot" aria-hidden="true" />
                <p className="text-caption text-muted">{item.period}</p>
                <p className="mt-1 text-title font-bold leading-snug text-foreground">
                  <OrganizationLabel text={item.organization} />
                </p>
                <p className="mt-1 text-caption text-muted">{item.role}</p>
                <p className="mt-4 text-body leading-relaxed text-muted">{item.result}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
