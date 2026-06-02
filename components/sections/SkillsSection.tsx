"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

export function SkillsSection() {
  const { locale } = useLanguage();
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const sectionMeta = getSectionMeta(siteContent, "skills");
  const { skillGroups } = siteContent;

  if (!sectionMeta) return null;

  return (
    <section id="skills" aria-labelledby="skills-heading" className="studio-section border-t border-border bg-background section-py">
      <div className="mx-auto max-w-content layout-gutter">
        <header className="pb-8 md:pb-10">
          <h2 id="skills-heading" className="text-studio-section-title">
            {pickLocale(locale, sectionMeta.titleKr, sectionMeta.titleEn)}
          </h2>
        </header>

        <div className="mt-12 hidden gap-10 lg:grid lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-subhead font-medium text-[var(--color-band-light-ink)]">
                {group.title}.
              </h3>
              <ul className="mt-6 flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="border border-border px-3 py-2 text-label text-neutral-700"
                    title={pickLocale(locale, skill.descriptionKr, skill.descriptionEn)}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 hidden gap-8 sm:grid sm:grid-cols-2 lg:hidden">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-subhead font-medium">
                {group.title}.
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="border border-border px-3 py-2 text-label text-neutral-700"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 sm:hidden">
          {skillGroups.map((group) => {
            const isOpen = openGroupId === group.id;
            return (
              <div key={group.id} className="border-t border-neutral-800/20">
                <button
                  type="button"
                  className="text-subhead flex w-full items-center justify-between py-4 text-left focus-visible:focus-ring"
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroupId(isOpen ? null : group.id)}
                >
                  {group.title}
                  <span className="text-muted">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <ul className="flex flex-wrap gap-2 pb-4">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.id}
                        className="border border-border px-3 py-2 text-label text-neutral-700"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
