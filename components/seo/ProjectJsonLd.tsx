import type { Project } from "@/lib/content/types";
import { buildProjectJsonLd } from "@/lib/seo";

type ProjectJsonLdProps = {
  project: Project;
};

export function ProjectJsonLd({ project }: ProjectJsonLdProps) {
  const data = buildProjectJsonLd(project);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
