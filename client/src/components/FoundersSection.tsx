import drQiuImage from '@assets/generated_images/Dr._Qiu_professional_headshot_a178da88.png';
import miaLiuImage from '@assets/generated_images/Mia_Liu_professional_headshot_e31e2e33.png';

export default function FoundersSection() {
  const founders = [
    {
      image: drQiuImage,
      name: "Dr. Qiu Yihui",
      title: "Machine Learning PhD | Ex-Investment Banking Digital Transformation Leader (7 years)",
      bio: "Led digital transformation initiatives at global investment banks across China, Singapore, and Japan. PhD in Machine Learning with MBA specialization. Drove enterprise-wide AI adoption strategies, translating cutting-edge technology into business solutions. Bridged the gap between technical teams and C-suite executives—the exact skill of making complex ideas actionable that today's employers demand.",
      quote: "I've interviewed hundreds of graduates. The ones who succeed aren't always the straight-A students—they're the ones who can think critically, adapt quickly, and communicate ideas clearly.",
      isCircular: true
    },
    {
      image: miaLiuImage,
      name: "Mia Liu",
      title: "Lead Product Manager, AI & Data | Ex-BNP Paribas Head of Business Intelligence",
      bio: "Led AI and GenAI product initiatives at premier Singaporean investment firms for 5 years. Previously headed Business Intelligence for Corporate & Investment Banking at BNP Paribas. Decade of experience building data platforms and leading cross-functional teams across Singapore, China, and France. Specialized in translating complex technology into business impact—the exact skill that separates high performers from average graduates.",
      quote: "In interviews, I can tell within 5 minutes if a candidate has real-world problem-solving skills or just memorized textbook answers. This program teaches the former.",
      isCircular: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4" data-testid="text-founders-headline">
          Mentorship from Real-World AI & Finance Leaders
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12" data-testid="text-founders-subheadline">
          We aren't career academics. We come from the world you are preparing your child for.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="text-center" data-testid={`card-founder-${index}`}>
              <img 
                src={founder.image} 
                alt={founder.name}
                className={`${founder.isCircular ? 'rounded-full' : 'rounded-lg'} object-cover w-32 h-32 mx-auto border-4 border-border`}
                data-testid={`img-founder-${index}`}
              />
              <h3 className="text-xl font-bold text-foreground mt-4" data-testid={`text-founder-name-${index}`}>
                {founder.name}
              </h3>
              <p className="text-sm text-primary/80 font-medium mt-2">
                {founder.title}
              </p>
              <p className="text-sm text-muted-foreground mt-3 text-left" data-testid={`text-founder-bio-${index}`}>
                {founder.bio}
              </p>
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
