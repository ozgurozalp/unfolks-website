import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ChromeIcon } from "@/components/icons";

import { Button } from "@/components/ui/button";
import { ArticleJsonLd } from "@/components/structured-data";
import { intlLocale } from "@/i18n/config";
import { format } from "@/i18n/format";
import { getDictionary, getLocale } from "@/i18n/server";
import { getAllPosts, getPost } from "@/lib/posts";
import { siteConfig, socialImages } from "@/lib/site";
import { formatDate } from "@/lib/utils";

/** Link text to a post's other language, written in that language. */
const READ_IN = { en: "Read in English", tr: "Türkçesini oku" } as const;

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

	const { title, summary, date, lang, translation } = post.frontmatter;
	const canonical = `/blog/${post.slug}`;
	const languages = translation
		? {
				[lang]: canonical,
				[lang === "en" ? "tr" : "en"]: `/blog/${translation}`,
			}
		: undefined;

	return {
		title,
		description: summary,
		alternates: { canonical, languages },
		openGraph: {
			type: "article",
			locale: intlLocale[lang].replace("-", "_"),
			title,
			description: summary,
			url: canonical,
			publishedTime: date.toISOString(),
			tags: [...post.frontmatter.tags],
			images: socialImages.openGraph,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: summary,
			images: socialImages.twitter,
		},
	};
}

export default async function BlogPostPage({ params }: Props) {
	const post = await getPost((await params).slug);

	if (!post) {
		notFound();
	}

	const { Content, frontmatter, readingMinutes } = post;
	const otherLang = frontmatter.lang === "en" ? "tr" : "en";
	const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

	return (
		<article lang={frontmatter.lang} className="px-4 py-14 sm:px-6 sm:py-20">
			<ArticleJsonLd
				title={frontmatter.title}
				description={frontmatter.summary}
				datePublished={frontmatter.date.toISOString()}
				url={`${siteConfig.url}/blog/${post.slug}`}
			/>

			<header className="mx-auto max-w-3xl">
				<div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
					<Link
						href="/blog"
						className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						<ArrowLeft className="size-4" />
						{dict.blog.allPosts}
					</Link>
					{frontmatter.translation && (
						<Link
							href={`/blog/${frontmatter.translation}`}
							hrefLang={otherLang}
							lang={otherLang}
							className="text-sm font-medium text-brand-600 underline-offset-4 hover:underline dark:text-brand-400"
						>
							{READ_IN[otherLang]}
						</Link>
					)}
				</div>

				<h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">
					{frontmatter.title}
				</h1>

				<div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
					<time dateTime={frontmatter.date.toISOString()}>
						{formatDate(frontmatter.date, intlLocale[locale])}
					</time>
					<span aria-hidden>·</span>
					<span>
						{format(dict.blog.readingTime, { minutes: readingMinutes })}
					</span>
					{frontmatter.tags.length > 0 && (
						<ul role="list" className="flex flex-wrap gap-2">
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
						<h2 className="text-lg font-semibold">{dict.blog.ctaHeading}</h2>
						<p className="mt-1.5 text-muted-foreground">{dict.blog.ctaText}</p>
					</div>
					<Button asChild className="shrink-0">
						<a
							href={siteConfig.chromeStoreUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ChromeIcon />
							{dict.nav.addToChrome}
						</a>
					</Button>
				</div>
			</aside>
		</article>
	);
}
