import { getDictionary } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

function JsonLd({ data }: { data: Record<string, unknown> }) {
	return (
		<script
			type="application/ld+json"
			// The payload is built from local constants, never from user input.
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

export async function SoftwareApplicationJsonLd() {
	const dict = await getDictionary();

	return (
		<JsonLd
			data={{
				"@context": "https://schema.org",
				"@type": "SoftwareApplication",
				name: siteConfig.name,
				description: dict.meta.description,
				url: siteConfig.url,
				applicationCategory: "BrowserApplication",
				operatingSystem: "Chrome, Edge, Brave",
				downloadUrl: siteConfig.chromeStoreUrl,
				offers: {
					"@type": "Offer",
					price: "0",
					priceCurrency: "USD",
				},
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: siteConfig.rating.value,
					ratingCount: siteConfig.rating.count,
					bestRating: 5,
				},
				author: {
					"@type": "Person",
					name: siteConfig.author.name,
					url: siteConfig.author.url,
				},
			}}
		/>
	);
}

interface FaqItem {
	question: string;
	answer: string;
}

/** FAQ rich results. Defaults to the home page FAQ. */
export async function FaqJsonLd({ items }: { items?: readonly FaqItem[] }) {
	const questions = items ?? (await getDictionary()).faq.items;

	return (
		<JsonLd
			data={{
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: questions.map((item) => ({
					"@type": "Question",
					name: item.question,
					acceptedAnswer: { "@type": "Answer", text: item.answer },
				})),
			}}
		/>
	);
}

interface ArticleJsonLdProps {
	title: string;
	description?: string;
	datePublished: string;
	url: string;
}

export function ArticleJsonLd({
	title,
	description,
	datePublished,
	url,
}: ArticleJsonLdProps) {
	return (
		<JsonLd
			data={{
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				headline: title,
				description,
				datePublished,
				url,
				author: {
					"@type": "Person",
					name: siteConfig.author.name,
					url: siteConfig.author.url,
				},
				publisher: {
					"@type": "Organization",
					name: siteConfig.name,
					url: siteConfig.url,
				},
			}}
		/>
	);
}
