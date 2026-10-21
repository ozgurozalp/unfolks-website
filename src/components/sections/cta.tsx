import { ChromeIcon } from "@/components/icons";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/i18n/server";
import { siteConfig } from "@/lib/site";

export async function Cta() {
	const dict = await getDictionary();

	return (
		<section className="py-20 sm:py-28">
			<Reveal className="container-page">
				<div className="relative overflow-hidden rounded-4xl bg-brand-gradient px-6 py-16 text-center sm:px-12">
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 bg-dot-grid text-white/25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-white/10 blur-2xl"
					/>

					<div className="relative">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							{dict.cta.heading}
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
							{dict.cta.text}
						</p>
						<Button
							asChild
							size="lg"
							variant="solid"
							className="mt-8 bg-white text-brand-700 shadow-xl hover:bg-white/90 dark:bg-white dark:text-brand-700"
						>
							<a
								href={siteConfig.chromeStoreUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ChromeIcon />
								{dict.nav.addToChromeFree}
							</a>
						</Button>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
