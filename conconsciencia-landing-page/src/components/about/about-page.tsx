import { CtaSection } from "../home/cta-section";
import { SiteFooter } from "../home/site-footer";
import { SiteHeader } from "../home/site-header";
import { AboutHeroSection } from "./about-hero-section";
import { PurposeSection } from "./purpose-section";
import { TeamSection } from "./team-section";
import { ValuesSection } from "./values-section";

type AboutPageProps = {
  currentPath?: string;
};

export function AboutPage({ currentPath = "/quienes-somos" }: AboutPageProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fbff]">
      <SiteHeader currentPath={currentPath} />
      <main>
        <AboutHeroSection />
        <PurposeSection />
        <ValuesSection />
        <TeamSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
