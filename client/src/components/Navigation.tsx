import { Button } from "@/components/ui/button";

export default function Navigation() {
  const scrollToWebinar = () => {
    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-foreground" data-testid="text-logo">
              Chromamind
            </span>
          </div>
          <div>
            <Button 
              onClick={scrollToWebinar}
              data-testid="button-nav-register"
              className="bg-primary hover:bg-primary/90"
            >
              Register for Free Webinar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
