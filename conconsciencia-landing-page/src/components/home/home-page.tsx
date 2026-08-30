import { AboutSection } from "./about-section";
import { CtaSection } from "./cta-section";
import { FeaturesSection } from "./features-section";
import { HeroSection } from "./hero-section";
import { ProcessSection } from "./process-section";
import { ServicesSection } from "./services-section";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type HomePageProps = {
  currentPath?: string;
};

export function HomePage({ currentPath = "/" }: HomePageProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fbff]">
      <SiteHeader currentPath={currentPath} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
