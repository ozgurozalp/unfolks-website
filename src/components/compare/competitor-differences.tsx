import type { LucideIcon } from "lucide-react";

/**
 * "Where they differ" as plain cards: icon, title and text. Used by the
 * comparison pages that don't need the illustrated bento.
 */
export function CompetitorDifferences({
	items,
	icons,
}: {
	items: readonly { title: string; text: string }[];
	/** One icon per item, in the same order. */
	icons: readonly LucideIcon[];
}) {
	return (
		<div className="grid gap-4 md:grid-cols-2">
			{items.map(({ title, text }, index) => {
				const Icon = icons[index % icons.length];
				return (
					<article
						key={title}
						className="flex flex-col rounded-3xl border border-border bg-card p-7"
					>
						<span className="grid size-10 place-items-center rounded-xl border border-border bg-background text-brand-600 dark:text-brand-400">
							<Icon className="size-5" aria-hidden />
						</span>
						<h3 className="mt-4 text-lg font-semibold">{title}</h3>
						<p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
					</article>
				);
			})}
		</div>
	);
}
