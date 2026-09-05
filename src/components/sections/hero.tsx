import Image from "next/image";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { ChromeIcon } from "@/components/icons";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ExtensionPreview } from "@/components/sections/extension-preview";
import { siteConfig, testimonials } from "@/lib/site";

export function Hero() {
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
								Free forever · No password required
							</span>
						</Reveal>

						<Reveal delay={80}>
							<h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl 2xl:text-7xl">
								See who doesn&apos;t{" "}
								<span className="text-gradient">follow you back</span> on
								Instagram
							</h1>
						</Reveal>

						<Reveal delay={160}>
							<p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:max-w-2xl 2xl:text-xl">
								Unfolks compares your followers and following lists right inside
								your browser, flags every account that never followed back, and
								lets you unfollow them in bulk.
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
										Add to Chrome — it&apos;s free
									</a>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="w-full sm:w-auto"
								>
									<a href="#how-it-works">
										How it works
										<ArrowRight />
									</a>
								</Button>
							</div>
						</Reveal>

						<Reveal delay={320}>
							<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
								<div className="flex -space-x-2.5">
									{testimonials.map((person) => (
										<Image
											key={person.author}
											src={person.image}
											alt={person.author}
											width={96}
											height={96}
											className="size-9 rounded-full border-2 border-background object-cover"
										/>
									))}
								</div>
								<div className="text-center sm:text-left">
									<div
										className="flex justify-center gap-0.5 sm:justify-start"
										aria-hidden
									>
										{Array.from({ length: 5 }, (_, index) => (
											<Star
												key={index}
												className="size-4 fill-amber-400 text-amber-400"
											/>
										))}
									</div>
									<p className="mt-1 text-sm text-muted-foreground">
										{siteConfig.rating.value}/5 from{" "}
										{siteConfig.rating.count.toLocaleString("en-US")}+ Instagram
										users
									</p>
								</div>
							</div>
						</Reveal>
					</div>

					<Reveal delay={200} className="flex justify-center lg:justify-end">
						<div className="relative w-full max-w-100">
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
