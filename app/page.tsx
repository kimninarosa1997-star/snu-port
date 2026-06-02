import { AboutSection } from "@/components/AboutSection";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <SkillsSection />
        <CTABanner />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
