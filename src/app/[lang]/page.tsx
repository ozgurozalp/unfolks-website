import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import {
	FaqJsonLd,
	SoftwareApplicationJsonLd,
} from "@/components/structured-data";

export default function Home() {
	return (
		<>
			<SoftwareApplicationJsonLd />
			<FaqJsonLd />
			<Hero />
			<Features />
			<HowItWorks />
			<Testimonials />
			<Faq />
			<Cta />
		</>
	);
}
