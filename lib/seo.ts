import type { Metadata } from "next";
import { siteContent } from "@/lib/content";

const DEFAULT_SITE_URL = "https://snu-port.vercel.app";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

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
    ],
  };
}
