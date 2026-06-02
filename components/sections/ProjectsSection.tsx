"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProjectDetailBody } from "@/components/projects/ProjectDetailBody";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";
import { scrollToSection } from "@/lib/scroll";

export function ProjectsSection() {
  const { locale } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionMeta = getSectionMeta(siteContent, "projects");
  const { projects } = siteContent;

  if (!sectionMeta) return null;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-py bg-neutral-900">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          meta={sectionMeta}
          locale={locale}
          headingId="projects-heading"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const title = pickLocale(locale, project.titleKr, project.titleEn);
            const summary = pickLocale(locale, project.summaryKr, project.summaryEn);

            return (
              <article
                key={project.id}
                className={`border-t border-border transition-colors hover:bg-canvas ${
                  isExpanded ? "sm:col-span-2 lg:col-span-4" : ""
                }`}
              >
                <button
                  type="button"
                  className="w-full pt-6 text-left focus-visible:focus-ring"
                  aria-expanded={isExpanded}
                  aria-controls={`project-detail-${project.id}`}
                  onClick={() =>
                    setExpandedId(isExpanded ? null : project.id)
                  }
                >
                  <p className="text-caption text-neutral-300">{project.period}</p>
                  <h3 className="mt-2 text-[length:var(--text-title)] font-medium text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-caption text-neutral-300">
                    {project.organization}
                  </p>
                  <p className="mt-4 text-[length:var(--text-body)] leading-relaxed text-neutral-100 line-clamp-3">
                    {summary}
                  </p>
                  <p className="mt-4 text-label text-muted">
                    {isExpanded
                      ? locale === "ko"
                        ? "접기"
                        : "Close"
                      : locale === "ko"
                        ? "상세 보기"
                        : "View detail"}
                  </p>
                </button>
                {isExpanded ? (
                  <div id={`project-detail-${project.id}`} className="px-0 pb-8">
                    <ProjectDetailBody
                      project={project}
                      locale={locale}
                      onContactClick={(event) => {
                        event.preventDefault();
                        scrollToSection("#contact");
                      }}
                    />
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex min-h-11 items-center text-label uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-foreground focus-visible:focus-ring"
                    >
                      {locale === "ko" ? "전용 페이지 →" : "Open project page →"}
                    </Link>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
