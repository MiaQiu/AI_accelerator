import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, DollarSign } from "lucide-react";

export default function ProgramSection() {
  const timeline = [
    {
      day: "Day 1",
      title: "DISCOVER",
      subtitle: "What AI Can't Replace",
      morning: "Learn why creativity beats memorization, master AI and traditional research methods, and unlock your creative problem-solving potential.",
      afternoon: "Receive your real-world challenge (e.g., Singapore's food waste crisis), form teams, and conduct multi-source research to map what you know vs. what you need to discover."
    },
    {
      day: "Day 2",
      title: "INVESTIGATE",
      subtitle: "Think Like a Detective",
      morning: "Master the art of asking powerful questions, practice interview techniques, and learn to spot hidden patterns and biases in data.",
      afternoon: "Visit NTUC FairPrice and local restaurants to observe real behavior, interview stakeholders, and discover insights you'd never find online."
    },
    {
      day: "Day 3",
      title: "ANALYZE",
      subtitle: "Connect the Dots",
      morning: "Experience why teams beat individuals through hands-on challenges, master giving tough feedback, and learn to communicate complex ideas with clarity.",
      afternoon: "Synthesize all your research (AI, interviews, field observations), use the \"5 Whys\" to find root causes, and craft a laser-focused problem statement."
    },
    {
      day: "Day 4",
      title: "CREATE",
      subtitle: "From Problem to Possibility",
      morning: "Reframe problems to unlock new solutions, generate wild ideas using proven innovation techniques, and learn why \"done beats perfect.\"",
      afternoon: "Brainstorm 15+ solutions, select your best idea, build a tangible prototype, and refine it based on peer feedback."
    },
    {
      day: "Day 5",
      title: "PITCH",
      subtitle: "Finish Strong",
      morning: "Learn how resilience fuels success, master storytelling and presentation skills, and practice handling tough questions with confidence.",
      afternoon: "Deliver your 7-minute pitch to judges and parents, compete for awards (Most Innovative, Best Research, Audience Favorite), and celebrate your transformation."
    }
  ];

  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-foreground mb-12"
          data-testid="text-program-headline"
        >
          The AI Leadership Accelerator: December Cohort
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              {timeline.map((day, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                  data-testid={`timeline-item-${index}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {day.day}
                    </div>
                    <h3
                      className="text-lg font-bold text-foreground mb-1"
                      data-testid={`text-day-title-${index}`}
                    >
                      {day.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium mb-3">
                      "{day.subtitle}"
                    </p>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-semibold text-foreground">Morning: </span>
                        <span className="text-sm text-muted-foreground">{day.morning}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-foreground">Afternoon: </span>
                        <span className="text-sm text-muted-foreground">{day.afternoon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="p-6">
              <h3
                className="text-2xl font-bold text-foreground mb-6"
                data-testid="text-program-details"
              >
                Program Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Dates</div>
                    <div className="text-muted-foreground">
                      30 November - 4th December, 2025
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">For</div>
                    <div className="text-muted-foreground">
                      Sec 3 - JC 2 Students
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">
                      Location
                    </div>
                    <div className="text-muted-foreground">
                      A modern co-working space, Central Singapore
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">
                      Investment
                    </div>
                    <div className="text-muted-foreground line-through">
                      S$1,299
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="font-bold text-foreground mb-2">
                  Webinar Exclusive Offer
                </div>
                <div className="text-muted-foreground mb-2">
                  Attend our free webinar to receive an exclusive S$300
                  discount.
                </div>
                <div className="text-2xl font-bold text-primary">
                  Webinar Rate: S$999
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
