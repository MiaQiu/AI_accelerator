import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, DollarSign } from "lucide-react";

export default function ProgramSection() {
  const timeline = [
    {
      day: "Day 1 (Sun)",
      title: "Inquire & Deconstruct",
      description: "Kick-off day. Students learn to use Critical Thinking to define a real-world problem."
    },
    {
      day: "Day 2 (Mon)",
      title: "Build & Learn",
      description: "Ideation and AI Prototyping. Students learn to use AI tools to build their first solution."
    },
    {
      day: "Day 3 (Tue)",
      title: "Drive & Iterate",
      description: "'The Pivot Day.' We teach Resilience by guiding them through their first major roadblock."
    },
    {
      day: "Day 4 (Wed)",
      title: "Unite & Communicate",
      description: "Students build their final pitch deck and learn to tell a compelling story—a key Collaboration skill."
    },
    {
      day: "Day 5 (Thu)",
      title: "Demo Day & Showcase",
      description: "Final pitches to a panel of experts. Parents are invited to this showcase session."
    }
  ];

  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12" data-testid="text-program-headline">
          The AI Leadership Accelerator: December Cohort
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              {timeline.map((day, index) => (
                <div key={index} className="flex gap-4" data-testid={`timeline-item-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{day.day}</div>
                    <h3 className="text-lg font-bold text-foreground mb-2" data-testid={`text-day-title-${index}`}>
                      {day.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-day-description-${index}`}>
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="text-program-details">
                Program Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Dates</div>
                    <div className="text-muted-foreground">30 November - 4th December, 2025</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">For</div>
                    <div className="text-muted-foreground">Sec 3 - JC 2 Students</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">A modern co-working space, Central Singapore</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground">Investment</div>
                    <div className="text-muted-foreground line-through">S$1,988</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="font-bold text-foreground mb-2">Webinar Exclusive Offer</div>
                <div className="text-muted-foreground mb-2">
                  Attend our free webinar to receive an exclusive S$300 discount.
                </div>
                <div className="text-2xl font-bold text-primary">Webinar Rate: S$1,688</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
