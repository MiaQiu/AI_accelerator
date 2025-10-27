import { Lightbulb, Users, Search, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function BuildFramework() {
  const skillColors = {
    B: "#4A90E2", // Deep Blue (Foundation, Stability)
    U: "#32F1B8", // Brand Teal (Connection, Your Brand)
    I: "#7ED321", // Vibrant Green (Growth, Investigation)
    L: "#F8E71C", // Bright Yellow (Knowledge, "Lightbulb")
    D: "#F5A623", // Action Orange (Action, Results, Energy)
  };

  const skills = [
    {
      icon: Lightbulb,
      letter: "B",
      title: "Build",
      subtitle: "Creativity",
      description: "From idea to prototype, we teach them to create innovative solutions.",
      color: skillColors.B,
    },
    {
      icon: Users,
      letter: "U",
      title: "Unite",
      subtitle: "Collaboration",
      description: "To lead, they must learn to communicate and collaborate with both humans and AI.",
      color: skillColors.U,
    },
    {
      icon: Search,
      letter: "I",
      title: "Inquire",
      subtitle: "Critical Thinking",
      description: "We train them to deconstruct complex problems and find the root cause.",
      color: skillColors.I,
    },
    {
      icon: Zap,
      letter: "L",
      title: "Learn",
      subtitle: "Adaptability",
      description: "Students master new AI tools and learn to adapt in a constantly changing world.",
      color: skillColors.L,
    },
    {
      icon: TrendingUp,
      letter: "D",
      title: "Drive",
      subtitle: "Resilience",
      description: "Through real project challenges, they learn to navigate failure, pivot, and persevere.",
      color: skillColors.D,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-skill-${index}`}>
                <div className="flex justify-center mb-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: skill.color }} />
                  </div>
                </div>
                <div className="text-center mb-2">
                  <span className="text-3xl font-bold" style={{ color: skill.color }}>{skill.letter}</span>
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
        <div className="text-center">
          <Link href="/program">
            <Button size="lg" variant="outline">
              View Program Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
