"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

export function ExperienceSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "experience");
  const { experience, awards, courses } = siteContent;

  if (!sectionMeta) return null;

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-py bg-neutral-900"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          meta={sectionMeta}
          locale={locale}
          headingId="experience-heading"
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="text-label text-muted">
              {locale === "ko" ? "경력" : "Experience"}
            </h3>
            <ol className="mt-8 space-y-10 border-l border-border pl-6">
              {experience.map((item) => (
                <li key={item.id} className="relative">
                  <span className="absolute -left-[calc(0.5rem+1px)] top-1.5 h-2 w-2 bg-neutral-300" />
                  <p className="text-caption text-neutral-300">{item.period}</p>
                  <p className="mt-1 text-[length:var(--text-title)] font-medium text-foreground">
                    {item.organization}
                  </p>
                  <p className="mt-1 text-caption text-neutral-300">{item.role}</p>
                  <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-neutral-100">
                    {item.result}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-label text-muted">
                {locale === "ko" ? "수상" : "Awards"}
              </h3>
              <ul className="mt-8 space-y-6">
                {awards.map((award) => (
                  <li key={award.id} className="border-b border-border pb-6 last:border-0">
                    <p className="text-caption text-neutral-300">{award.year}</p>
                    <p className="mt-1 text-[length:var(--text-body)] font-medium text-foreground">
                      {pickLocale(locale, award.titleKr, award.titleEn)}
                    </p>
                    <p className="mt-1 text-caption text-neutral-300">
                      {award.organization}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-label text-muted">
                {locale === "ko" ? "교육·수료" : "Courses"}
              </h3>
              <ul className="mt-8 space-y-6">
                {courses.map((course) => (
                  <li key={course.id} className="border-b border-border pb-6 last:border-0">
                    <p className="text-caption text-neutral-300">{course.year}</p>
                    <p className="mt-1 text-[length:var(--text-body)] font-medium text-foreground">
                      {pickLocale(locale, course.titleKr, course.titleEn)}
                    </p>
                    <p className="mt-1 text-caption text-neutral-300">
                      {course.institution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
