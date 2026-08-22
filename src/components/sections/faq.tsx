import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/site";

export function Faq() {
	return (
		<section
			id="faq"
			className="scroll-mt-24 border-t border-border bg-surface py-20 sm:py-28"
		>
			<div className="mx-auto max-w-4xl px-4 sm:px-6">
				<Reveal className="text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Frequently asked questions
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Everything people usually want to know before installing.
					</p>
				</Reveal>

				<Reveal delay={100}>
					<Accordion type="single" collapsible className="mt-12 space-y-3">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`faq-${index}`}>
								<AccordionTrigger>{faq.question}</AccordionTrigger>
								<AccordionContent>{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</Reveal>
			</div>
		</section>
	);
}
