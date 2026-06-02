"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProjectFloatCard } from "@/components/projects/ProjectFloatCard";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollParallax } from "@/components/ui/ScrollParallax";
import { siteContent, uiStrings } from "@/lib/content";
import { getSectionMeta } from "@/lib/content/helpers";

const FLOAT_LAYOUT = [
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
  {
    item: "md:ml-[14%] md:mr-auto md:mt-16 md:w-[min(100%,300px)] lg:w-[min(34%,320px)]",
    caption: "text-left",
    delay: 420,
  },
  {
    item: "md:ml-auto md:mr-[10%] md:mt-4 md:w-[min(100%,280px)] lg:w-[min(32%,300px)]",
    caption: "text-right",
    delay: 500,
  },
  {
    item: "md:ml-[4%] md:mr-auto md:mt-10 md:w-[min(100%,290px)] lg:w-[min(33%,310px)]",
    caption: "text-left md:pl-1",
    delay: 580,
  },
] as const;

const FLOAT_PARALLAX = [0.18, -0.12, 0.14, -0.1, 0.1, -0.08, 0.09] as const;

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "projects");
  const { projects } = siteContent;
  const displayProjects = projects.filter(
    (project) => project.scale === "featured" || project.scale === "student",
  );

  if (!sectionMeta) return null;

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
            {locale === "ko" ? sectionMeta.titleKr : sectionMeta.titleEn}
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
            {displayProjects.map((project, index) => {
              const layout = FLOAT_LAYOUT[index] ?? FLOAT_LAYOUT[0];
              const parallaxSpeed = FLOAT_PARALLAX[index] ?? FLOAT_PARALLAX[0];
              const variant = project.scale ?? "featured";

              return (
                <ProjectFloatCard
                  key={project.id}
                  project={project}
                  layout={layout}
                  parallaxSpeed={parallaxSpeed}
                  locale={locale}
                  variant={variant}
                  delayMs={layout.delay}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
