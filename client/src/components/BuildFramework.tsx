import { Lightbulb, Users, Search, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BuildFramework() {
  const skills = [
    {
      icon: Lightbulb,
      letter: "B",
      title: "Build",
      subtitle: "Creativity",
      description: "From idea to prototype, we teach them to create innovative solutions."
    },
    {
      icon: Users,
      letter: "U",
      title: "Unite",
      subtitle: "Collaboration",
      description: "To lead, they must learn to communicate and collaborate with both humans and AI."
    },
    {
      icon: Search,
      letter: "I",
      title: "Inquire",
      subtitle: "Critical Thinking",
      description: "We train them to deconstruct complex problems and find the root cause."
    },
    {
      icon: Zap,
      letter: "L",
      title: "Learn",
      subtitle: "Adaptability",
      description: "Students master new AI tools and learn to adapt in a constantly changing world."
    },
    {
      icon: TrendingUp,
      letter: "D",
      title: "Drive",
      subtitle: "Resilience",
      description: "Through real project challenges, they learn to navigate failure, pivot, and persevere."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4" data-testid="text-build-headline">
          Our Solution: The B.U.I.L.D. Framework
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12" data-testid="text-build-subheadline">
          Our proprietary framework for developing the 5 skills that matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-skill-${index}`}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-center mb-2">
                  <span className="text-3xl font-bold text-primary">{skill.letter}</span>
                </div>
                <h3 className="text-lg font-bold text-center text-foreground mb-1" data-testid={`text-skill-title-${index}`}>
                  {skill.title}
                </h3>
                <p className="text-sm text-center text-muted-foreground font-semibold mb-3">
                  {skill.subtitle}
                </p>
                <p className="text-sm text-muted-foreground text-center" data-testid={`text-skill-description-${index}`}>
                  {skill.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
