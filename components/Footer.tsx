import { siteContent } from "@/lib/content";

export function Footer() {
  const { footer, contact, meta } = siteContent;

  return (
    <footer className="section-py border-t border-border bg-background">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <p className="text-label text-muted">{footer}</p>
        <p className="mt-4 text-sm text-muted">
          {meta.nameKr} · {meta.positionKr}
        </p>
        <a
          href={`mailto:${contact.email}`}
          aria-label={`이메일로 ${contact.name}에게 문의`}
          className="mt-8 inline-block text-label text-foreground underline-offset-4 transition-opacity hover:underline focus-visible:focus-ring"
        >
          {contact.email}
        </a>
      </div>
    </footer>
  );
}
