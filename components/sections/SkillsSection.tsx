"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/lib/content";
import { getSectionMeta, pickLocale } from "@/lib/content/helpers";

export function SkillsSection() {
  const { locale } = useLanguage();
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const sectionMeta = getSectionMeta(siteContent, "skills");
  const { skillGroups } = siteContent;

  if (!sectionMeta) return null;

  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-py">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading
          meta={sectionMeta}
          locale={locale}
          headingId="skills-heading"
        />

        <div className="mt-16 hidden gap-6 lg:grid lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.id} className="border-t border-border pt-6">
              <h3 className="text-label text-muted">{group.title}</h3>
              <ul className="mt-6 flex flex-col gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="border border-border px-3 py-2 text-label text-neutral-300"
                    title={pickLocale(locale, skill.descriptionKr, skill.descriptionEn)}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 hidden gap-6 sm:grid sm:grid-cols-2 lg:hidden">
          {skillGroups.map((group) => (
            <div key={group.id} className="border-t border-border pt-6">
              <h3 className="text-label text-muted">{group.title}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill.id}
                    className="border border-border px-3 py-2 text-label text-neutral-300"
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
              <div key={group.id} className="border-t border-border">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-label text-foreground focus-visible:focus-ring"
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
                        className="border border-border px-3 py-2 text-label text-neutral-300"
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
