import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { AppShowcaseSection } from "@/components/home/AppShowcaseSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { BrandStorySection } from "@/components/home/BrandStorySection";
import { EditorialSection } from "@/components/home/EditorialSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ProblemSection } from "@/components/home/ProblemSection";
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
        <HowItWorksSection />
        <EditorialSection />
        <AppShowcaseSection />
        <TestimonialsSection />
        <ServicesSection />
        <BrandStorySection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
