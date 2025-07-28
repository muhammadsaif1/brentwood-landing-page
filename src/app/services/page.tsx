import PageHero from "@/components/common/page-hero";
import AnimatedTextBlock from "@/components/services/animated-text-block";
import AnimatedImageDisplay from "@/components/services/animated-image-display";
import PuzzleScrolling from "@/components/services/puzzle-scrolling";
import UtilitiesSection from "@/components/services/utilities-section";
import HoverRevealCards from "@/components/services/hover-reveal-cards";
import AnimatedCharacter from "@/components/services/animated-character";
import FinalCTA from "@/components/services/final-cta";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Services"
        description="Explore how Brentwood Global helps you scale with innovative digital services designed for impact."
      />
      <AnimatedTextBlock text="We Deliver Value Through Strategy, Innovation, and Execution." />
      <AnimatedImageDisplay />
      <PuzzleScrolling />
      <UtilitiesSection />
      <HoverRevealCards />
      <AnimatedCharacter />
      <FinalCTA />
    </div>
  );
}
