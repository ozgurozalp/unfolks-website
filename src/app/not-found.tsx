import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
			<span className="text-7xl font-bold text-gradient">404</span>
			<h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
				This page doesn&apos;t follow us back
			</h1>
			<p className="mt-3 text-muted-foreground">
				The page you were looking for doesn&apos;t exist or has moved.
			</p>
			<div className="mt-8 flex flex-wrap justify-center gap-3">
				<Button asChild>
					<Link href="/">Back to home</Link>
				</Button>
				<Button asChild variant="outline">
					<Link href="/blog">Read the blog</Link>
				</Button>
			</div>
		</div>
	);
}
