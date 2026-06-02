"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";
import { scrollToSection } from "@/lib/scroll";
import type { Project } from "@/lib/content/types";

function ProjectDetail({ project, locale }: { project: Project; locale: "ko" | "en" }) {
  const { detail } = project;

  return (
    <div className="border-t border-border-strong pt-8">
      <dl className="space-y-6 text-[length:var(--text-body)] leading-relaxed text-neutral-100">
        {(
          [
            ["Problem", pickLocale(locale, detail.problemKr, detail.problemEn)],
            ["Solution", pickLocale(locale, detail.solutionKr, detail.solutionEn)],
            ["Result", pickLocale(locale, detail.resultKr, detail.resultEn)],
          ] as const
        ).map(([label, text]) =>
          text ? (
            <div key={label}>
              <dt className="text-label text-muted">{label}</dt>
              <dd className="mt-2">{text}</dd>
            </div>
          ) : null,
        )}
      </dl>
      {project.tools.length > 0 ? (
        <p className="mt-6 text-caption text-neutral-300">
          {project.tools.join(" · ")}
        </p>
      ) : null}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#contact");
        }}
        className="mt-8 inline-flex items-center justify-center border border-border px-6 py-3 text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring"
      >
        Contact
      </a>
    </div>
  );
}

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
                  <div id={`project-detail-${project.id}`} className="pb-8">
                    <ProjectDetail project={project} locale={locale} />
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
