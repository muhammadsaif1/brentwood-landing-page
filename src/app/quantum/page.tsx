import PageHero from "@/components/common/page-hero";
import QuantumOverview from "@/components/quantum/quantum-overview";
import QuantumServices from "@/components/quantum/quantum-services";
import PartnerCTA from "@/components/quantum/partner-cta";
import ResearchConcepts from "@/components/quantum/research-concepts";

export default function QuantumPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Quantum Research & Innovation"
        description="Exploring the edges of technology to reshape the digital future — Brentwood Global's R&D division leads the quantum frontier."
      />

      <QuantumOverview />
      <ResearchConcepts />
      <QuantumServices />
      <PartnerCTA />
    </main>
  );
}
