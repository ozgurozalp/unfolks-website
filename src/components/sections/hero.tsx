import Image from "next/image";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { ChromeIcon } from "@/components/icons";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ExtensionPreview } from "@/components/sections/extension-preview";
import { intlLocale } from "@/i18n/config";
import { format } from "@/i18n/format";
import { getDictionary, getLocale } from "@/i18n/server";
import { chromeStore, siteConfig, testimonialPeople } from "@/lib/site";

/** Store rating as filled stars, including a partial last star. */
function RatingStars({ value }: { value: number }) {
	return (
		<div className="flex justify-center gap-0.5 sm:justify-start" aria-hidden>
			{Array.from({ length: 5 }, (_, index) => {
				const fill = Math.min(1, Math.max(0, value - index));
				return (
					<span key={index} className="relative inline-block size-4">
						<Star className="size-4 text-amber-400/35" />
						<span
							className="absolute inset-y-0 left-0 overflow-hidden"
							style={{ width: `${fill * 100}%` }}
						>
							<Star className="size-4 fill-amber-400 text-amber-400" />
						</span>
					</span>
				);
			})}
		</div>
	);
}

export async function Hero() {
	const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
	const text = dict.hero;

	return (
		<section className="relative overflow-hidden">
			{/* Ambient background */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
			>
				<div className="absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-brand-400/25 blur-[120px] dark:bg-brand-600/20" />
				<div className="absolute -right-32 top-24 size-[32rem] rounded-full bg-accent-500/20 blur-[120px] dark:bg-accent-600/15" />
				<div className="absolute inset-0 bg-dot-grid text-foreground/[0.07] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
			</div>

			<div className="container-page pb-20 pt-14 sm:pt-20 lg:pb-28">
				<div className="grid items-center gap-14 lg:grid-cols-[1fr_minmax(0,30rem)] lg:gap-14 xl:gap-20">
					<div className="text-center lg:text-left">
						<Reveal>
							<span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
								<Sparkles className="size-3.5 text-brand-500" />
								{text.badge}
							</span>
						</Reveal>

						<Reveal delay={80}>
							<h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
								{text.titleBefore}{" "}
								<span className="text-gradient">{text.titleHighlight}</span>{" "}
								{text.titleAfter}
							</h1>
						</Reveal>

						<Reveal delay={160}>
							<p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:max-w-2xl 2xl:text-xl">
								{text.intro}
							</p>
						</Reveal>

						<Reveal delay={240}>
							<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
								<Button asChild size="lg" className="w-full sm:w-auto">
									<a
										href={siteConfig.chromeStoreUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ChromeIcon />
										{dict.nav.addToChromeFree}
									</a>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="w-full sm:w-auto"
								>
									<a href="#how-it-works">
										{text.howItWorks}
										<ArrowRight />
									</a>
								</Button>
							</div>
						</Reveal>

						<Reveal delay={320}>
							<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
								<div className="flex -space-x-2.5">
									{testimonialPeople.map((person) => (
										<Image
											key={person.author}
											src={person.image}
											alt={person.author}
											width={96}
											height={96}
											loading="eager"
											className="size-9 rounded-full border-2 border-background object-cover"
										/>
									))}
								</div>
								<div className="text-center sm:text-left">
									<RatingStars value={chromeStore.ratingValue} />
									<p className="mt-1 text-sm text-muted-foreground">
										{format(text.rating, {
											value: chromeStore.ratingValue.toLocaleString(
												intlLocale[locale],
											),
											users: chromeStore.users.toLocaleString(
												intlLocale[locale],
											),
										})}
									</p>
								</div>
							</div>
						</Reveal>
					</div>

					<Reveal
						delay={200}
						className="flex min-w-0 justify-center lg:justify-end"
					>
						<div className="relative w-full min-w-0 max-w-100">
							<div
								aria-hidden
								className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-15 blur-2xl"
							/>
							<ExtensionPreview className="animate-float motion-reduce:animate-none" />
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
