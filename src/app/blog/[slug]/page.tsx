import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ChromeIcon } from "@/components/icons";

import { Button } from "@/components/ui/button";
import { ArticleJsonLd } from "@/components/structured-data";
import { getAllPosts, getPost } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = await getPost((await params).slug);

	if (!post) {
		return {};
	}

	const { title, summary, date } = post.frontmatter;
	const canonical = `/blog/${post.slug}`;

	return {
		title,
		description: summary,
		alternates: { canonical },
		openGraph: {
			type: "article",
			title,
			description: summary,
			url: canonical,
			publishedTime: date.toISOString(),
			tags: [...post.frontmatter.tags],
		},
		twitter: { card: "summary_large_image", title, description: summary },
	};
}

export default async function BlogPostPage({ params }: Props) {
	const post = await getPost((await params).slug);

	if (!post) {
		notFound();
	}

	const { Content, frontmatter, readingMinutes } = post;

	return (
		<article className="px-4 py-14 sm:px-6 sm:py-20">
			<ArticleJsonLd
				title={frontmatter.title}
				description={frontmatter.summary}
				datePublished={frontmatter.date.toISOString()}
				url={`${siteConfig.url}/blog/${post.slug}`}
			/>

			<header className="mx-auto max-w-3xl">
				<Link
					href="/blog"
					className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
				>
					<ArrowLeft className="size-4" />
					All posts
				</Link>

				<h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
					{frontmatter.title}
				</h1>

				<div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
					<time dateTime={frontmatter.date.toISOString()}>
						{formatDate(frontmatter.date)}
					</time>
					<span aria-hidden>·</span>
					<span>{readingMinutes} min read</span>
					{frontmatter.tags.length > 0 && (
						<ul className="flex flex-wrap gap-2">
							{frontmatter.tags.map((tag) => (
								<li
									key={tag}
									className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium"
								>
									{tag}
								</li>
							))}
						</ul>
					)}
				</div>
			</header>

			<div className="prose prose-neutral mx-auto mt-10 max-w-3xl dark:prose-invert prose-headings:tracking-tight prose-a:text-brand-600 prose-a:underline-offset-4 hover:prose-a:text-brand-700 dark:prose-a:text-brand-400 prose-img:rounded-2xl lg:prose-lg">
				<Content />
			</div>

			<aside className="mx-auto mt-16 max-w-3xl">
				<div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-surface p-8 text-center sm:flex-row sm:text-left">
					<div className="flex-1">
						<h2 className="text-lg font-semibold">
							Curious who doesn&apos;t follow you back?
						</h2>
						<p className="mt-1.5 text-muted-foreground">
							Unfolks shows you in under a minute. Free, no password needed.
						</p>
					</div>
					<Button asChild className="shrink-0">
						<a
							href={siteConfig.chromeStoreUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ChromeIcon />
							Add to Chrome
						</a>
					</Button>
				</div>
			</aside>
		</article>
	);
}
