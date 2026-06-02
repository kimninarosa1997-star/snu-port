import { portfolio } from "@/lib/portfolio-data";

const EMPHASIS = ["아름답고", "지속", "가능한"];

export function AboutSection() {
  return (
    <section id="about" className="section-py px-6 md:px-10">
      <div className="mx-auto max-w-content">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold">
          A{" "}
          <span className="font-display italic font-normal text-muted">
            little
          </span>{" "}
          about me.
        </h2>

        <p className="mt-10 ml-auto max-w-xl text-right text-sm leading-relaxed text-muted md:text-base">
          {portfolio.aboutHighlight}
        </p>

        <blockquote className="mt-20 text-center text-[clamp(1.25rem,3.5vw,2.25rem)] font-light leading-snug text-muted md:mt-28 md:leading-relaxed">
          <span className="text-faint" aria-hidden>…</span>
          {portfolio.aboutStatement.split(" ").map((word, i, arr) => {
            const isEmphasis = EMPHASIS.some((e) => word.includes(e));
            if (isEmphasis) {
              return (
                <strong key={i} className="font-bold text-foreground">
                  {word}{" "}
                </strong>
              );
            }
            return (
              <span key={i}>
                {word}
                {i < arr.length - 1 ? " " : ""}
              </span>
            );
          })}
        </blockquote>

        <div className="mt-24 border-t border-border pt-16">
          <h3 className="text-label text-faint">
            Education
          </h3>
          <ul className="mt-8 space-y-8">
            {portfolio.education.map((edu) => (
              <li
                key={edu.degree}
                className="flex flex-col gap-2 border-b border-border pb-8 last:border-0 md:flex-row md:items-baseline md:justify-between"
              >
                <div>
                  <p className="text-lg font-semibold">{edu.degree}</p>
                  <p className="text-muted">
                    {edu.university} · {edu.major}
                  </p>
                </div>
                <p className="text-sm text-muted">{edu.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
