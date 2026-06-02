/** Header nav — `content.md` §17 order for drawer; desktop uses editorial short labels */
export const FULL_HEADER_NAV = [
  { href: "#home", labelKr: "Home", labelEn: "Home" },
  { href: "#about", labelKr: "About", labelEn: "About" },
  { href: "#projects", labelKr: "Projects", labelEn: "Projects" },
  { href: "#skills", labelKr: "Skills", labelEn: "Skills" },
  { href: "#experience", labelKr: "Experience", labelEn: "Experience" },
  { href: "#archive", labelKr: "Archive", labelEn: "Archive" },
  { href: "#contact", labelKr: "Contact", labelEn: "Contact" },
] as const;

export const DESKTOP_HEADER_NAV = [
  { href: "#projects", labelKr: "Work", labelEn: "Work" },
  { href: "#archive", labelKr: "News", labelEn: "News" },
  { href: "#about", labelKr: "About", labelEn: "About" },
  { href: "#contact", labelKr: "Contact", labelEn: "Contact" },
] as const;
