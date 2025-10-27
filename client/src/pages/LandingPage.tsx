import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BuildFramework from "@/components/BuildFramework";
import FoundersBrief from "@/components/FoundersBrief";
import WebinarCTA from "@/components/WebinarCTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <BuildFramework />
      <FoundersBrief />
      <WebinarCTA />
      <Footer />
    </div>
  );
}
