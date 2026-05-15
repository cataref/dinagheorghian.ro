import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import Testimonials from "@/components/home/Testimonials";
import PricingSection from "@/components/home/PricingSection";
import BookSection from "@/components/home/BookSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <AboutTeaser />
      <Testimonials />
      <PricingSection />
      <BookSection />
      <CTABanner />
    </>
  );
}
