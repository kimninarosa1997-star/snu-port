"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ProjectFloatCard } from "@/components/projects/ProjectFloatCard";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollParallax } from "@/components/ui/ScrollParallax";
import { siteContent, uiStrings } from "@/lib/content";
import { getSectionMeta } from "@/lib/content/helpers";

type FloatCardLayout = {
  item: string;
  caption: string;
  delay: number;
  aspect?: string;
};

const FEATURED_LAYOUT: FloatCardLayout[] = [
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
];

/** 대표 카드 반대편 빈 공간 — 높이·너비·오프셋을 건마다 다르게 */
const STUDENT_SIDE_LAYOUT: FloatCardLayout[] = [
  {
    item: "ml-auto mr-[3%] w-[min(88%,300px)] md:absolute md:right-[1%] md:top-[clamp(2.5rem,12vh,8rem)] md:ml-0 md:mr-0 md:w-[min(36%,290px)] lg:w-[min(34%,310px)] md:z-20",
    caption: "text-right",
    delay: 220,
    aspect: "aspect-[4/5]",
  },
  {
    item: "ml-[5%] w-[min(84%,280px)] md:absolute md:left-[3%] md:top-[clamp(1rem,6vh,4.5rem)] md:ml-0 md:w-[min(32%,265px)] lg:w-[min(30%,285px)] md:z-20",
    caption: "text-left",
    delay: 320,
    aspect: "aspect-[3/4]",
  },
  {
    item: "ml-auto mr-[8%] w-[min(82%,275px)] md:absolute md:right-[7%] md:top-[clamp(4rem,20vh,11rem)] md:ml-0 md:mr-0 md:w-[min(33%,280px)] lg:w-[min(31%,300px)] md:z-20",
    caption: "text-right md:pr-2",
    delay: 420,
    aspect: "aspect-[5/6]",
  },
];

const FEATURED_PARALLAX = [0.18, -0.12, 0.14, -0.1] as const;
const STUDENT_PARALLAX = [0.14, -0.1, 0.12] as const;

const ROW_MIN_HEIGHT = [
  "md:min-h-[clamp(480px,68vh,720px)]",
  "md:min-h-[clamp(540px,74vh,780px)]",
  "md:min-h-[clamp(500px,70vh,740px)]",
  "md:min-h-[clamp(460px,64vh,680px)]",
] as const;

export function ProjectsSection() {
  const { locale } = useLanguage();
  const sectionMeta = getSectionMeta(siteContent, "projects");
  const { projects } = siteContent;
  const featuredProjects = projects.filter((project) => (project.scale ?? "featured") === "featured");
  const studentProjects = projects.filter((project) => project.scale === "student");

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
            {featuredProjects.map((project, index) => {
              const layout = FEATURED_LAYOUT[index] ?? FEATURED_LAYOUT[0];
              const student = studentProjects[index];
              const studentLayout = STUDENT_SIDE_LAYOUT[index];
              const rowHeight = ROW_MIN_HEIGHT[index] ?? ROW_MIN_HEIGHT[0];

              return (
                <div
                  key={project.id}
                  className={`projects-float-row relative flex flex-col gap-10 md:block ${rowHeight}`}
                >
                  <ProjectFloatCard
                    project={project}
                    layout={layout}
                    parallaxSpeed={FEATURED_PARALLAX[index] ?? FEATURED_PARALLAX[0]}
                    locale={locale}
                    variant="featured"
                    delayMs={layout.delay}
                  />

                  {student && studentLayout ? (
                    <ProjectFloatCard
                      project={student}
                      layout={studentLayout}
                      parallaxSpeed={STUDENT_PARALLAX[index] ?? STUDENT_PARALLAX[0]}
                      locale={locale}
                      variant="student"
                      delayMs={studentLayout.delay}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
