import { Card } from "@/components/ui/card";
import { Sparkles, UserCheck, Lightbulb, Users } from "lucide-react";

export default function FoundingCohort() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground text-center">
              Founding Cohort Benefits
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                Unprecedented Access
              </h4>
              <p className="text-sm text-muted-foreground">
                As part of our very first cohort, your child will receive more
                direct, 1-on-1 mentorship time with our industry leaders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                Shape the Future
              </h4>
              <p className="text-sm text-muted-foreground">
                These founding students will help shape the future of the
                program through their feedback and experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                Smaller, Curated Group
              </h4>
              <p className="text-sm text-muted-foreground">
                We're keeping the first group intentionally small for maximum
                impact and personalized attention.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
