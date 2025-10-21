export default function CredibilityBar() {
  const institutions = [
    "GLOBAL INVESTMENT BANKS",
    "JP MORGAN",
    "AI-POWERED PRODUCT LEADERSHIP"
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8" data-testid="text-credibility-heading">
          Our founders' expertise was built at the highest levels of global finance and technology.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {institutions.map((institution, index) => (
            <div 
              key={index}
              className="text-muted-foreground/60 font-semibold text-xs sm:text-sm tracking-wider"
              data-testid={`text-institution-${index}`}
            >
              {institution}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
