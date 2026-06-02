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

        <blockquote className="mt-20 text-center text-[clamp(1.25rem,3.5vw,2.25rem)] font-light leading-snug text-neutral-300 md:mt-28 md:leading-relaxed">
          <span className="text-neutral-600">…</span>
          {portfolio.aboutStatement.split(" ").map((word, i, arr) => {
            const emphasis = ["아름답고", "지속", "가능한"];
            const isEmphasis = emphasis.some((e) => word.includes(e));
            if (isEmphasis) {
              return (
                <strong key={i} className="font-bold text-white">
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

        <div className="mt-12 flex flex-wrap gap-6">
          {portfolio.languages.map((lang) => (
            <div key={lang.name} className="text-sm">
              <span className="text-neutral-400">{lang.name}</span>
              <span className="ml-2 text-neutral-600">
                {"★".repeat(lang.level)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
