import Image from "next/image";
import { Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { siteConfig, testimonials } from "@/lib/site";

export function Testimonials() {
	return (
		<section className="py-20 sm:py-28">
			<div className="container-page">
				<Reveal className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Loved by Instagram users
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						{siteConfig.rating.count.toLocaleString("en-US")}+ people use
						Unfolks to keep their following list honest.
					</p>
				</Reveal>

				<div className="mt-14 grid gap-4 md:grid-cols-3">
					{testimonials.map((testimonial, index) => (
						<Reveal key={testimonial.author} delay={index * 80}>
							<figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
								<div className="flex gap-0.5" aria-hidden>
									{Array.from({ length: 5 }, (_, star) => (
										<Star
											key={star}
											className="size-4 fill-amber-400 text-amber-400"
										/>
									))}
								</div>
								<blockquote className="mt-4 flex-1 text-[1.05rem] leading-relaxed">
									&ldquo;{testimonial.quote}&rdquo;
								</blockquote>
								<figcaption className="mt-6 flex items-center gap-3">
									<Image
										src={testimonial.image}
										alt=""
										width={96}
										height={96}
										className="size-11 rounded-full object-cover"
									/>
									<div>
										<div className="font-semibold">{testimonial.author}</div>
										<div className="text-sm text-muted-foreground">
											{testimonial.role}
										</div>
									</div>
								</figcaption>
							</figure>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
