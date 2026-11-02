import { Plus } from "lucide-react";

import type { PostFaq } from "@/lib/post-faqs";

/**
 * The same questions the FAQPage JSON-LD describes. Answers stay in the
 * HTML, inside a disclosure, so the markup matches what a reader can open.
 */
export function BlogPostFaq({
	heading,
	items,
}: {
	heading: string;
	items: readonly PostFaq[];
}) {
	return (
		<section aria-labelledby="post-faq" className="mx-auto mt-16 max-w-3xl">
			<h2 id="post-faq" className="text-2xl font-bold tracking-tight">
				{heading}
			</h2>
			<div className="mt-5 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
				{items.map((item) => (
					<details
						key={item.question}
						name="post-faq"
						className="faq-item px-6"
					>
						<summary className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-primary">
							<h3 className="text-base font-semibold leading-snug">
								{item.question}
							</h3>
							<Plus
								aria-hidden
								className="size-5 shrink-0 text-muted-foreground"
							/>
						</summary>
						<p className="pb-5 pr-8 text-[0.95rem] leading-relaxed text-muted-foreground">
							{item.answer}
						</p>
					</details>
				))}
			</div>
		</section>
	);
}
