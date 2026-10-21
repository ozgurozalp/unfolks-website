import { Hero } from "@/components/sections/hero";
import { Browsers } from "@/components/sections/browsers";
import { Stats } from "@/components/sections/stats";
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
			<Browsers />
			<Features />
			<HowItWorks />
			<Stats />
			<Testimonials />
			<Faq />
			<Cta />
		</>
	);
}
