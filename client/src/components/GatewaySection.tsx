import { Card } from "@/components/ui/card";
import { CheckCircle, Rocket, Award, Users } from "lucide-react";

export default function GatewaySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-6">
          The Sprint is Just the Beginning.
        </h2>

        <div className="space-y-8">
          <Card className="p-8 bg-background/50 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We believe in long-term mentorship, not short-term camps. The 5-Day Sprint is <span className="font-semibold text-foreground">Phase 1</span>: an intense, high-energy launchpad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It's also our filter to identify the most driven and creative student leaders.
            </p>
          </Card>

          <div className="text-center py-8">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Introducing the ChromaMind Leadership Accelerator
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Students with the most promising projects from the sprint will be invited to join our exclusive <span className="font-semibold text-foreground">6-Month Leadership Accelerator</span>.
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This is not another class. It's a real-world mentorship program designed to do one thing: <span className="font-semibold text-foreground">build a world-class Capstone Project that makes your child stand out</span>.
            </p>

            <div className="mb-6">
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Guided bi-weekly by our PhD and industry mentors (from firms like JP Morgan), students in the Accelerator will:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Build a "Spike"
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    This is the "passion project" that top US/UK universities (like the Ivy League and Oxbridge) are desperately looking for. It's the ultimate tie-breaker.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Go from Idea to Reality
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    They will build a working app, launch a non-profit initiative, publish a research paper, or design a viable business plan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Receive Sustained Mentorship
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    They get 6 months of sustained access to the elite mentors that other students only get to hear from once.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Present at "Demo Day"
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    The program culminates in a Demo Day where students pitch their finished projects to a panel of industry leaders, founders, and academics.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-background/50 backdrop-blur-sm border-2 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Building the Next Generation of Leaders, Together.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To ensure this opportunity is available to all top talent, we reserve <span className="font-semibold text-foreground">merit-based scholarship spots</span> in every Accelerator cohort for the highest-potential students, regardless of their financial background.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
