import Image from "next/image";
import { Quote, Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { intlLocale } from "@/i18n/config";
import { format } from "@/i18n/format";
import { getDictionary, getLocale } from "@/i18n/server";
import { siteConfig, testimonialPeople } from "@/lib/site";

/**
 * Three quotes in one hairline-divided frame (after the 7ovr
 * "Testimonials 1" layout) instead of three loose cards.
 */
export async function Testimonials() {
	const [{ testimonials }, locale] = await Promise.all([
		getDictionary(),
		getLocale(),
	]);

	return (
		<section className="py-20 sm:py-28">
			<div className="container-page">
				<Reveal className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
						{testimonials.heading}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						{format(testimonials.intro, {
							count: siteConfig.chromeStore.userCount.toLocaleString(
								intlLocale[locale],
							),
						})}
					</p>
				</Reveal>

				<Reveal delay={100}>
					<div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
						{testimonialPeople.map((person, index) => {
							const testimonial = { ...person, ...testimonials.items[index] };
							return (
								<figure
									key={testimonial.author}
									className="flex flex-col bg-card p-8 transition-colors hover:bg-surface"
								>
									<div className="flex items-center justify-between">
										<Quote
											aria-hidden
											className="size-8 fill-brand-500/15 text-brand-500/40"
										/>
										<div className="flex gap-0.5" aria-hidden>
											{Array.from({ length: 5 }, (_, star) => (
												<Star
													key={star}
													className="size-4 fill-amber-400 text-amber-400"
												/>
											))}
										</div>
									</div>
									<blockquote className="mt-6 flex-1 text-[1.05rem] leading-relaxed">
										&ldquo;{testimonial.quote}&rdquo;
									</blockquote>
									<figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
										<Image
											src={testimonial.image}
											alt=""
											width={96}
											height={96}
											className="size-11 rounded-full border border-border object-cover"
										/>
										<div>
											<div className="font-semibold">{testimonial.author}</div>
											<div className="text-sm text-muted-foreground">
												{testimonial.role}
											</div>
										</div>
									</figcaption>
								</figure>
							);
						})}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
