import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Guides and tips on managing your Instagram followers, cleaning up your following list, and getting more out of Unfolks.",
	alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
	const posts = await getAllPosts();

	return (
		<div className="container-page py-16 sm:py-20">
			<header className="mx-auto max-w-2xl text-center">
				<span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
					Blog
				</span>
				<h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
					Instagram, minus the guesswork
				</h1>
				<p className="mt-4 text-lg text-muted-foreground">
					Practical writing on followers, unfollowing, and keeping your account
					healthy.
				</p>
			</header>

			{posts.length === 0 ? (
				<p className="mt-16 text-center text-muted-foreground">
					No posts published yet — check back soon.
				</p>
			) : (
				<div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{posts.map((post) => (
						<article
							key={post.slug}
							className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 dark:hover:border-brand-800"
						>
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<time dateTime={post.frontmatter.date.toISOString()}>
									{formatDate(post.frontmatter.date)}
								</time>
								<span aria-hidden>·</span>
								<span>{post.readingMinutes} min read</span>
							</div>

							<h2 className="mt-3 text-xl font-semibold leading-snug">
								<Link
									href={`/blog/${post.slug}`}
									className="before:absolute before:inset-0 before:rounded-3xl"
								>
									{post.frontmatter.title}
								</Link>
							</h2>

							{post.frontmatter.summary && (
								<p className="mt-3 line-clamp-4 leading-relaxed text-muted-foreground">
									{post.frontmatter.summary}
								</p>
							)}

							<div className="mt-6 flex flex-wrap items-center gap-2 pt-0">
								{post.frontmatter.tags.slice(0, 3).map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
									>
										{tag}
									</span>
								))}
								<ArrowUpRight className="ml-auto size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600 dark:group-hover:text-brand-400" />
							</div>
						</article>
					))}
				</div>
			)}
		</div>
	);
}
