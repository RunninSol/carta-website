import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { AppShowcaseSection } from "@/components/home/AppShowcaseSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { BrandStorySection } from "@/components/home/BrandStorySection";
import { CostClaritySection } from "@/components/home/CostClaritySection";
import { EditorialSection } from "@/components/home/EditorialSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { GuidedTripHubSection } from "@/components/home/GuidedTripHubSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MobileStickyCta } from "@/components/home/MobileStickyCta";
import { ObjectionSection } from "@/components/home/ObjectionSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProofSection } from "@/components/home/ProofSection";
import { RightFitSection } from "@/components/home/RightFitSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <HeroSection />
        <ProblemSection />
        <BeforeAfterSection />
        <CostClaritySection />
        <ProofSection />
        <GuidedTripHubSection />
        <HowItWorksSection />
        <EditorialSection />
        <AppShowcaseSection />
        <RightFitSection />
        <TestimonialsSection />
        <ServicesSection />
        <ObjectionSection />
        <BrandStorySection />
        <FinalCtaSection />
      </main>
      <MobileStickyCta />
      <Footer />
    </>
  );
}
