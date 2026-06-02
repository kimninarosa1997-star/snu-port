import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
