import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToWebinar = () => {
    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProgram = () => {
    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight" data-testid="text-hero-headline">
          Good Grades Aren't Enough Anymore.
        </h1>
        <h2 className="text-2xl text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-hero-subheadline">
          Is Your Child Future-Proof? We mentor students to lead in the age of AI.
        </h2>
        <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto" data-testid="text-hero-body">
          From founders with PhDs in AI and leadership experience at global investment banks and JP Morgan, 
          this is not another coding camp. This is an elite mentorship program to build the mindset of a future leader.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={scrollToWebinar}
            data-testid="button-hero-register"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Register for Webinar
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToProgram}
            data-testid="button-hero-details"
          >
            View Program Details
          </Button>
        </div>
      </div>
    </section>
  );
}
