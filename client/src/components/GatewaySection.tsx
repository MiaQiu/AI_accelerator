import { Card } from "@/components/ui/card";
import { Rocket, Award, Users, Presentation, HeartHandshake, Code } from "lucide-react";

export default function GatewaySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-6">
          The Sprint is Just the Beginning.
        </h2>

        <div className="space-y-12">
          <Card className="p-8 bg-background/50 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We believe in long-term mentorship, not short-term camps. The 5-Day Sprint is <span className="font-semibold text-foreground">Phase 1</span>: an intense, high-energy launchpad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              It's also our filter to identify the most driven and creative student leaders.
            </p>
          </Card>

          {/* 2-Column Mini-Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 lg:p-12 border-2 border-primary/20">
            {/* Left Side - The "What" */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-sm font-bold text-primary">INVITATION-ONLY</span>
              </div>

              <h3 className="text-4xl font-bold text-foreground mb-4">
                Introducing The ChromaMind Leadership Accelerator
              </h3>

              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The 5-Day Sprint is <span className="font-semibold text-foreground">Phase 1</span>. This is <span className="font-semibold text-foreground">Phase 2</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We invite top students to join this exclusive 6-month program, where they will build a <span className="font-semibold text-foreground">world-class Capstone Project</span>—the "Spike" that makes their university application stand out.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl border-2 border-primary/20 overflow-hidden">
                <img
                  src="/mentorship.png"
                  alt="Student presenting project to industry mentors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">
              What Students Will Achieve in the Accelerator:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Build a Real-World Project
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Go from a sprint idea to a working app, a published research paper, or a launched non-profit.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Receive Sustained Mentorship
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Get 6 months of direct access to our PhDs and industry leaders—guidance you can't get anywhere else.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Presentation className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Present at "Demo Day"
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Pitch your final, completed project to a real-world panel of investors, academics, and industry experts.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Merit-Based Scholarships
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Our program is built on talent. We reserve scholarship spots in every cohort for the highest-potential students, regardless of background.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
