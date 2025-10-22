import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function PanelistsSection() {
  const panelists = [
    {
      name: "Jake Pratley",
      role: "Director & Faculty",
      organization: "GLOBIS University Asia Pacific",
      description: "Japan's #1 MBA program",
      image: "/jack_pratley.jpg",
    },
    {
      name: "John Smith",
      role: "Program Manager",
      organization: "NUS Block71",
      description: "Singapore's premier startup accelerator",
      image: "/placeholder-panelist-2.jpg",
    },
    {
      name: "Mehul Shah",
      role: "UX Designer & Program manager",
      organization: "GovTech & Lorong AI",
      description: "Singapore's gov-backed AI community",
      image: "/mehul-shah.jpg",
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
            <Card
              key={index}
              className="p-6 text-center hover-elevate"
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
                <p className="text-sm text-muted-foreground">
                  {panelist.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
