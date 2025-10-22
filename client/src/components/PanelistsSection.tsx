import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function PanelistsSection() {
  const panelists = [
    {
      role: "UX Designer",
      organization: "Lorong AI",
      description: "Singapore's gov-backed AI community",
    },
    {
      role: "Program Manager",
      organization: "NUS Block71",
      description: "Singapore's premier startup accelerator",
    },
    {
      role: "Director & Faculty",
      organization: "GLOBIS University Asia Pacific",
      description: "Japan's #1 MBA program",
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
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3
                  className="text-lg font-bold text-foreground mb-2"
                  data-testid={`text-panelist-role-${index}`}
                >
                  {panelist.role}
                </h3>
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
