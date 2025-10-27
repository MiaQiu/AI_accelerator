import Navigation from "@/components/Navigation";
import ProgramHero from "@/components/ProgramHero";
import BuildFramework from "@/components/BuildFramework";
import ProgramTimeline from "@/components/ProgramTimeline";
import GatewaySection from "@/components/GatewaySection";
import FoundingCohort from "@/components/FoundingCohort";
import PanelistsSection from "@/components/PanelistsSection";
import FAQSection from "@/components/FAQSection";
import WebinarCTA from "@/components/WebinarCTA";
import Footer from "@/components/Footer";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProgramHero />
      {/* <BuildFramework /> */}
      <ProgramTimeline />
      <GatewaySection />
      {/* <FoundingCohort /> */}
      {/* <PanelistsSection /> */}
      <FAQSection />
      {/* <WebinarCTA /> */}
      <Footer />
    </div>
  );
}
