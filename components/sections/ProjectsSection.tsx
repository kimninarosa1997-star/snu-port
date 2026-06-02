"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Marquee } from "@/components/ui/Marquee";
import { ProjectCoverImage } from "@/components/ui/ProjectCoverImage";
import { ScrollParallax } from "@/components/ui/ScrollParallax";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteContent, uiStrings } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

const PROJECT_FLOAT_LAYOUT = [
  {
    item: "md:ml-0 md:mr-auto md:w-[min(100%,540px)] lg:w-[min(54%,580px)]",
    caption: "text-left",
    delay: 0,
  },
  {
    item: "md:ml-auto md:mr-[3%] md:mt-10 md:w-[min(100%,480px)] lg:w-[min(46%,500px)]",
    caption: "text-right md:pr-1",
    delay: 140,
  },
  {
    item: "md:ml-[7%] md:mr-auto md:mt-6 md:w-[min(100%,460px)] lg:w-[min(44%,480px)]",
    caption: "text-left md:pl-2",
    delay: 240,
  },
  {
    item: "md:ml-auto md:mr-0 md:mt-12 md:w-[min(100%,520px)] lg:w-[min(50%,540px)]",
    caption: "text-right",
    delay: 340,
  },
] as const;

const PROJECT_PARALLAX = [0.18, -0.12, 0.14, -0.1] as const;

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "projects");
  const { projects } = siteContent;

  if (!sectionMeta) return null;

  const title = pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn);
  const marqueeItems =
    locale === "ko" ? uiStrings.marquee.projects.kr : uiStrings.marquee.projects.en;
  const bgLabel = uiStrings.marquee.projects.en.join(" · ").toUpperCase();

  return (
    <section id="projects" aria-labelledby="projects-heading" className="band-dark section-py overflow-hidden">
      <div className="mx-auto max-w-content layout-gutter">
        <header>
          <Marquee
            items={marqueeItems}
            className="mb-6 text-label uppercase tracking-[var(--tracking-label)] text-muted"
            speed="slow"
          />
          <h2 id="projects-heading" className="sr-only">
            {title}
          </h2>
        </header>

        <div className="projects-float relative mt-4 pb-8 md:mt-8 md:pb-20">
          <ScrollParallax
            anchor="parent"
            speed={0.38}
            speedX={0.12}
            className="projects-float-bg pointer-events-none select-none"
          >
            <p aria-hidden="true">{bgLabel}</p>
          </ScrollParallax>

          <div className="projects-float-canvas relative z-10 flex flex-col gap-16 md:gap-0">
            {projects.map((project, index) => {
              const layout = PROJECT_FLOAT_LAYOUT[index] ?? PROJECT_FLOAT_LAYOUT[0];
              const parallaxSpeed = PROJECT_PARALLAX[index] ?? PROJECT_PARALLAX[0];
              const projectTitle = pickLocale(locale, project.titleKr, project.titleEn);
              const summary = pickLocale(locale, project.summaryKr, project.summaryEn);

              return (
                <ScrollReveal
                  key={project.id}
                  className={`projects-float-item ${layout.item}`}
                  delayMs={layout.delay}
                >
                  <article className="group">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="block focus-visible:focus-ring"
                    >
                      <ScrollParallax speed={parallaxSpeed}>
                        <div className="project-float-visual relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
                          <ProjectCoverImage
                            src={project.coverImage}
                            alt={projectTitle}
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                        </div>
                      </ScrollParallax>

                      <div className={`project-float-caption mt-5 max-w-[36rem] ${layout.caption}`}>
                        <p className="text-label text-muted">{project.period}</p>
                        <h3 className="mt-2 font-hero text-[clamp(1.25rem,2.8vw,2rem)] font-semibold uppercase leading-tight tracking-[0.02em] text-foreground">
                          {projectTitle}
                        </h3>
                        <p className="mt-1 text-caption text-neutral-400">{project.organization}</p>
                        <p className="mt-3 text-body leading-relaxed text-neutral-200">{summary}</p>
                        <p className="mt-4 text-label text-muted transition-colors group-hover:text-neutral-200">
                          {locale === "ko" ? "프로젝트 보기 →" : "View project →"}
                        </p>
                      </div>
                    </Link>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
