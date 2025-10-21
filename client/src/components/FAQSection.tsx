import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is this just another coding camp?",
      answer: "No. While coding camps teach you how to use tools, we focus on developing leadership mindset and the 5 irreplaceable human skills: Creativity, Collaboration, Critical Thinking, Adaptability, and Resilience. We teach students to lead AI, not just use it."
    },
    {
      question: "Who is this program for?",
      answer: "This program is designed for ambitious Sec 3 - JC 2 students who want to stand out in university applications and future careers. It's for students who are ready to move beyond grades and build real-world skills and projects."
    },
    {
      question: "My child has no experience with AI. Is that okay?",
      answer: "Absolutely! We designed this program for students at all levels. We'll guide them through using AI tools step-by-step. What matters most is their willingness to learn, adapt, and take on challenges."
    },
    {
      question: "What is the B.U.I.L.D. Framework?",
      answer: "B.U.I.L.D. is our proprietary framework that develops 5 essential skills: Build (Creativity), Unite (Collaboration), Inquire (Critical Thinking), Learn (Adaptability), and Drive (Resilience). These are the skills that will remain valuable regardless of how technology evolves."
    },
    {
      question: "What is the price and what's included?",
      answer: "The regular investment is S$1,988 for the full 5-day program. However, by attending our free webinar, you receive an exclusive S$300 discount, bringing the price to S$1,688. This includes all materials, mentorship from our founders, project support, and access to our expert panel on Demo Day."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12" data-testid="text-faq-headline">
          Your Questions, Answered
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-item-${index}`}>
              <AccordionTrigger data-testid={`accordion-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent data-testid={`accordion-content-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
