import { ComparisonTable } from "@/components/arc/blocks/comparison-table/comparison-table";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { siteConfig } from "@/lib/site";

const UNFOLKS = "unfolks";
const SCRIPT = "script";

/** The uiarc comparison block, filled from the page dictionary. */
export function ScriptComparison({ text }: { text: Dictionary["compare"]["table"] }) {
	return (
		<ComparisonTable
			title={text.title}
			description={text.description}
			labels={text.labels}
			columns={[
				{
					id: UNFOLKS,
					name: siteConfig.name,
					caption: text.unfolksCaption,
					highlight: true,
				},
				{ id: SCRIPT, name: text.scriptName, caption: text.scriptCaption },
			]}
			sections={text.sections.map((section) => ({
				id: section.id,
				title: section.title,
				rows: section.rows.map((row) => ({
					id: row.id,
					feature: row.feature,
					hint: "hint" in row ? row.hint : undefined,
					values: { [UNFOLKS]: row.unfolks, [SCRIPT]: row.script },
				})),
			}))}
			cta={{
				label: text.cta,
				href: siteConfig.chromeStoreUrl,
				external: true,
			}}
			// The site header is sticky; keep the table header just below it.
			stickyTop="var(--site-header-height)"
		/>
	);
}
