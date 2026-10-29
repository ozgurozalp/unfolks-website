import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getDictionary, getLocale } from "@/i18n/server";
import { localizedPath } from "@/i18n/urls";

export default async function NotFound() {
	const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

	return (
		<div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
			<span className="text-7xl font-bold text-gradient">404</span>
			<h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
				{dict.notFound.title}
			</h1>
			<p className="mt-3 text-muted-foreground">{dict.notFound.text}</p>
			<div className="mt-8 flex flex-wrap justify-center gap-3">
				<Button asChild>
					<Link href={localizedPath(locale, "/")}>{dict.notFound.home}</Link>
				</Button>
				<Button asChild variant="outline">
					<Link href={localizedPath(locale, "/blog")}>
						{dict.notFound.blog}
					</Link>
				</Button>
			</div>
		</div>
	);
}
