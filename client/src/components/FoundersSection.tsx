import drQiuImage from '@assets/generated_images/Dr._Qiu_professional_headshot_a178da88.png';
import miaLiuImage from '@assets/generated_images/Mia_Liu_professional_headshot_e31e2e33.png';

export default function FoundersSection() {
  const founders = [
    {
      image: drQiuImage,
      name: "Dr. Qiu Yihui",
      bio: "Machine learning Ph.D., MBA, top investment banks for 7 years. Studied/Worked in China, Singapore and Japan.",
      isCircular: true
    },
    {
      image: miaLiuImage,
      name: "Mia Liu",
      bio: "10+ years data and AI product manager and team manager with JP Morgan and a premier Singaporean global investment firm. Studied/Worked in China, Singapore and France.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="text-center" data-testid={`card-founder-${index}`}>
              <img 
                src={founder.image} 
                alt={founder.name}
                className={`${founder.isCircular ? 'rounded-full' : 'rounded-lg'} object-cover w-40 h-40 mx-auto border-4 border-border`}
                data-testid={`img-founder-${index}`}
              />
              <h3 className="text-xl font-bold text-foreground mt-4" data-testid={`text-founder-name-${index}`}>
                {founder.name}
              </h3>
              <p className="text-muted-foreground mt-2" data-testid={`text-founder-bio-${index}`}>
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
