import Image from "next/image";
import { portfolio } from "@/lib/portfolio-data";

export function WorkSection() {
  return (
    <section id="work" className="section-py border-t border-border px-6 md:px-10">
      <div className="mx-auto max-w-content">
        <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-black uppercase tracking-tight">
          Recent Work
          <span className="block text-faint">&amp; Experience</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-8">
          {portfolio.work.map((item, index) => {
            const spans =
              index === 0
                ? "md:col-span-7 md:row-span-2"
                : index === 1
                  ? "md:col-span-5"
                  : "md:col-span-5 md:col-start-8";

            return (
              <article
                key={item.company}
                className={`group ${spans}`}
              >
                <div
                  className={`relative overflow-hidden bg-surface ${
                    index === 0 ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[480px]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.company}
                    fill
                    className="object-cover grayscale transition-all duration-[var(--duration-slow)] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/0" />
                </div>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.company}</h3>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                  <p className="text-label text-faint">{item.period}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>
                <p className="mt-2 text-label text-faint">
                  {item.tags.join(" · ")}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
