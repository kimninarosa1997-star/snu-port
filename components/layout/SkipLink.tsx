export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-border focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:focus-ring"
    >
      본문으로 건너뛰기
    </a>
  );
}
