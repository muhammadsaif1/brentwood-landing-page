import PageHero from "@/components/common/page-hero";
import { ImpactStats } from "@/components/about-us/impact-stats";
import { MissionVision } from "@/components/about-us/mission-vision";
import BoardOfExpertise from "@/components/common/board-of-expertise";
import { GrowthStats } from "@/components/about-us/growth-stats";
import { TeamCTA } from "@/components/about-us/team-cta";
import { ImageGallery } from "@/components/about-us/image-gallery";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="About Brentwood Global"
        description="Driven by innovation, committed to delivering value — get to know the people and purpose behind Brentwood."
      />

      {/* Impact Stats Section */}
      <ImpactStats />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Board of Expertise Section */}
      <BoardOfExpertise />

      {/* Growth Stats Section */}
      <GrowthStats />

      {/* Image Gallery Section */}
      <ImageGallery />

      {/* Team CTA Section */}
      <TeamCTA />
    </div>
  );
}
