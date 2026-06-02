import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ArchiveSection } from "@/components/sections/ArchiveSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/layout/SkipLink";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="relative bg-background">
        <HeroSection />
        <ProjectsSection />
        <ArchiveSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
