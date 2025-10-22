import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, DollarSign } from "lucide-react";

export default function ProgramSection() {
  const timeline = [
    {
      day: "Day 1",
      title: "DISCOVER",
      subtitle: "What AI Can't Replace",
      morning: [
        "Why creativity beats memorization",
        "Master AI and traditional research",
      ],
      afternoon: [
        "Get your real-world challenge",
        "Form teams and begin research",
      ],
    },
    {
      day: "Day 2",
      title: "INVESTIGATE",
      subtitle: "Think Like a Detective",
      morning: ["Ask powerful questions", "Interview techniques"],
      afternoon: [
        "Field visit: NTUC FairPrice & restaurants",
        "Observe real behavior, gather insights",
      ],
    },
    {
      day: "Day 3",
      title: "ANALYZE",
      subtitle: "Connect the Dots",
      morning: [
        "Team collaboration challenges",
        "Practice giving tough feedback",
      ],
      afternoon: [
        "Synthesize all your research",
        "Use '5 Whys' to find root causes",
      ],
    },
    {
      day: "Day 4",
      title: "CREATE",
      subtitle: "From Problem to Possibility",
      morning: ["Reframe problems creatively", "Brainstorm 15+ solutions"],
      afternoon: [
        "Build a tangible prototype",
        "Refine based on peer feedback",
      ],
    },
    {
      day: "Day 5",
      title: "PITCH",
      subtitle: "Finish Strong",
      morning: ["Master storytelling & presentation", "Handle tough questions"],
      afternoon: [
        "7-minute pitch to judges & parents",
        "Compete for awards & celebrate",
      ],
    },
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

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <h3
              className="text-2xl font-bold text-foreground mb-6 text-center"
              data-testid="text-program-details"
            >
              Program Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Dates</div>
                  <div className="text-muted-foreground">
                    30 November - 4th December, 2025
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">For</div>
                  <div className="text-muted-foreground">
                    Sec 3 - JC 2 Students
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">
                    WeWork, level 17 Community Floor, Suntec Tower 5, Singapore
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">
                    Investment
                  </div>
                  <div className="text-muted-foreground line-through">
                    S$1,599
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="font-bold text-foreground mb-2">
                Webinar Exclusive Offer
              </div>
              <div className="text-muted-foreground mb-2">
                Attend our free webinar to receive an exclusive S$300 discount.
              </div>
              <div className="text-2xl font-bold text-primary">
                Webinar Rate: S$1,299
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            5-Day Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((day, index) => (
              <Card
                key={index}
                className="p-6"
                data-testid={`timeline-item-${index}`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      {day.day}
                    </div>
                    <h4
                      className="text-lg font-bold text-foreground"
                      data-testid={`text-day-title-${index}`}
                    >
                      {day.title}
                    </h4>
                    <p className="text-sm text-primary/80 font-medium">
                      "{day.subtitle}"
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-foreground mb-1.5">
                      Morning
                    </div>
                    <ul className="space-y-1">
                      {day.morning.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2 mt-0.5">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground mb-1.5">
                      Afternoon
                    </div>
                    <ul className="space-y-1">
                      {day.afternoon.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2 mt-0.5">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
