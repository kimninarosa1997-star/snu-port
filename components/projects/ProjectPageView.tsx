"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProjectDetailBody } from "@/components/projects/ProjectDetailBody";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { localized, localizedFn, siteContent, uiStrings } from "@/lib/content";
import { pickLocale } from "@/lib/content/helpers";
import type { Project } from "@/lib/content/types";

type ProjectPageViewProps = {
  project: Project;
};

export function ProjectPageView({ project }: ProjectPageViewProps) {
  const { locale } = useLanguage();
  const title = pickLocale(locale, project.titleKr, project.titleEn);
  const summary = pickLocale(locale, project.summaryKr, project.summaryEn);

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="pt-[var(--header-height)]">
        <article className="section-py">
          <div className="mx-auto max-w-content px-6 md:px-10">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center text-label uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-foreground focus-visible:focus-ring"
            >
              ← {localized(locale, uiStrings.projects.allProjects)}
            </Link>

            <header className="mt-10 max-w-[42rem]">
              <p className="text-caption text-neutral-300">{project.period}</p>
              <h1 className="mt-4 text-[length:var(--text-headline)] font-medium leading-[var(--text-headline-lh)] tracking-tight text-foreground">
                {title}
              </h1>
              <p className="mt-2 text-caption text-neutral-300">
                {project.organization}
              </p>
              {project.keywords.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={localized(locale, uiStrings.projects.keywords)}>
                  {project.keywords.map((keyword) => (
                    <li
                      key={keyword}
                      className="border border-border px-3 py-1.5 text-label uppercase tracking-[var(--tracking-label)] text-neutral-300"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              ) : null}
            </header>

            <p className="mt-10 max-w-[42rem] text-[length:var(--text-body-l)] leading-relaxed text-neutral-100">
              {summary}
            </p>

            <div className="mt-12 max-w-[42rem]">
              <ProjectDetailBody project={project} locale={locale} showContactCta={false} />
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteContent.contact.email}`}
                aria-label={localizedFn(locale, uiStrings.contact.emailAriaLabel, siteContent.contact.name)}
                className="inline-flex min-h-11 items-center justify-center bg-neutral-050 px-7 py-3 text-label uppercase tracking-[var(--tracking-label)] text-neutral-950 transition-colors hover:bg-neutral-100 focus-visible:focus-ring"
              >
                {localized(locale, uiStrings.projects.getInTouch)}
              </a>
              <Link
                href="/#projects"
                className="inline-flex min-h-11 items-center justify-center border border-border px-7 py-3 text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring"
              >
                {localized(locale, uiStrings.projects.moreProjects)}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
