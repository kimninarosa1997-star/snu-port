"use client";

import { siteContent } from "@/lib/content";

export function Footer() {
  const { footer, meta } = siteContent;

  return (
    <footer className="studio-footer bg-neutral-950 text-neutral-050">
      <div className="mx-auto max-w-content border-b border-neutral-800 layout-gutter py-10 md:py-12">
        <p className="max-w-prose text-body text-neutral-300">{footer}</p>
      </div>

      <div className="mx-auto max-w-content overflow-hidden layout-gutter py-8 md:py-10">
        <p className="studio-footer-name" aria-hidden="true">
          {meta.name.toUpperCase()}
        </p>
        <p className="sr-only">
          {meta.nameKr} · {meta.positionKr}
        </p>
      </div>
    </footer>
  );
}
