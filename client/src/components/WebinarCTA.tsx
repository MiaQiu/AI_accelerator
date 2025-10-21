import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import RegistrationModal from "./RegistrationModal";

export default function WebinarCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState<string>("");

  const webinars = [
    {
      date: "Sunday, November 9th",
      time: "8:30 PM (SGT)",
      id: "sunday"
    },
    {
      date: "Wednesday, November 12th",
      time: "8:30 PM (SGT)",
      id: "wednesday"
    }
  ];

  const handleRegister = (webinarId: string) => {
    setSelectedWebinar(webinarId);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="webinar" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4" data-testid="text-webinar-headline">
            Give Your Child the "Insider's Edge"
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="text-webinar-body">
            The future won't wait. Our 5-day Accelerator (Nov 30 - Dec 4) is limited to 20 students. 
            Attend our free webinar to learn the 5-skill framework and secure your child's priority spot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {webinars.map((webinar, index) => (
              <Card key={index} className="p-8 hover-elevate" data-testid={`card-webinar-${index}`}>
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold" data-testid={`text-webinar-date-${index}`}>
                      {webinar.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold" data-testid={`text-webinar-time-${index}`}>
                      {webinar.time}
                    </span>
                  </div>
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handleRegister(webinar.id)}
                    data-testid={`button-register-${webinar.id}`}
                  >
                    Register for {webinar.id === 'sunday' ? 'Sunday' : 'Wednesday'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedWebinar={selectedWebinar}
      />
    </>
  );
}
