import drQiuImage from "@assets/generated_images/Dr._Qiu_professional_headshot_a178da88.png";
import miaLiuImage from "@assets/generated_images/Mia_Liu_professional_headshot_e31e2e33.png";

export default function FoundersSection() {
  const founders = [
    {
      image: drQiuImage,
      name: "Dr. Qiu Yihui",
      title:
        "AI PhD (NTU) | Ex-Credit Suisse & Sumitomo Mitsui Banking Corporation",
      bioPoints: [
        "7 years leading AI and digital transformation at Credit Suisse and Sumitomo Mitsui Banking Corporation",
        "PhD in Machine Learning from NTU with MBA specialization",
        "Published in top-tier ML conferences (ICLR, ICPR) and journals (Neurocomputing)",
        "Drove enterprise-wide AI adoption strategies, translating cutting-edge research into business solutions",
        "Bridged the gap between technical teams and C-suite executives",
      ],
      quote:
        "I've interviewed hundreds of graduates for analyst and associate roles. The ones who succeed aren't always the straight-A students—they're the ones who can think critically, adapt quickly, and communicate ideas clearly under pressure.",
      isCircular: true,
    },
    {
      image: miaLiuImage,
      name: "Mia Liu",
      title:
        "Head of AI Products | Ex-Temasek, Ex-Credit Suisse, Ex-JP Morgan & BNP Paribas",
      bioPoints: [
        "10+ years leading AI/GenAI product strategy and cross-functional teams",
        "Previously headed Business Intelligence for Corporate & Investment Banking at BNP Paribas",
        "Built and scaled AI-driven data platforms across Singapore, China, and France",
        "Served global financial institutions including Temasek, Credit Suisse, and JP Morgan",
        "Specialized in translating complex technology into business impact",
      ],
      quote:
        "In interviews, I can tell within 5 minutes if a candidate has real-world problem-solving skills or just memorized textbook answers. This program teaches the former.",
      isCircular: false,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-foreground mb-4"
          data-testid="text-founders-headline"
        >
          Mentorship from Real-World AI & Finance Leaders
        </h2>
        <p
          className="text-xl text-center text-muted-foreground mb-12"
          data-testid="text-founders-subheadline"
        >
          We aren't career academics. We come from the world you are preparing
          your child for.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`card-founder-${index}`}
            >
              <img
                src={founder.image}
                alt={founder.name}
                className={`${founder.isCircular ? "rounded-full" : "rounded-lg"} object-cover w-32 h-32 mx-auto border-4 border-border`}
                data-testid={`img-founder-${index}`}
              />
              <h3
                className="text-xl font-bold text-foreground mt-4"
                data-testid={`text-founder-name-${index}`}
              >
                {founder.name}
              </h3>
              <p className="text-sm text-primary/80 font-medium mt-2">
                {founder.title}
              </p>
              <ul
                className="mt-3 space-y-2 text-left"
                data-testid={`text-founder-bio-${index}`}
              >
                {founder.bioPoints.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="text-primary mr-2 mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-foreground italic text-left">
                  "{founder.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
