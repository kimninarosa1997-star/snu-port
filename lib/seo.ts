import type { Metadata } from "next";
import { siteContent } from "@/lib/content";
import type { Project } from "@/lib/content/types";

const DEFAULT_SITE_URL = "https://snu-portfoilo-last.vercel.app";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(/\/$/, "");
  if (productionUrl) {
    return productionUrl.startsWith("http")
      ? productionUrl
      : `https://${productionUrl}`;
  }

  if (process.env.VERCEL_ENV === "production") {
    return DEFAULT_SITE_URL;
  }

  const vercel = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercel) return `https://${vercel}`;

  return DEFAULT_SITE_URL;
}

export function truncateDescription(text: string, maxLength = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trim()}…`;
}

export function buildSiteMetadata(): Metadata {
  const { meta, hero, contact } = siteContent;
  const siteUrl = getSiteUrl();
  const title = `${meta.name} | ${meta.position}`;
  const description = truncateDescription(hero.supportingEn);
  const ogTitle = `${meta.name} | ${meta.oneLineEn}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: [...meta.keywords, ...meta.keywordsKr],
    authors: [{ name: meta.name }],
    creator: meta.name,
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      locale: "ko_KR",
      alternateLocale: ["en_US"],
      url: siteUrl,
      siteName: meta.name,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    alternates: {
      canonical: siteUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "contact:email": contact.email,
    },
  };
}

function buildCreativeWorkNodes(siteUrl: string): Record<string, unknown>[] {
  return siteContent.projects.map((project) => ({
    "@type": "CreativeWork",
    "@id": `${siteUrl}/projects/${project.slug}#project`,
    name: project.titleEn,
    alternateName: project.titleKr,
    description: truncateDescription(project.summaryEn),
    url: `${siteUrl}/projects/${project.slug}`,
    keywords: project.keywords.join(", "),
    author: { "@id": `${siteUrl}/#person` },
  }));
}

export function buildJsonLd(): Record<string, unknown> {
  const { meta, hero, contact } = siteContent;
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: meta.name,
        alternateName: meta.nameKr,
        jobTitle: meta.position,
        description: truncateDescription(hero.supportingEn),
        email: contact.email,
        url: siteUrl,
        knowsAbout: meta.keywords,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: `${meta.name} Portfolio`,
        alternateName: meta.oneLineEn,
        url: siteUrl,
        description: truncateDescription(hero.supportingEn),
        inLanguage: ["ko", "en"],
        author: { "@id": `${siteUrl}/#person` },
      },
      ...buildCreativeWorkNodes(siteUrl),
    ],
  };
}

export function buildProjectMetadata(project: Project): Metadata {
  const siteUrl = getSiteUrl();
  const { meta } = siteContent;
  const title = `${project.titleEn} | ${meta.name}`;
  const description = truncateDescription(project.summaryEn);
  const pageUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title,
    description,
    keywords: [...project.keywords, project.titleKr, project.titleEn],
    openGraph: {
      title,
      description,
      type: "article",
      url: pageUrl,
      locale: "ko_KR",
      alternateLocale: ["en_US"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export function buildProjectJsonLd(project: Project): Record<string, unknown> {
  const siteUrl = getSiteUrl();
  const { meta } = siteContent;
  const pageUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#project`,
        name: project.titleEn,
        alternateName: project.titleKr,
        description: truncateDescription(project.summaryEn),
        url: pageUrl,
        keywords: project.keywords.join(", "),
        author: { "@id": `${siteUrl}/#person` },
        temporalCoverage: project.period,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: meta.name,
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteUrl}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.titleEn,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
