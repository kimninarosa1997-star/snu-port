import { portfolio } from "@/lib/portfolio-data";

function StarRating({ level }: { level: number }) {
  return (
    <span className="text-neutral-500" aria-label={`${level} out of 5`}>
      {"★".repeat(level)}
      <span className="text-neutral-800">{"★".repeat(5 - level)}</span>
    </span>
  );
}

export function SkillsSection() {
  return (
    <section className="border-t border-neutral-900 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight">
          My Skills &{" "}
          <span className="font-serif italic font-normal text-neutral-300">
            things I&apos;m pretty great at
          </span>
        </h2>

        <div className="mt-16 divide-y divide-neutral-800">
          {portfolio.skills.map((skill, index) => (
            <div
              key={skill.title}
              className="grid gap-6 py-10 md:grid-cols-2 md:gap-16 md:py-12"
            >
              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-neutral-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-[clamp(1.35rem,3vw,2.125rem)] font-normal italic leading-tight tracking-wide text-white">
                  {skill.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
                  {skill.description}
                </p>
              </div>
              <ul className="flex flex-col gap-2 text-sm text-neutral-300 md:text-base md:pt-8">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-neutral-900 pb-2 font-light tracking-wide last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skillLevels.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between border border-neutral-800 px-4 py-3"
            >
              <span className="text-xs font-light uppercase tracking-wider text-neutral-400">
                {skill.name}
              </span>
              <StarRating level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
