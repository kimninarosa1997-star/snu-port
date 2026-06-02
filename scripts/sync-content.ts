import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { SiteContent } from "../lib/content/types";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_PATH = join(ROOT, "docs/content.md");
const OUTPUT_PATH = join(ROOT, "lib/content/generated.ts");

const NAV_SECTION_IDS: Record<string, string> = {
  Home: "home",
  About: "about",
  Projects: "projects",
  Skills: "skills",
  Experience: "experience",
  Archive: "archive",
  Contact: "contact",
};

function splitSections(markdown: string): Map<string, string> {
  const sections = new Map<string, string>();
  const parts = markdown.split(/^## \d+\.\s/m).slice(1);
  const headers = [...markdown.matchAll(/^## (\d+)\.\s[^\n]*/gm)].map((m) => m[1]);

  headers.forEach((num, index) => {
    sections.set(num, parts[index] ?? "");
  });

  return sections;
}

function parseTable(text: string): string[][] {
  const rows: string[][] = [];

  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) continue;
    if (/^\|[-\s|:]+\|$/.test(trimmed.replace(/\s/g, ""))) continue;

    const cells = trimmed
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());
    if (cells.length > 0) rows.push(cells);
  }

  return rows;
}

function tableToMap(text: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const row of parseTable(text)) {
    if (row.length >= 2) map.set(row[0], row[1]);
  }
  return map;
}

function extractSubsection(body: string, heading: string): string {
  const pattern = new RegExp(
    `### ${escapeRegex(heading)}\\s*\\n+([\\s\\S]*?)(?=\\n### |\\n---\\s*$|$)`,
  );
  const match = body.match(pattern);
  if (!match) return "";
  return normalizeParagraph(match[1].trim());
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeParagraph(text: string): string {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function splitCsv(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseBulletField(text: string, prefix: string): string {
  const pattern = new RegExp(`^- ${escapeRegex(prefix)}:\\s*(.+)$`, "m");
  return text.match(pattern)?.[1]?.trim() ?? "";
}

function parseProjectBlocks(section: string): SiteContent["projects"] {
  const blocks = section.split(/^## Project /m).slice(1);
  const projects: SiteContent["projects"] = [];

  for (const block of blocks) {
    const slugMatch = block.match(/<!-- @slug:\s*(.+?)\s*-->/);
    const tableMatch = block.match(/\| Item \| Content \|[\s\S]*?(?=\n### |\n---|$)/);
    if (!tableMatch) continue;

    const map = tableToMap(tableMatch[0]);
    const psrBlock = block.match(/### Problem → Solution → Result\s*\n([\s\S]*?)(?=\n---|$)/)?.[1] ?? "";
    const id = map.get("ID") ?? "";

    projects.push({
      id: id as SiteContent["projects"][0]["id"],
      slug: slugMatch?.[1] ?? id.toLowerCase(),
      titleKr: map.get("Project KR") ?? "",
      titleEn: map.get("Project EN") ?? "",
      period: map.get("Period") ?? "",
      organization: map.get("Organization") ?? map.get("Institution") ?? "",
      role: map.get("Role") ?? "",
      keywords: splitCsv(map.get("Keywords") ?? ""),
      tools: splitCsv(map.get("Tools") ?? ""),
      summaryKr: map.get("Summary KR") ?? "",
      summaryEn: map.get("Summary EN") ?? "",
      result: map.get("Result") ?? "",
      detail: {
        problemKr: parseBulletField(psrBlock, "Problem KR"),
        problemEn: parseBulletField(psrBlock, "Problem EN"),
        solutionKr: parseBulletField(psrBlock, "Solution KR"),
        solutionEn: parseBulletField(psrBlock, "Solution EN"),
        resultKr: parseBulletField(psrBlock, "Result KR"),
        resultEn: parseBulletField(psrBlock, "Result EN"),
      },
    });
  }

  return projects;
}

function parseSkillGroups(section: string): SiteContent["skillGroups"] {
  const parts = section.split(/^### /m).slice(1);
  const result: SiteContent["skillGroups"] = [];

  for (const part of parts) {
    const titleEnd = part.indexOf("\n");
    const title = part.slice(0, titleEnd).trim();
    const rows = parseTable(part.slice(titleEnd)).slice(1);

    result.push({
      id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title,
      skills: rows.map((row) => ({
        id: row[0] as SiteContent["skillGroups"][0]["skills"][0]["id"],
        name: row[1],
        descriptionKr: row[2],
        descriptionEn: row[3],
      })),
    });
  }

  return result;
}

function parseInventoryEmail(section2: string): string {
  for (const row of parseTable(section2)) {
    if (row[0] === "C-REQ-002") {
      const match = row[3].match(/Email:\s*([^\s/]+)/);
      return match?.[1] ?? "";
    }
  }
  return "";
}

function parseContentInventoryOptional(section2: string): string[] {
  const optionalPart = section2.split("### Optional / 선택")[1] ?? "";
  for (const row of parseTable(optionalPart)) {
    if (row[0] === "C-OPT-006") {
      return row[3].split(",").map((s) => s.trim()).filter(Boolean);
    }
  }
  return [];
}

function parseStrengths(section: string): SiteContent["strengths"] {
  return parseTable(section)
    .slice(1)
    .map((row) => ({
      id: row[0] as SiteContent["strengths"][0]["id"],
      title: row[1],
      descriptionKr: row[2],
      descriptionEn: row[3],
    }));
}

function parseEducation(section: string): SiteContent["education"] {
  return parseTable(section)
    .slice(1)
    .map((row) => ({
      id: row[0] as SiteContent["education"][0]["id"],
      institution: row[1],
      major: row[2],
      degree: row[3],
      period: row[4],
      note: row[5] ?? "",
    }));
}

function parseExperience(section: string): SiteContent["experience"] {
  return parseTable(section)
    .slice(1)
    .map((row) => ({
      id: row[0] as SiteContent["experience"][0]["id"],
      organization: row[1],
      role: row[2],
      period: row[3],
      problem: row[4],
      solution: row[5],
      result: row[6],
    }));
}

function parseAwards(section: string): SiteContent["awards"] {
  return parseTable(section)
    .slice(1)
    .map((row) => ({
      id: row[0] as SiteContent["awards"][0]["id"],
      year: row[1],
      titleKr: row[2],
      titleEn: row[3],
      organization: row[4],
      description: row[5],
    }));
}

function parseCourses(section: string): SiteContent["courses"] {
  return parseTable(section)
    .slice(1)
    .map((row) => ({
      id: row[0] as SiteContent["courses"][0]["id"],
      year: row[1],
      titleKr: row[2],
      titleEn: row[3],
      institution: row[4],
      description: row[5],
    }));
}

function parseArchive(section: string): SiteContent["archive"] {
  const tableStart = section.indexOf("| ID | Type |");
  if (tableStart === -1) return [];
  return parseTable(section.slice(tableStart))
    .slice(1)
    .map((row) => ({
      id: row[0] as SiteContent["archive"][0]["id"],
      type: row[1],
      title: row[2],
      period: row[3],
      descriptionKr: row[4],
      descriptionEn: row[5],
    }));
}

function parseInterests(section: string): SiteContent["interests"] {
  return parseTable(section)
    .slice(1)
    .map((row) => ({
      id: row[0] as SiteContent["interests"][0]["id"],
      titleKr: row[1],
      titleEn: row[2],
      descriptionKr: row[3],
      descriptionEn: row[4],
    }));
}

function parseSiteContent(markdown: string): SiteContent {
  const sections = splitSections(markdown);
  const metaMap = tableToMap(sections.get("1") ?? "");
  const section2 = sections.get("2") ?? "";
  const heroSection = sections.get("4") ?? "";
  const aboutSection = sections.get("5") ?? "";
  const brandMap = tableToMap(sections.get("6") ?? "");
  const contactSection = sections.get("16") ?? "";
  const contactTablePart = contactSection.includes("| ID | Item |")
    ? contactSection.slice(contactSection.indexOf("| ID | Item |"))
    : "";
  const interests = parseContentInventoryOptional(section2);

  const contact: SiteContent["contact"] = {
    copyKr: extractSubsection(contactSection, "Contact Copy KR"),
    copyEn: extractSubsection(contactSection, "Contact Copy EN"),
    name: "",
    email: parseInventoryEmail(section2),
    fields: parseTable(contactTablePart)
      .slice(1)
      .filter((row) => row[0]?.startsWith("C-CON"))
      .map((row) => ({
        id: row[0] as SiteContent["contact"]["fields"][0]["id"],
        item: row[1],
        content: row[2],
        isPrivate: row[2].toLowerCase() === "private",
      })),
  };

  contact.name =
    contact.fields.find((f) => f.id === "C-CON-001")?.content ?? metaMap.get("Name") ?? "";

  const navRows = parseTable(sections.get("17") ?? "").filter((row) => /^\d+$/.test(row[0]));
  const sectionRows = parseTable(sections.get("18") ?? "").filter((row) => row[0] && row[0] !== "Section");
  const footerSection = sections.get("19") ?? "";
  const footerMatch = footerSection.match(/### Footer\s*\n+(.+)/);

  return {
    meta: {
      name: metaMap.get("Name") ?? "",
      nameKr: metaMap.get("이름") ?? "",
      position: metaMap.get("Position") ?? "",
      positionKr: metaMap.get("직무/포지션") ?? "",
      sitePurpose: metaMap.get("Site Purpose") ?? "",
      sitePurposeKr: metaMap.get("사이트 사용 목적") ?? "",
      keywords: splitCsv(metaMap.get("Keywords") ?? ""),
      keywordsKr: splitCsv(metaMap.get("핵심 키워드") ?? ""),
      targetAudience: metaMap.get("Target Audience") ?? "",
      targetAudienceKr: metaMap.get("타깃 독자") ?? "",
      tone: metaMap.get("Tone & Manner") ?? "",
      toneKr: metaMap.get("톤앤매너") ?? "",
      oneLineKr: metaMap.get("One-line Identity") ?? "",
      oneLineEn: metaMap.get("One-line Identity EN") ?? "",
    },
    hero: {
      oneLineKr: extractSubsection(heroSection, "One-line Introduction / 한 줄 소개"),
      oneLineEn: extractSubsection(heroSection, "One-line Introduction EN"),
      supportingKr: extractSubsection(heroSection, "Supporting Copy / 보조 문구"),
      supportingEn: extractSubsection(heroSection, "Supporting Copy EN"),
      ctaPrimary: { label: "Projects", href: "#projects" },
      ctaSecondary: { label: "Contact", href: "#contact" },
      interestKeywords: interests,
      interestKeywordsKr: interests,
    },
    about: {
      bodyKr: extractSubsection(aboutSection, "About KR"),
      bodyEn: extractSubsection(aboutSection, "About EN"),
      minimalKr: extractSubsection(aboutSection, "Minimal Version KR"),
      minimalEn: extractSubsection(aboutSection, "Minimal Version EN"),
    },
    brand: {
      coreMessageKr: brandMap.get("Core Message KR") ?? "",
      coreMessageEn: brandMap.get("Core Message EN") ?? "",
      brandKeywords: splitCsv(brandMap.get("Brand Keywords") ?? ""),
      siteMood: brandMap.get("Site Mood") ?? "",
      visitorImpression: brandMap.get("Visitor Impression") ?? "",
    },
    strengths: parseStrengths(sections.get("7") ?? ""),
    education: parseEducation(sections.get("8") ?? ""),
    projects: parseProjectBlocks(sections.get("9") ?? ""),
    experience: parseExperience(sections.get("10") ?? ""),
    skillGroups: parseSkillGroups(sections.get("11") ?? ""),
    awards: parseAwards(sections.get("12") ?? ""),
    courses: parseCourses(sections.get("13") ?? ""),
    archiveIntro: {
      kr: extractSubsection(sections.get("14") ?? "", "Archive Introduction KR"),
      en: extractSubsection(sections.get("14") ?? "", "Archive Introduction EN"),
    },
    archive: parseArchive(sections.get("14") ?? ""),
    interests: parseInterests(sections.get("15") ?? ""),
    contact,
    navigation: navRows.map((row) => {
      const label = row[1];
      const sectionId = NAV_SECTION_IDS[label] ?? label.toLowerCase();
      return {
        order: Number(row[0]),
        label,
        sectionId,
        href: `#${sectionId}`,
      };
    }),
    sections: sectionRows.map((row) => ({
      sectionId: NAV_SECTION_IDS[row[0]] ?? row[0].toLowerCase(),
      titleKr: row[1],
      titleEn: row[2],
      descriptionKr: row[3],
      descriptionEn: row[4],
    })),
    footer: footerMatch?.[1]?.trim() ?? "",
  };
}

function serialize(value: unknown, indent = 0): string {
  const pad = "  ".repeat(indent);
  const padInner = "  ".repeat(indent + 1);

  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return `[\n${value.map((item) => `${padInner}${serialize(item, indent + 1)}`).join(",\n")},\n${pad}]`;
  }

  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return "{}";
    return `{\n${entries
      .map(([key, val]) => `${padInner}${key}: ${serialize(val, indent + 1)}`)
      .join(",\n")},\n${pad}}`;
  }

  return "undefined";
}

function main(): void {
  const markdown = readFileSync(CONTENT_PATH, "utf8");
  const siteContent = parseSiteContent(markdown);

  if (siteContent.projects.length !== 4) {
    throw new Error(`Expected 4 projects, got ${siteContent.projects.length}`);
  }
  if (siteContent.navigation.length !== 7) {
    throw new Error(`Expected 7 nav items, got ${siteContent.navigation.length}`);
  }
  if (!siteContent.contact.email) {
    throw new Error("Contact email missing (C-REQ-002)");
  }

  const output = `// Auto-generated by scripts/sync-content.ts — do not edit manually.
// Source: docs/content.md

import type { SiteContent } from "./types";

export const siteContent = ${serialize(siteContent)} as const satisfies SiteContent;
`;

  writeFileSync(OUTPUT_PATH, output, "utf8");
  console.log(`✓ content:sync → lib/content/generated.ts (${siteContent.projects.length} projects)`);
}

main();
