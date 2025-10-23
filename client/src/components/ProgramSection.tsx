import { Card } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Sparkles,
  UserCheck,
  Lightbulb,
  Quote,
} from "lucide-react";

export default function ProgramSection() {
  const buildColors = {
    B: "#4A90E2", // Deep Blue (Foundation, Stability)
    U: "#32F1B8", // Brand Teal (Connection, Your Brand)
    I: "#7ED321", // Vibrant Green (Growth, Investigation)
    L: "#F8E71C", // Bright Yellow (Knowledge, "Lightbulb")
    D: "#F5A623", // Action Orange (Action, Results, Energy)
  };

  const timeline = [
    {
      day: "Day 1",
      title: "Unite",
      subtitle: "Team Assembly",
      buildLetter: "B",
      buildWord: "Build",
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
      title: "Inquire",
      subtitle: "Ask the Right Questions",
      buildLetter: "U",
      buildWord: "Unite",
      morning: ["Ask powerful questions", "Interview techniques"],
      afternoon: [
        "Field visit: NTUC FairPrice & restaurants",
        "Observe real behavior, gather insights",
      ],
    },
    {
      day: "Day 3",
      title: "Learn",
      subtitle: "Connect the Dots",
      buildLetter: "I",
      buildWord: "Inquire",
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
      title: "Build",
      subtitle: "From Problem to Possibility",
      buildLetter: "L",
      buildWord: "Learn",
      morning: ["Reframe problems creatively", "Brainstorm 15+ solutions"],
      afternoon: [
        "Build a tangible prototype",
        "Refine based on peer feedback",
      ],
    },
    {
      day: "Day 5",
      title: "Drive",
      subtitle: "Finish Strong",
      buildLetter: "D",
      buildWord: "Drive",
      morning: ["Master storytelling & presentation", "Handle tough questions"],
      afternoon: [
        "7-minute pitch to judges & parents",
        "Compete for awards & celebrate",
        "Networking with industry experts",
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
          The AI Leadership Accelerator: The Founding Cohort
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
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

        <div className="max-w-6xl mx-auto mb-16">
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
            <div className="p-6 bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg border-2 border-primary/30 mb-8">
              <h4 className="text-xl font-bold text-foreground mb-3 text-center">
                Attend Our Free Parent Masterclass & Unlock the S$1,299 Rate
              </h4>
              <p className="text-muted-foreground mb-4 text-center">
                Good grades are no longer enough. But what's the alternative? Join our 45-min masterclass, <span className="font-semibold italic">"Future-Proofing Your Child,"</span> hosted by our PhD founders. You'll learn the 3 skills AI leaders look for, and we'll answer all your questions live.
              </p>
              <div className="flex flex-col items-center gap-3">
                <div className="text-2xl font-bold text-primary">
                  Masterclass Rate: S$1,299
                </div>
                <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Register for the Free Masterclass
                </button>
              </div>
            </div>

            <div className="border-t border-muted pt-8">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">
                5-Day Journey
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {timeline.slice(0, 3).map((day, index) => (
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
                          <span className="text-2xl" style={{ color: buildColors[day.title[0] as keyof typeof buildColors] }}>
                            {day.title[0]}
                          </span>
                          {day.title.slice(1)}
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
                              <span className="text-primary mr-2 mt-0.5">
                                •
                              </span>
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
                              <span className="text-primary mr-2 mt-0.5">
                                •
                              </span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:max-w-3xl md:mx-auto">
                {timeline.slice(3).map((day, index) => (
                  <Card
                    key={index + 3}
                    className="p-6"
                    data-testid={`timeline-item-${index + 3}`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">
                            {index + 4}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-1">
                          {day.day}
                        </div>
                        <h4
                          className="text-lg font-bold text-foreground"
                          data-testid={`text-day-title-${index + 3}`}
                        >
                          <span className="text-2xl" style={{ color: buildColors[day.title[0] as keyof typeof buildColors] }}>
                            {day.title[0]}
                          </span>
                          {day.title.slice(1)}
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
                              <span className="text-primary mr-2 mt-0.5">
                                •
                              </span>
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
                              <span className="text-primary mr-2 mt-0.5">
                                •
                              </span>
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
          </Card>
        </div>
      </div>
    </section>
  );
}
