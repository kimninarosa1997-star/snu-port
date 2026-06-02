"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProjectGridCard } from "@/components/projects/ProjectGridCard";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

/** A LINE 스타일 — full / half 혼합 그리드 */
const GRID_LAYOUT = [
  { span: "col-span-full", aspect: "aspect-[16/10] md:aspect-[16/9]" },
  { span: "col-span-full md:col-span-1", aspect: "aspect-[4/5]" },
  { span: "col-span-full md:col-span-1", aspect: "aspect-[4/5]" },
  { span: "col-span-full", aspect: "aspect-[16/10] md:aspect-[21/9]" },
  { span: "col-span-full md:col-span-1", aspect: "aspect-[3/4]" },
  { span: "col-span-full md:col-span-1", aspect: "aspect-[3/4]" },
  { span: "col-span-full", aspect: "aspect-[16/10]" },
] as const;

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "projects");
  const { projects } = siteContent;

  if (!sectionMeta) return null;

  const readLabel = locale === "ko" ? "프로젝트 보기 →" : "View project →";

  return (
    <section id="projects" aria-labelledby="projects-heading" className="studio-section bg-background">
      <div className="mx-auto max-w-content layout-gutter section-py">
        <header className="pb-8 md:pb-10">
          <h2 id="projects-heading" className="text-studio-section-title">
            {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
          </h2>
        </header>

        <div className="mt-4 grid grid-cols-1 gap-x-10 md:grid-cols-2">
          {projects.map((project, index) => {
            const layout = GRID_LAYOUT[index] ?? GRID_LAYOUT[0];

            return (
              <div key={project.id} className={layout.span}>
                <ProjectGridCard
                  project={project}
                  locale={locale}
                  aspectClass={layout.aspect}
                  readLabel={readLabel}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
