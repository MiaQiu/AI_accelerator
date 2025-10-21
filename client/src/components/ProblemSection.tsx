import { Brain, Briefcase, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProblemSection() {
  const problems = [
    {
      icon: Brain,
      title: "AI is a Commodity",
      description: "AI can now write code and analyze reports. We teach your child to ask the right questions and lead AI, not be replaced by it."
    },
    {
      icon: Briefcase,
      title: "Grades Aren't Enough",
      description: "Top universities and employers (like us) want a portfolio of real projects, not just a transcript. We help them build one."
    },
    {
      icon: Target,
      title: "Most Programs Teach the Wrong Skills",
      description: "Coding camps teach a tool. Tuition prepares for yesterday's exams. We teach the 5 irreplaceable human skills for the next 50 years."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12" data-testid="text-problem-headline">
          The Path to Success Has Changed. Are They Prepared?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="p-6" data-testid={`card-problem-${index}`}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-foreground mb-3" data-testid={`text-problem-title-${index}`}>
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-center" data-testid={`text-problem-description-${index}`}>
                  {problem.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
