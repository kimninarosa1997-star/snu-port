import type { LocalizedText } from "./types";

/** UI 크롬 문구 — 컴포넌트 하드코딩 금지, 여기만 수정 */
export const uiStrings = {
  a11y: {
    skipToMain: { kr: "본문으로 건너뛰기", en: "Skip to main content" },
    primaryNav: { kr: "주 내비게이션", en: "Primary navigation" },
    mobileNav: { kr: "모바일 내비게이션", en: "Mobile navigation" },
    langToggle: { kr: "언어 선택", en: "Language selection" },
    menuButton: { kr: "메뉴", en: "Menu" },
    heroKeywords: { kr: "관심 키워드", en: "Keywords" },
  },
  theme: {
    toggle: { kr: "테마 전환", en: "Toggle theme" },
    light: { kr: "Light", en: "Light" },
    dark: { kr: "Dark", en: "Dark" },
  },
  header: {
    contactCta: { kr: "Contact", en: "Contact" },
  },
  about: {
    readMore: { kr: "더 보기", en: "Read more" },
    showLess: { kr: "접기", en: "Show less" },
    researchInterests: { kr: "연구 관심분야", en: "Research Interests" },
    credentials: { kr: "자격", en: "Credentials" },
    education: { kr: "학력", en: "Education" },
    profileAlt: {
      kr: (nameKr: string) => `${nameKr} 프로필 사진`,
      en: (name: string) => `Portrait of ${name}`,
    },
  },
  projects: {
    viewDetail: { kr: "상세 보기", en: "View detail" },
    close: { kr: "접기", en: "Close" },
    problem: { kr: "문제", en: "Problem" },
    solution: { kr: "해결", en: "Solution" },
    result: { kr: "결과", en: "Result" },
    contactCta: { kr: "Contact", en: "Contact" },
    allProjects: { kr: "프로젝트 목록", en: "All projects" },
    keywords: { kr: "키워드", en: "Keywords" },
    getInTouch: { kr: "협업 문의", en: "Get in touch" },
    moreProjects: { kr: "다른 프로젝트", en: "More projects" },
    role: { kr: "역할", en: "Role" },
    contactLink: { kr: "문의하기", en: "Contact" },
  },
  experience: {
    work: { kr: "경력", en: "Experience" },
    awards: { kr: "수상", en: "Awards" },
    courses: { kr: "교육·수료", en: "Courses" },
  },
  contact: {
    emailAriaLabel: {
      kr: (name: string) => `이메일로 ${name}에게 문의`,
      en: (name: string) => `Contact ${name} by email`,
    },
    copyEmail: { kr: "이메일 복사", en: "Copy email" },
    copySuccess: { kr: "복사됨", en: "Copied" },
    instagramPending: { kr: "Instagram · 추가 예정", en: "Instagram · Coming soon" },
  },
  profile: {
    fallbackCaption: { kr: "C-REQ-001 · 프로필", en: "C-REQ-001 · Profile" },
  },
  ctaBand: {
    sectionAria: { kr: "협업 문의", en: "Collaboration inquiry" },
    label: {
      kr: "함께 일하고 싶으신가요? · 이메일 보내기 · 버튼입니다",
      en: "Want to work together? · Click to email · It's a button, I promise",
    },
  },
  marquee: {
    projects: {
      kr: ["최근 프로젝트", "도시·건축 설계", "마스터플랜 & 연구"],
      en: ["Recent projects", "Urban & architecture", "Masterplan & research"],
    },
    skills: {
      kr: ["나의 역량", "잘하는 일", "설계 · 분석 · 시각화"],
      en: ["My skills", "Things I'm great at", "Design · research · viz"],
    },
    footer: {
      kr: ["함께 일해요", "이메일 보내기", "협업 제안 환영", "프로젝트 이야기"],
      en: ["Let's work together", "Drop me a line", "Open to collaboration", "Tell me about your project"],
    },
  },
} as const;

export type UiStrings = typeof uiStrings;

export function localized(locale: "ko" | "en", text: LocalizedText): string {
  return locale === "ko" ? text.kr : text.en;
}

export function localizedFn(
  locale: "ko" | "en",
  fns: { kr: (name: string) => string; en: (name: string) => string },
  name: string,
): string {
  return locale === "ko" ? fns.kr(name) : fns.en(name);
}
