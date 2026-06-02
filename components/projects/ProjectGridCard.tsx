"use client";

import Link from "next/link";
import { ProjectCoverImage } from "@/components/ui/ProjectCoverImage";
import type { Project } from "@/lib/content/types";
import { pickLocale } from "@/lib/content/helpers";

type ProjectGridCardProps = {
  project: Project;
  locale: "ko" | "en";
  aspectClass: string;
  readLabel: string;
};

export function ProjectGridCard({ project, locale, aspectClass, readLabel }: ProjectGridCardProps) {
  const projectTitle = pickLocale(locale, project.titleKr, project.titleEn);

  return (
    <article className="studio-project-card group border-t border-border">
      <Link href={`/projects/${project.slug}`} className="block focus-visible:focus-ring">
        <div className={`relative overflow-hidden bg-neutral-900 ${aspectClass}`}>
          <ProjectCoverImage src={project.coverImage} alt={projectTitle} />
        </div>
        <div className="py-6 md:py-8">
          <h3 className="text-title font-bold leading-snug text-foreground transition-opacity group-hover:opacity-70">
            {projectTitle}
          </h3>
          <p className="mt-2 text-caption text-muted">
            {project.organization} · {project.period}
          </p>
          <p className="mt-4 text-label font-medium uppercase tracking-[var(--tracking-label)] text-muted transition-colors group-hover:text-foreground">
            {readLabel}
          </p>
        </div>
      </Link>
    </article>
  );
}
