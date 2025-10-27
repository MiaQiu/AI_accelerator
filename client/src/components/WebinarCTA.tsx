import { useState } from "react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "./RegistrationModal";

export default function WebinarCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="webinar" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4" data-testid="text-webinar-headline">
            Give Your Child the "Insider's Edge"
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-webinar-body">
            The future won't wait. Our 5-day Accelerator (Nov 30 - Dec 4) is limited to 20 students.
            Attend our free webinar to learn the 5-skill framework and secure your child's priority spot.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() => setIsModalOpen(true)}
            data-testid="button-register-webinar"
          >
            Register for Free Webinar
          </Button>
        </div>
      </section>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
