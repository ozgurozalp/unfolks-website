import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { getDictionary, getLocale } from "@/i18n/server";
import { localizedPath } from "@/i18n/urls";
import { getGuidePosts } from "@/lib/guides";

/** Homepage section linking to the current language's how-to posts. */
export async function Guides() {
	const locale = await getLocale();
	const [{ guides }, posts] = await Promise.all([
		getDictionary(),
		getGuidePosts(locale),
	]);

	return (
		<section id="guides" className="border-t border-border py-20 sm:py-28">
			<div className="container-page">
				<Reveal className="mx-auto max-w-2xl text-center">
					<span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
						{guides.eyebrow}
					</span>
					<h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
						{guides.heading}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground text-pretty">
						{guides.intro}
					</p>
				</Reveal>

				<ul
					role="list"
					className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
				>
					{posts.map((post) => (
						<li key={post.slug}>
							<Link
								href={localizedPath(
									post.frontmatter.lang,
									`/blog/${post.slug}`,
								)}
								className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:border-brand-800"
							>
								<h3 className="text-lg font-semibold leading-snug">
									{post.frontmatter.title}
								</h3>
								{post.frontmatter.summary && (
									<p className="mt-3 line-clamp-3 leading-relaxed text-muted-foreground">
										{post.frontmatter.summary}
									</p>
								)}
								<ArrowUpRight
									aria-hidden
									className="mt-6 size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600 dark:group-hover:text-brand-400"
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

/** Compact related-guide list for the Cobanov comparison page. */
export async function RelatedGuides({
	heading,
	intro,
}: {
	heading: string;
	intro: string;
}) {
	const locale = await getLocale();
	const posts = await getGuidePosts(locale);

	return (
		<section>
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
				{heading}
			</h2>
			<p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
				{intro}
			</p>
			<ul role="list" className="mt-6 grid gap-3 sm:grid-cols-2">
				{posts.map((post) => (
					<li key={post.slug}>
						<Link
							href={localizedPath(
								post.frontmatter.lang,
								`/blog/${post.slug}`,
							)}
							className="group flex items-start justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-brand-300 dark:hover:border-brand-800"
						>
							<span className="font-medium leading-snug">
								{post.frontmatter.title}
							</span>
							<ArrowUpRight
								aria-hidden
								className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600 dark:group-hover:text-brand-400"
							/>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
