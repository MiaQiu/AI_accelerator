import { Button } from "@/components/ui/button";
import heroImage from '@assets/team-strategy-session-stockcake_1761031746138.jpg';

export default function HeroSection() {
  const scrollToWebinar = () => {
    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProgram = () => {
    document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight" data-testid="text-hero-headline">
              Good Grades Aren't Enough Anymore.
            </h1>
            <h2 className="text-2xl text-muted-foreground mt-4" data-testid="text-hero-subheadline">
              Is Your Child Future-Proof? We mentor students to lead in the age of AI.
            </h2>
            <p className="text-lg text-muted-foreground mt-6" data-testid="text-hero-body">
              From founders with PhDs in AI and leadership experience at global investment banks and JP Morgan, 
              this is not another coding camp. This is an elite mentorship program to build the mindset of a future leader.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          
          <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-10"></div>
            <img 
              src={heroImage} 
              alt="AI Leadership Team Strategy Session"
              className="w-full h-full object-cover"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
