import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { localizedPath } from "@/i18n/urls";
import type { Post } from "@/lib/posts";

/** Same-language guides for the post the reader just finished. */
export function PostRelatedGuides({
	heading,
	posts,
}: {
	heading: string;
	posts: readonly Post[];
}) {
	return (
		<nav aria-labelledby="related-guides" className="mx-auto mt-16 max-w-3xl">
			<h2 id="related-guides" className="text-2xl font-bold tracking-tight">
				{heading}
			</h2>
			<ul role="list" className="mt-5 grid gap-3 sm:grid-cols-2">
				{posts.map((post) => (
					<li key={post.slug}>
						<Link
							href={localizedPath(post.frontmatter.lang, `/blog/${post.slug}`)}
							className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-brand-300 dark:hover:border-brand-800"
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
		</nav>
	);
}
