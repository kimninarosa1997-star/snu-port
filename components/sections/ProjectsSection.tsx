"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

const MASONRY_SPANS = [
  "sm:col-span-7 sm:row-span-2 min-h-[320px]",
  "sm:col-span-5 min-h-[240px]",
  "sm:col-span-5 min-h-[240px]",
  "sm:col-span-7 min-h-[280px]",
];

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "projects");
  const { projects } = siteContent;

  if (!sectionMeta) return null;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="band-dark section-py">
      <div className="mx-auto max-w-content layout-gutter">
        <SectionHeading
          meta={sectionMeta}
          locale={locale}
          headingId="projects-heading"
          marqueeKey="projects"
          showDescription={false}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:auto-rows-[minmax(180px,auto)]">
          {projects.map((project, index) => {
            const title = pickLocale(locale, project.titleKr, project.titleEn);
            const summary = pickLocale(locale, project.summaryKr, project.summaryEn);
            const span = MASONRY_SPANS[index] ?? "sm:col-span-6";

            return (
              <article key={project.id} className={`group flex flex-col ${span}`}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex h-full flex-col overflow-hidden border border-border transition-colors hover:border-neutral-500 focus-visible:focus-ring"
                >
                  <div className="project-card-visual relative min-h-[160px] flex-1 overflow-hidden">
                    <div className="absolute inset-0 flex items-end p-4">
                      <p className="text-label text-neutral-300">{project.period}</p>
                    </div>
                    <div className="absolute inset-0 bg-canvas/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="border-t border-border bg-neutral-900 p-4 transition-colors group-hover:bg-neutral-800">
                    <h3 className="text-title font-medium text-foreground">{title}</h3>
                    <p className="mt-1 text-caption text-neutral-300">{project.organization}</p>
                    <p className="mt-3 line-clamp-2 text-body text-neutral-100">{summary}</p>
                    <p className="mt-4 text-label text-muted">
                      {locale === "ko" ? "프로젝트 보기 →" : "View project →"}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
