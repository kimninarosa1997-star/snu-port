/** Content ID prefix — e.g. C-PROJ-001 */
export type ContentId = `C-${string}`;

export interface LocalizedText {
  kr: string;
  en: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface SiteMeta {
  name: string;
  nameKr: string;
  position: string;
  positionKr: string;
  sitePurpose: string;
  sitePurposeKr: string;
  keywords: string[];
  keywordsKr: string[];
  targetAudience: string;
  targetAudienceKr: string;
  tone: string;
  toneKr: string;
  oneLineKr: string;
  oneLineEn: string;
}

export interface HeroContent {
  oneLineKr: string;
  oneLineEn: string;
  supportingKr: string;
  supportingEn: string;
  ctaPrimary: CtaLink;
  ctaSecondary: CtaLink;
  interestKeywords: string[];
  interestKeywordsKr: string[];
}

export interface AboutContent {
  bodyKr: string;
  bodyEn: string;
  minimalKr: string;
  minimalEn: string;
}

export interface BrandContent {
  coreMessageKr: string;
  coreMessageEn: string;
  brandKeywords: string[];
  siteMood: string;
  visitorImpression: string;
}

export interface Strength {
  id: ContentId;
  title: string;
  descriptionKr: string;
  descriptionEn: string;
}

export interface Education {
  id: ContentId;
  institution: string;
  major: string;
  degree: string;
  period: string;
  note: string;
}

export interface ProjectDetail {
  problemKr: string;
  problemEn: string;
  solutionKr: string;
  solutionEn: string;
  resultKr: string;
  resultEn: string;
}

export interface Project {
  id: ContentId;
  slug: string;
  titleKr: string;
  titleEn: string;
  period: string;
  organization: string;
  role: string;
  keywords: string[];
  tools: string[];
  summaryKr: string;
  summaryEn: string;
  result: string;
  detail: ProjectDetail;
}

export interface Experience {
  id: ContentId;
  organization: string;
  role: string;
  period: string;
  problem: string;
  solution: string;
  result: string;
}

export interface Skill {
  id: ContentId;
  name: string;
  descriptionKr: string;
  descriptionEn: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Award {
  id: ContentId;
  year: string;
  titleKr: string;
  titleEn: string;
  organization: string;
  description: string;
}

export interface Course {
  id: ContentId;
  year: string;
  titleKr: string;
  titleEn: string;
  institution: string;
  description: string;
}

export interface ArchiveItem {
  id: ContentId;
  type: string;
  title: string;
  period: string;
  descriptionKr: string;
  descriptionEn: string;
}

export interface ResearchInterest {
  id: ContentId;
  titleKr: string;
  titleEn: string;
  descriptionKr: string;
  descriptionEn: string;
}

export interface ContactField {
  id: ContentId;
  item: string;
  content: string;
  isPrivate: boolean;
}

export interface ContactContent {
  copyKr: string;
  copyEn: string;
  name: string;
  email: string;
  fields: ContactField[];
}

export interface NavItem {
  order: number;
  label: string;
  sectionId: string;
  href: string;
}

export interface SectionTitle {
  sectionId: string;
  titleKr: string;
  titleEn: string;
  descriptionKr: string;
  descriptionEn: string;
}

export interface SiteContent {
  meta: SiteMeta;
  hero: HeroContent;
  about: AboutContent;
  brand: BrandContent;
  strengths: Strength[];
  education: Education[];
  projects: Project[];
  experience: Experience[];
  skillGroups: SkillGroup[];
  awards: Award[];
  courses: Course[];
  archiveIntro: LocalizedText;
  archive: ArchiveItem[];
  interests: ResearchInterest[];
  contact: ContactContent;
  navigation: NavItem[];
  sections: SectionTitle[];
  footer: string;
}
