export function scrollToSection(href: string): void {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const target = document.getElementById(id);
  if (!target) return;
  window.history.replaceState(null, "", `#${id}`);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
