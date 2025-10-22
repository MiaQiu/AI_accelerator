import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CredibilityBar from "@/components/CredibilityBar";
import ProblemSection from "@/components/ProblemSection";
import BuildFramework from "@/components/BuildFramework";
import FoundersSection from "@/components/FoundersSection";
import PanelistsSection from "@/components/PanelistsSection";
import ProgramSection from "@/components/ProgramSection";
import FAQSection from "@/components/FAQSection";
import WebinarCTA from "@/components/WebinarCTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CredibilityBar />
      <ProblemSection />
      <BuildFramework />
      <FoundersSection />
      <PanelistsSection />
      <ProgramSection />
      <FAQSection />
      <WebinarCTA />
      <Footer />
    </div>
  );
}
