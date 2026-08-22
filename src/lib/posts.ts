import "server-only";

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import type { MDXProps } from "mdx/types";
import { z } from "zod";

const POSTS_DIRECTORY = path.join(process.cwd(), "src", "posts");

const frontmatterSchema = z.object({
	title: z.string().min(1),
	date: z.coerce.date(),
	summary: z.string().optional(),
	tags: z.array(z.string()).default([]),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;

export interface Post {
	slug: string;
	frontmatter: Frontmatter;
	Content: (props: MDXProps) => React.JSX.Element;
	readingMinutes: number;
}

interface PostModule {
	default: (props: MDXProps) => React.JSX.Element;
	frontmatter: unknown;
}

const WORDS_PER_MINUTE = 225;

/** Word count of the article body, with the frontmatter block stripped. */
async function readingMinutesFor(slug: string): Promise<number> {
	const source = await readFile(
		path.join(POSTS_DIRECTORY, `${slug}.mdx`),
		"utf8",
	);
	const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---/, "");
	const words = body.trim().split(/\s+/).filter(Boolean).length;

	return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

async function loadPost(slug: string): Promise<Post> {
	const [mod, readingMinutes] = await Promise.all([
		import(`../posts/${slug}.mdx`) as Promise<PostModule>,
		readingMinutesFor(slug),
	]);
	const parsed = frontmatterSchema.safeParse(mod.frontmatter);

	if (!parsed.success) {
		throw new Error(
			`Invalid frontmatter in src/posts/${slug}.mdx: ${parsed.error.issues
				.map(
					(issue) => `${issue.path.join(".") || "(root)"} — ${issue.message}`,
				)
				.join("; ")}`,
		);
	}

	return {
		slug,
		frontmatter: parsed.data,
		Content: mod.default,
		readingMinutes,
	};
}

export const getPostSlugs = cache(async (): Promise<string[]> => {
	const entries = await readdir(POSTS_DIRECTORY, { withFileTypes: true });

	return entries
		.filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
		.map((entry) => entry.name.replace(/\.mdx$/, ""));
});

/** All posts, newest first. */
export const getAllPosts = cache(async (): Promise<Post[]> => {
	const slugs = await getPostSlugs();
	const posts = await Promise.all(slugs.map(loadPost));

	return posts.sort(
		(a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime(),
	);
});

/** A single post, or `null` when the slug does not resolve to a file. */
export const getPost = cache(async (slug: string): Promise<Post | null> => {
	const slugs = await getPostSlugs();

	if (!slugs.includes(slug)) {
		return null;
	}

	return loadPost(slug);
});
