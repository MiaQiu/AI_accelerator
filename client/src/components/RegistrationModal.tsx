import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolLevel, setSchoolLevel] = useState("");
  const [webinarDate, setWebinarDate] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', { parentName, email, schoolLevel, webinarDate });

    toast({
      title: "Registration Successful!",
      description: "We'll send you the webinar details via email shortly.",
    });

    setParentName("");
    setEmail("");
    setSchoolLevel("");
    setWebinarDate("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent data-testid="modal-registration">
        <DialogHeader>
          <DialogTitle data-testid="text-modal-title">Register for Free Webinar</DialogTitle>
          <DialogDescription data-testid="text-modal-description">
            Join our free masterclass to meet the PhD mentors and secure your child's priority spot.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="parentName">Parent's Name</Label>
            <Input
              id="parentName"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              required
              data-testid="input-parent-name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-email"
            />
          </div>
          <div>
            <Label htmlFor="schoolLevel">Child's School Level</Label>
            <Select value={schoolLevel} onValueChange={setSchoolLevel} required>
              <SelectTrigger data-testid="select-school-level">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sec3">Secondary 3</SelectItem>
                <SelectItem value="sec4">Secondary 4</SelectItem>
                <SelectItem value="jc1">JC 1</SelectItem>
                <SelectItem value="jc2">JC 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="webinarDate">Preferred Webinar Date</Label>
            <Select value={webinarDate} onValueChange={setWebinarDate} required>
              <SelectTrigger data-testid="select-webinar-date">
                <SelectValue placeholder="Select date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sunday">Sunday, November 9th - 8:30 PM (SGT)</SelectItem>
                <SelectItem value="wednesday">Wednesday, November 12th - 8:30 PM (SGT)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full" data-testid="button-submit-registration">
            Register Now
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
