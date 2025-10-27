import { Card } from "@/components/ui/card";

export default function ProgramTimeline() {
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
      buildLetter: "U",
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
      buildLetter: "I",
      morning: ["Ask powerful questions", "Interview techniques"],
      afternoon: [
        "Field visits to conduct interviews with stackeholders",
        "Observe real behavior, gather insights",
      ],
    },
    {
      day: "Day 3",
      title: "Learn",
      subtitle: "Connect the Dots",
      buildLetter: "L",
      morning: [
        "Team collaboration challenges",
        "Practice giving tough feedback",
      ],
      afternoon: [
        "Synthesize all your research",
        "Identify key insights & problem areas (the Gap)",
      ],
    },
    {
      day: "Day 4",
      title: "Build",
      subtitle: "From Problem to Possibility",
      buildLetter: "B",
      morning: ["Reframe problems creatively", "Brainstorm 15+ solutions"],
      afternoon: [
        "Build a tangible prototype",
        "Exchange feedback with other teams",
      ],
    },
    {
      day: "Day 5",
      title: "Drive",
      subtitle: "Finish Strong",
      buildLetter: "D",
      morning: ["Master storytelling & presentation", "Handle tough questions"],
      afternoon: [
        "7-minute pitch to judges & parents",
        "Compete for awards & celebrate",
        "Networking with industry experts",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Your 5-Day Journey
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Each day builds on the last, following our proven B.U.I.L.D. framework to develop real-world leadership skills.
        </p>

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
                    <span className="text-2xl" style={{ color: buildColors[day.buildLetter as keyof typeof buildColors] }}>
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
                    <span className="text-2xl" style={{ color: buildColors[day.buildLetter as keyof typeof buildColors] }}>
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
    </section>
  );
}
