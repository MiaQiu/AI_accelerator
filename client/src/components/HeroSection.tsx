import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/team-strategy-session-stockcake_1761031746138.jpg";

export default function HeroSection() {
  const scrollToWebinar = () => {
    document.getElementById("webinar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1
              className="text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight"
              data-testid="text-hero-headline"
            >
              Good Grades Aren't Enough Anymore.
            </h1>
            <h2
              className="text-2xl text-muted-foreground mt-4"
              data-testid="text-hero-subheadline"
            >
              Is Your Child Future-Proof? We mentor students to lead in the age
              of AI.
            </h2>
            <p
              className="text-lg text-muted-foreground mt-6"
              data-testid="text-hero-body"
            >
              {/* From founders with PhDs in AI and leadership experience at global
              investment banks and JP Morgan, this is not another coding camp.
              This is an elite mentorship program to build the mindset of a
              future leader. */}
              Forget boring lectures. In 5 days, students will tackle real-world challenges, 
              advised by mentors with PhDs in AI and leadership experience from global firms and business schools.
              
              We don't teach students what to remember. We teach them how to think—like an innovator, a CEO, and a problem-solver.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/program">
                <Button
                  size="lg"
                  data-testid="button-hero-details"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                >
                  Explore the 5-Day Sprint
                </Button>
              </Link>

              {/* <Button
                size="lg"
                variant="outline"
                onClick={scrollToWebinar}
                data-testid="button-hero-register"
              >
                Register for Webinar
              </Button> */}
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/5 to-transparent z-10"></div>
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
