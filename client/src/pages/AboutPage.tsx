import Navigation from "@/components/Navigation";
import FoundersSection from "@/components/FoundersSection";
import PanelistsSection from "@/components/PanelistsSection";
import WebinarCTA from "@/components/WebinarCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FoundersSection />
      <PanelistsSection />
      {/* <WebinarCTA /> */}
      <Footer />
    </div>
  );
}
