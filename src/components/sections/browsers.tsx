import { BraveLogo } from "@/components/logos/brave";
import { ChromeLogo } from "@/components/logos/chrome";
import { MicrosoftEdgeLogo } from "@/components/logos/microsoft-edge";
import { getDictionary } from "@/i18n/server";

/** Browsers with extension side panels, where Unfolks runs. */
const browsers = [
	{ name: "Chrome", Logo: ChromeLogo },
	{ name: "Edge", Logo: MicrosoftEdgeLogo },
	{ name: "Brave", Logo: BraveLogo },
];

/** A quiet strip under the hero naming the browsers Unfolks works in. */
export async function Browsers() {
	const { browsers: text } = await getDictionary();

	return (
		<section aria-label={text.label} className="border-y border-border">
			<div className="container-page flex flex-col items-center justify-center gap-x-10 gap-y-4 py-7 sm:flex-row">
				<p className="text-sm font-medium text-muted-foreground">
					{text.label}
				</p>
				<ul role="list" className="flex items-center gap-8 sm:gap-10">
					{browsers.map(({ name, Logo }) => (
						<li
							key={name}
							className="flex items-center gap-2.5 text-base font-semibold text-foreground/80"
						>
							<Logo title="" className="size-7" />
							{name}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
