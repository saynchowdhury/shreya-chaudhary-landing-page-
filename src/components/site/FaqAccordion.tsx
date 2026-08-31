import type { Faq } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border">
          <AccordionTrigger className="py-6 text-left font-display text-lg text-charcoal hover:no-underline md:text-xl">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl pb-7 text-base leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
