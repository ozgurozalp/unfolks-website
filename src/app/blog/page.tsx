import { posts } from "@/collections";
import Link from "next/link";
import { dateFormatter } from "@/lib/utils";

export default async function Page() {
	const allPosts = await posts.getEntries();

	return (
		<section className="container mx-auto p-4">
			<div className="flex flex-wrap">
				<div className="w-full px-4">
					<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
						<h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
							Our Recent Blogs
						</h2>
					</div>
				</div>
			</div>

			<div className="gap-4 justify-center flex flex-wrap">
				{allPosts.map(async (post) => {
					const path = post.getPath();
					const frontmatter = await post.getExportValueOrThrow("frontmatter");

					return (
						<BlogCard
							key={path}
							slug={path}
							date={dateFormatter.format(frontmatter.date)}
							cardTitle={frontmatter.title}
							cardDescription={frontmatter.summary}
						/>
					);
				})}
			</div>
		</section>
	);
}

const BlogCard = ({
	date,
	cardTitle,
	cardDescription,
	slug,
}: {
	date: string;
	cardTitle: string;
	cardDescription?: string;
	slug: string;
}) => {
	return (
		<>
			<div className="bg-white w-full p-4 shadow rounded-lg md:w-1/2 lg:w-1/3">
				<div className="flex h-full flex-col">
					<h3>
						<Link
							href={`/blog${slug}`}
							className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
						>
							{cardTitle}
						</Link>
					</h3>
					<p className="text-base mb-4 text-body-color dark:text-dark-6">
						{cardDescription}
					</p>
					{date && (
						<div className="mt-auto flex justify-end">
							<time className=" w-fit inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
								{date}
							</time>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
