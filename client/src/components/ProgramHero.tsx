import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin } from "lucide-react";

export default function ProgramHero() {
  const scrollToWebinar = () => {
    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-foreground mb-6">
          The 5-Day Innovation Sprint
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A 5-day intensive program where Sec 3 - JC 2 students solve real-world challenges using the B.U.I.L.D. framework, guided by industry leaders from Temasek, Credit Suisse, GovTech, and NUS Block71.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">30 Nov - 4 Dec, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">Sec 3 - JC 2 Students</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground font-semibold">WeWork Suntec Tower 5</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToWebinar}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
          >
            Register for Free Masterclass
          </Button>
          <div className="text-center">
            <div className="text-sm text-muted-foreground line-through">S$1,599</div>
            <div className="text-2xl font-bold text-primary">S$1,299</div>
            <div className="text-xs text-muted-foreground">Masterclass Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
