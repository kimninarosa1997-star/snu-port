import { siteContent } from "@/lib/content";
import type { Project } from "@/lib/content/types";

export function getAllProjects(): Project[] {
  return siteContent.projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return siteContent.projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return siteContent.projects.map((project) => project.slug);
}
