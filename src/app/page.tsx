import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { AppShowcaseSection } from "@/components/home/AppShowcaseSection";
import { BrandStorySection } from "@/components/home/BrandStorySection";
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
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
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
