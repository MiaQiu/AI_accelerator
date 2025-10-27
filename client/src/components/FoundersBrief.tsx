import drQiuImage from "@assets/generated_images/Dr._Qiu_professional_headshot_a178da88.png";
import miaLiuImage from "@assets/generated_images/Mia_Liu_professional_headshot_e31e2e33.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FoundersBrief() {
  const founders = [
    {
      image: drQiuImage,
      name: "Dr. Qiu Yihui",
      title: "AI PhD | MBA | Ex-Credit Suisse & Sumitomo Mitsui",
      brief: "7 years leading AI transformation at top financial institutions. PhD in AI from NTU.",
      isCircular: true,
    },
    {
      image: miaLiuImage,
      name: "Mia Liu",
      title: "Head of AI Products | Ex-Temasek, Ex-Credit Suisse, Ex-JP Morgan",
      brief: "10+ years leading AI/GenAI product strategy across Singapore, China, and France.",
      isCircular: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Led by Real-World AI & Finance Leaders
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          We aren't career academics. We come from the world you are preparing your child for.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-8">
          {founders.map((founder, index) => (
            <div key={index} className="text-center">
              <img
                src={founder.image}
                alt={founder.name}
                className={`${founder.isCircular ? "rounded-full" : "rounded-lg"} object-cover w-32 h-32 mx-auto border-4 border-border`}
              />
              <h3 className="text-xl font-bold text-foreground mt-4">
                {founder.name}
              </h3>
              <p className="text-sm text-primary/80 font-medium mt-2">
                {founder.title}
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                {founder.brief}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/about">
            <Button variant="outline" size="lg">
              Meet the Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
