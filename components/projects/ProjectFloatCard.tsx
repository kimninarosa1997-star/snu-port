"use client";

import Link from "next/link";
import { ProjectCoverImage } from "@/components/ui/ProjectCoverImage";
import { ScrollParallax } from "@/components/ui/ScrollParallax";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project, ProjectScale } from "@/lib/content/types";
import { pickLocale } from "@/lib/content/helpers";

type ProjectFloatCardProps = {
  project: Project;
  layout: { item: string; caption: string };
  parallaxSpeed: number;
  locale: "ko" | "en";
  variant: ProjectScale;
  delayMs: number;
};

export function ProjectFloatCard({
  project,
  layout,
  parallaxSpeed,
  locale,
  variant,
  delayMs,
}: ProjectFloatCardProps) {
  const projectTitle = pickLocale(locale, project.titleKr, project.titleEn);
  const summary = pickLocale(locale, project.summaryKr, project.summaryEn);
  const isStudent = variant === "student";

  return (
    <ScrollReveal className={`projects-float-item ${layout.item}`} delayMs={delayMs}>
      <article className={`group ${isStudent ? "projects-float-item--student" : ""}`}>
        <Link href={`/projects/${project.slug}`} className="block focus-visible:focus-ring">
          <ScrollParallax speed={parallaxSpeed}>
            <div
              className={`project-float-visual relative overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_24px_64px_rgba(0,0,0,0.45)] ${
                isStudent ? "project-float-visual--student aspect-[5/4]" : "aspect-[4/3]"
              }`}
            >
              <ProjectCoverImage src={project.coverImage} alt={projectTitle} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
            </div>
          </ScrollParallax>

          <div className={`project-float-caption mt-4 max-w-[36rem] md:mt-5 ${layout.caption}`}>
            <p className="text-label text-muted">{project.period}</p>
            <h3
              className={`mt-2 font-hero font-semibold uppercase leading-tight tracking-[0.02em] text-foreground ${
                isStudent
                  ? "text-[clamp(1rem,2vw,1.35rem)]"
                  : "text-[clamp(1.25rem,2.8vw,2rem)]"
              }`}
            >
              {projectTitle}
            </h3>
            <p className="mt-1 text-caption text-neutral-400">{project.organization}</p>
            <p
              className={`mt-2 text-body leading-relaxed text-neutral-200 ${
                isStudent ? "line-clamp-2 text-[0.9375rem]" : "mt-3"
              }`}
            >
              {summary}
            </p>
            <p className="mt-3 text-label text-muted transition-colors group-hover:text-neutral-200 md:mt-4">
              {locale === "ko" ? "프로젝트 보기 →" : "View project →"}
            </p>
          </div>
        </Link>
      </article>
    </ScrollReveal>
  );
}
