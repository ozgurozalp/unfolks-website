import type { Dictionary } from "@/i18n/dictionaries/en";
import { siteConfig } from "@/lib/site";

interface ComparisonTableProps {
	text: Dictionary["compare"];
}

/**
 * A real table for screen readers and search engines. Below `sm` each row
 * becomes a small card: the feature on top, the two answers side by side,
 * each labelled by its column name.
 */
export function ComparisonTable({ text }: ComparisonTableProps) {
	return (
		<table className="w-full border-separate border-spacing-0 text-left text-sm sm:text-base">
			<caption className="sr-only">{text.tableCaption}</caption>
			<thead className="max-sm:sr-only">
				<tr>
					<th scope="col" className="px-4 pb-3 font-medium text-muted-foreground">
						{text.colFeature}
					</th>
					<th scope="col" className="rounded-t-2xl bg-brand-500/10 px-4 py-3 font-semibold text-brand-700 dark:text-brand-300">
						{siteConfig.name}
					</th>
					<th scope="col" className="px-4 pb-3 font-semibold">
						{text.colScript}
					</th>
				</tr>
			</thead>
			<tbody>
				{text.rows.map((row) => (
					<tr
						key={row.label}
						className="max-sm:mb-3 max-sm:grid max-sm:grid-cols-2 max-sm:overflow-hidden max-sm:rounded-2xl max-sm:border max-sm:border-border"
					>
						<th
							scope="row"
							className="border-t border-border px-4 py-3.5 font-medium max-sm:col-span-2 max-sm:border-t-0 max-sm:bg-surface"
						>
							{row.label}
						</th>
						<td
							data-label={siteConfig.name}
							className="border-t border-border bg-brand-500/10 px-4 py-3.5 font-medium max-sm:before:block max-sm:before:text-xs max-sm:before:text-brand-700 max-sm:before:content-[attr(data-label)] dark:max-sm:before:text-brand-300"
						>
							{row.unfolks}
						</td>
						<td
							data-label={text.colScript}
							className="border-t border-border px-4 py-3.5 text-muted-foreground max-sm:before:block max-sm:before:text-xs max-sm:before:content-[attr(data-label)]"
						>
							{row.script}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
