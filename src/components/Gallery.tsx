
import React from 'react';
import { FadeIn } from './ui/Motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqItems = [
  {
    id: "1",
    title: "Why invest in Dominican Republic real estate?",
    content:
      "The Dominican Republic offers excellent investment opportunities with its growing tourism industry, stable economy, and attractive property prices. You'll benefit from rental income potential, property appreciation, and a Caribbean lifestyle.",
  },
  {
    id: "2",
    title: "What are the requirements for foreign property ownership?",
    content:
      "Foreign investors have the same property rights as Dominican citizens. You only need a valid passport and tax ID number (RNC) to purchase property. There are no restrictions on repatriation of profits.",
  },
  {
    id: "3",
    title: "What are the best areas for investment?",
    content:
      "Popular areas include Punta Cana for beach tourism, Santo Domingo for urban living, and Las Terrenas for luxury villas. Each area offers unique benefits depending on your investment goals.",
  },
  {
    id: "4",
    title: "How does the buying process work?",
    content:
      "The process involves property selection, due diligence, purchase agreement signing, and title transfer. Our team handles legal requirements, ensuring a smooth transaction from start to finish.",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-neutral-light">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Dominican Beauty</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about investing in Dominican Republic real estate
            </p>
          </div>
        </FadeIn>

        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqItems.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="rounded-lg border bg-background px-4 py-1"
              >
                <AccordionTrigger className="justify-start gap-3 py-2 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
