import Link from "next/link";

import { Logo } from "@/components/logo";
import { getDictionary } from "@/i18n/server";
import { comparePage, siteConfig } from "@/lib/site";

export async function SiteFooter() {
	const dict = await getDictionary();
	const productLinks = [
		{ href: "/#features", label: dict.nav.features },
		{ href: "/#how-it-works", label: dict.nav.howItWorks },
		{ href: "/#faq", label: dict.nav.faq },
		{
			href: siteConfig.chromeStoreUrl,
			label: dict.footer.chromeStore,
			external: true,
		},
	];
	const resourceLinks = [
		{ href: "/blog", label: dict.nav.blog },
		{ href: comparePage.path, label: dict.footer.compare },
		{ href: "/privacy-policy", label: dict.footer.privacy },
		{
			href: `mailto:${siteConfig.author.email}`,
			label: dict.footer.contact,
			external: true,
		},
	];

	return (
		<footer className="mt-auto border-t border-border bg-surface">
			<div className="container-page py-14">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
					<div className="lg:col-span-2">
						<Link href="/" className="inline-flex items-center gap-2">
							<Logo className="h-8" />
							<span className="text-lg font-semibold tracking-tight">
								{siteConfig.name}
							</span>
						</Link>
						<p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
							{dict.footer.blurb}
						</p>
					</div>

					<FooterColumn title={dict.footer.product} links={productLinks} />
					<FooterColumn title={dict.footer.resources} links={resourceLinks} />
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
					<p>
						© {new Date().getFullYear()} {siteConfig.name}. {dict.footer.rights}
					</p>
					<p>
						{dict.footer.builtBy}{" "}
						<a
							href={siteConfig.author.url}
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-foreground underline-offset-4 hover:underline"
						>
							{siteConfig.author.name}
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}

interface FooterColumnProps {
	title: string;
	links: readonly { href: string; label: string; external?: boolean }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
	return (
		<div>
			<h2 className="text-sm font-semibold uppercase tracking-wider">
				{title}
			</h2>
			<ul role="list" className="mt-4 space-y-2.5">
				{links.map((link) => (
					<li key={link.href}>
						{link.external ? (
							<a
								href={link.href}
								target={link.href.startsWith("mailto:") ? undefined : "_blank"}
								rel="noopener noreferrer"
								className="text-muted-foreground transition-colors hover:text-foreground"
							>
								{link.label}
							</a>
						) : (
							<Link
								href={link.href}
								className="text-muted-foreground transition-colors hover:text-foreground"
							>
								{link.label}
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
