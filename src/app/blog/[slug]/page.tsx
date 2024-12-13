import { posts } from "@/collections";
import { Metadata, ResolvingMetadata } from "next";
import { dateFormatter } from "@/lib/utils";

export async function generateStaticParams() {
	const allPosts = await posts.getEntries();
	return allPosts.map((post) => ({ slug: post.getName() }));
}

type Props = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const post = await posts.getFileOrThrow((await params).slug, "mdx");
	const frontmatter = await post.getExportValueOrThrow("frontmatter");

	const previousImages = (await parent).openGraph?.images || [];
	const previousTwitterImages = (await parent).twitter?.images || [];

	return {
		title: frontmatter.title,
		description: frontmatter.summary,
		openGraph: {
			title: frontmatter.title,
			description: frontmatter.summary,
			images: previousImages,
		},
		twitter: {
			title: frontmatter.title,
			description: frontmatter.summary,
			images: previousTwitterImages,
		},
	};
}

export default async function Page({ params }: Props) {
	const post = await posts.getFileOrThrow((await params).slug, "mdx");
	const frontmatter = await post.getExportValueOrThrow("frontmatter");
	const formattedDate = dateFormatter.format(frontmatter.date);
	const Content = await post.getExportValueOrThrow("default");

	return (
		<main className="container mx-auto p-4">
			<div className="max-w-3xl space-y-4 mx-auto mb-4">
				<h1 className="text-[#111827] font-bold text-2xl sm:text-4xl text-pretty">
					{frontmatter.title}
				</h1>
				<time>{formattedDate}</time>
			</div>
			<div className="prose max-w-3xl mx-auto lg:prose-xl">
				<Content />
			</div>
		</main>
	);
}
