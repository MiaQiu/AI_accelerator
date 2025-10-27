import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ProgramTimeline() {
  const [activeDay, setActiveDay] = useState(0);

  const buildColors = {
    B: "#4A90E2", // Deep Blue (Foundation, Stability)
    U: "#FF6F61", // Coral Red (Connection, Your Brand) - matches "a" in ChromaMind logo
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Your 5-Day Journey
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Each day builds on the last, following our proprietary B.U.I.L.D. framework.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {timeline.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                activeDay === index
                  ? "text-white shadow-lg"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
              style={{
                backgroundColor: activeDay === index ? buildColors[day.buildLetter as keyof typeof buildColors] : undefined,
              }}
            >
              <span>Day {index + 1}: {day.title}</span>
              {index < timeline.length - 1 && activeDay === index && (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>

        {/* Active Day Content */}
        <Card className="p-8 border-2" style={{ borderColor: `${buildColors[timeline[activeDay].buildLetter as keyof typeof buildColors]}40` }}>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: buildColors[timeline[activeDay].buildLetter as keyof typeof buildColors] }}
              >
                {activeDay + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  <span style={{ color: buildColors[timeline[activeDay].buildLetter as keyof typeof buildColors] }}>
                    {timeline[activeDay].title[0]}
                  </span>
                  {timeline[activeDay].title.slice(1)}
                </h3>
                <p className="text-lg text-muted-foreground font-medium">
                  "{timeline[activeDay].subtitle}"
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: buildColors[timeline[activeDay].buildLetter as keyof typeof buildColors] }}
                />
                Morning
              </h4>
              <ul className="space-y-3">
                {timeline[activeDay].morning.map((activity, actIndex) => (
                  <li
                    key={actIndex}
                    className="text-base text-muted-foreground flex items-start gap-3"
                  >
                    <span
                      className="text-lg mt-0.5"
                      style={{ color: buildColors[timeline[activeDay].buildLetter as keyof typeof buildColors] }}
                    >
                      •
                    </span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: buildColors[timeline[activeDay].buildLetter as keyof typeof buildColors] }}
                />
                Afternoon
              </h4>
              <ul className="space-y-3">
                {timeline[activeDay].afternoon.map((activity, actIndex) => (
                  <li
                    key={actIndex}
                    className="text-base text-muted-foreground flex items-start gap-3"
                  >
                    <span
                      className="text-lg mt-0.5"
                      style={{ color: buildColors[timeline[activeDay].buildLetter as keyof typeof buildColors] }}
                    >
                      •
                    </span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
