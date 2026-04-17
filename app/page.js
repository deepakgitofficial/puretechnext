import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "Pure Tech Zone | Web Development Services in Baghpat",
  description:
    "We build fast, SEO-optimized websites that grow your business. Top web development agency in Baghpat.",
  keywords:
    "Web Development Services in Baghpat, Software Development Company in Baghpat, Website Design Company in Baghpat, Ecommerce Website Developer in Baghpat",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* <WhyChooseUs /> */}
      <PortfolioSection />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      {/* <CTASection /> */}
      {/* <ContactSection /> */}
    </>
  );
}
