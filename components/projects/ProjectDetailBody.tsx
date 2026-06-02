import type { MouseEvent } from "react";
import { localized, uiStrings } from "@/lib/content";
import type { Locale } from "@/lib/content/helpers";
import { pickLocale } from "@/lib/content/helpers";
import type { Project } from "@/lib/content/types";

type ProjectDetailBodyProps = {
  project: Project;
  locale: Locale;
  showContactCta?: boolean;
  contactHref?: string;
  onContactClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function ProjectDetailBody({
  project,
  locale,
  showContactCta = true,
  contactHref = "#contact",
  onContactClick,
}: ProjectDetailBodyProps) {
  const { detail } = project;

  return (
    <div className="border-t border-border-strong pt-8">
      <dl className="space-y-6 text-[length:var(--text-body)] leading-relaxed text-neutral-100">
        {(
          [
            [localized(locale, uiStrings.projects.problem), pickLocale(locale, detail.problemKr, detail.problemEn)],
            [localized(locale, uiStrings.projects.solution), pickLocale(locale, detail.solutionKr, detail.solutionEn)],
            [localized(locale, uiStrings.projects.result), pickLocale(locale, detail.resultKr, detail.resultEn)],
          ] as const
        ).map(([label, text]) =>
          text ? (
            <div key={label}>
              <dt className="text-label text-muted">{label}</dt>
              <dd className="mt-2">{text}</dd>
            </div>
          ) : null,
        )}
      </dl>

      {project.role ? (
        <p className="mt-6 text-caption text-neutral-300">
          {localized(locale, uiStrings.projects.role)}: {project.role}
        </p>
      ) : null}

      {project.tools.length > 0 ? (
        <p className="mt-4 text-caption text-neutral-300">
          {project.tools.join(" · ")}
        </p>
      ) : null}

      {project.result ? (
        <p className="mt-4 text-caption text-muted">{project.result}</p>
      ) : null}

      {showContactCta ? (
        <a
          href={contactHref}
          onClick={onContactClick}
          className="mt-8 inline-flex min-h-11 items-center justify-center border border-border px-6 py-3 text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring"
        >
          {localized(locale, uiStrings.projects.contactLink)}
        </a>
      ) : null}
    </div>
  );
}
