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

export function ExperienceSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "experience");
  const { experience, courses } = siteContent;

  if (!sectionMeta) return null;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="studio-section border-t border-border bg-background section-py">
      <div className="mx-auto max-w-content layout-gutter">
        <header className="border-b border-border pb-8 md:pb-10">
          <h2 id="experience-heading" className="text-studio-section-title">
            {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
          </h2>
        </header>

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="text-subhead font-bold text-foreground">
              {localized(locale, uiStrings.experience.work)}
            </h3>
            <ol className="timeline-list mt-8 space-y-10">
              {experience.map((item) => (
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

          <div>
            <h3 className="text-subhead font-bold text-foreground">
              {localized(locale, uiStrings.experience.courses)}
            </h3>
            <ul className="mt-8 space-y-6">
              {courses.map((course) => (
                <li key={course.id} className="border-b border-border pb-6 last:border-0">
                  <p className="text-caption text-muted">{course.year}</p>
                  <p className="mt-1 text-body font-bold text-foreground">
                    {pickLocale(locale, course.titleKr, course.titleEn)}
                  </p>
                  <p className="mt-1 text-caption text-muted">{course.institution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
