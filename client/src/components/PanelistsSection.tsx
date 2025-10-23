import { Card } from "@/components/ui/card";
import { Award, Quote } from "lucide-react";

export default function PanelistsSection() {
  const panelists = [
    {
      name: "Jake Pratley",
      role: "Director & Faculty",
      organization: "GLOBIS University Asia Pacific",
      description: "Japan's #1 MBA program",
      companies: ["GLOBIS Asia Pacific"],
      image: "/jack_pratley.jpg",
      quote: "As a researcher and educator, I believe the future belongs to those who can combine deep thinking with practical action. This accelerator bridges that gap in a way traditional education doesn't.",
    },
    {
      name: "John Smith",
      role: "Program Director",
      organization: "NUS Block71 Incubator",
      description: "Singapore's premier startup ecosystem builder",
      companies: ["NUS Block71"],
      image: "/placeholder-panelist-2.jpg",
      quote: "I mentor at NUS Block71 and see hundreds of pitches. The B.U.I.L.D. framework Chromamind developed is the exact process we use to build real, successful startups. I'm here to teach that.",
    },
    {
      name: "Mehul Shah",
      role: "Product Marketing & Communication",
      organization: "GovTech & Lorong AI",
      description: "Singapore's gov-backed AI community",
      companies: ["GovTech", "Lorong AI"],
      image: "/mehul-shah.jpg",
      quote: "After years in product management, I've seen how critical creative problem-solving is in the AI age. This program teaches students skills that can't be automated—the human creativity that drives innovation.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="w-8 h-8 text-primary" />
          <h2
            className="text-4xl font-bold text-center text-foreground"
            data-testid="text-panelists-headline"
          >
            Final Pitch Judging Panel
          </h2>
        </div>
        <p
          className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto"
          data-testid="text-panelists-subheadline"
        >
          Your child will present their solutions to expert judges from
          Singapore's top AI, startup, and education ecosystems
        </p>

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {panelists.map((panelist, index) => (
            <div key={index} className="flex flex-col">
              <Card
                className="p-6 text-center hover-elevate mb-4"
                data-testid={`card-panelist-${index}`}
              >
                <div className="mb-4">
                  <div className="w-32 h-32 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <img
                      src={panelist.image}
                      alt={panelist.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const icon = document.createElement('div');
                          icon.className = 'flex items-center justify-center w-full h-full';
                          icon.innerHTML = '<svg class="w-16 h-16 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                          parent.appendChild(icon);
                        }
                      }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-foreground mb-1"
                    data-testid={`text-panelist-name-${index}`}
                  >
                    {panelist.name}
                  </h3>
                  <h4
                    className="text-base font-semibold text-muted-foreground mb-2"
                    data-testid={`text-panelist-role-${index}`}
                  >
                    {panelist.role}
                  </h4>
                  <div className="text-base font-semibold text-primary mb-1">
                    {panelist.organization}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {panelist.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {panelist.companies.map((company, companyIndex) => (
                      <div
                        key={companyIndex}
                        className="px-2.5 py-1 bg-muted/50 border border-muted-foreground/20 rounded-md text-xs font-semibold text-foreground"
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              <div className="relative">
                <div className="absolute -top-3 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md z-10">
                  Why I'm here
                </div>
                <div className="relative p-4 pt-5 bg-muted/30 rounded-lg border-l-4 border-primary">
                  <Quote className="absolute top-3 right-3 w-6 h-6 text-primary/20" />
                  <p className="text-sm text-foreground italic pr-8">
                    "{panelist.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
