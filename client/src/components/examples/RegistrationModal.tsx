import { useState } from "react";
import RegistrationModal from '../RegistrationModal';
import { Button } from "@/components/ui/button";

export default function RegistrationModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Registration Modal</Button>
      <RegistrationModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedWebinar="sunday"
      />
    </div>
  );
}
