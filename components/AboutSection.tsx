import { AboutMarquee } from "@/components/AboutMarquee";
import { portfolio } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold">
          A{" "}
          <span className="font-serif italic font-normal text-neutral-300">
            little
          </span>{" "}
          about me.
        </h2>

        <p className="mt-10 ml-auto max-w-xl text-right text-sm leading-relaxed text-neutral-400 md:text-base">
          {portfolio.aboutHighlight}
        </p>

        <AboutMarquee />

        <div className="mt-24 border-t border-neutral-800 pt-16">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-500">
            Education
          </h3>
          <ul className="mt-8 space-y-8">
            {portfolio.education.map((edu) => (
              <li
                key={edu.degree}
                className="flex flex-col gap-2 border-b border-neutral-900 pb-8 last:border-0 md:flex-row md:items-baseline md:justify-between"
              >
                <div>
                  <p className="text-lg font-semibold">{edu.degree}</p>
                  <p className="text-neutral-400">
                    {edu.university} · {edu.major}
                  </p>
                </div>
                <p className="text-sm text-neutral-600">{edu.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
