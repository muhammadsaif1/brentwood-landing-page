import HeroSection from "@/components/home/hero-section";
import FeatureTags from "@/components/home/feature-tags";
import GetToKnowUs from "@/components/home/get-to-know-us";
import CompanyMetrics from "@/components/home/company-metrics";
import SecureSolutions from "@/components/home/secure-solutions";
import DecipheringAI from "@/components/home/deciphering-ai";
import ServicesWeOffer from "@/components/home/services-we-offer";
import IoTSection from "@/components/home/iot-section";
import AIProjectsShowcase from "@/components/home/ai-projects-showcase";
import BlockchainFever from "@/components/home/blockchain-fever";
import AdditionalServices from "@/components/home/additional-services";
import ProjectInMind from "@/components/home/project-in-mind";
import MessageBoxBanner from "@/components/home/message-box-banner";
import BoardOfExpertise from "@/components/common/board-of-expertise";
import Testimonials from "@/components/home/testimonials";
import BlogHighlights from "@/components/home/blog-highlights";
import FAQsSection from "@/components/home/faqs-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureTags />
      <GetToKnowUs />
      <CompanyMetrics />
      <SecureSolutions />
      <DecipheringAI />
      <ServicesWeOffer />
      <IoTSection />
      <AIProjectsShowcase />
      <BlockchainFever />
      <AdditionalServices />
      <ProjectInMind />
      <MessageBoxBanner />
      <BoardOfExpertise />
      <Testimonials />
      <BlogHighlights />
      <FAQsSection />
    </div>
  );
}
