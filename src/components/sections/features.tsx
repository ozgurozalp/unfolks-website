import {
	EyeOff,
	Gauge,
	ListFilter,
	Search,
	ShieldCheck,
	Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/reveal";

interface Feature {
	icon: LucideIcon;
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		icon: Search,
		title: "Smart detection",
		description:
			"Cross-references your full followers and following lists and gives you an exact count of who never followed back.",
	},
	{
		icon: Zap,
		title: "Bulk unfollow",
		description:
			"Select as many accounts as you like and clear them in one batch, instead of tapping through profiles one at a time.",
	},
	{
		icon: ShieldCheck,
		title: "Safe by design",
		description:
			"Actions are paced to stay inside Instagram's normal limits, so your account is never flagged for automation.",
	},
	{
		icon: EyeOff,
		title: "No password, ever",
		description:
			"Unfolks uses the Instagram session already open in your browser. There is no login form and no account to create.",
	},
	{
		icon: ListFilter,
		title: "Verified or normal",
		description:
			"Split non-followers into verified and normal accounts, or search by handle to find one specific profile.",
	},
	{
		icon: Gauge,
		title: "Instant results",
		description:
			"The comparison runs locally in your browser, so there's no upload, no queue, and nothing to wait for.",
	},
];

export function Features() {
	return (
		<section id="features" className="scroll-mt-24 py-20 sm:py-28">
			<div className="container-page">
				<Reveal className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Everything you need to clean up your following
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						No dashboards, no subscriptions, no data collection. Just the one
						job, done well.
					</p>
				</Reveal>

				<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((feature, index) => (
						<Reveal key={feature.title} delay={index * 60}>
							<article className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:border-brand-800">
								<div className="inline-flex rounded-2xl bg-brand-gradient p-[1.5px]">
									<span className="grid size-11 place-items-center rounded-[calc(1rem-1px)] bg-card transition-colors group-hover:bg-transparent">
										<feature.icon className="size-5 text-brand-600 transition-colors group-hover:text-white dark:text-brand-400" />
									</span>
								</div>
								<h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
								<p className="mt-2 leading-relaxed text-muted-foreground">
									{feature.description}
								</p>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
