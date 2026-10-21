import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { PromoAd } from "@/components/promo-ad";
import { intlLocale, locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/server";
import { siteConfig, socialImages } from "@/lib/site";

const geistSans = Geist({
	subsets: ["latin", "latin-ext"],
	variable: "--font-geist-sans",
	display: "swap",
});

/** Both languages are prerendered; `proxy.ts` picks one per request. */
export function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
	const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);
	const title = `${siteConfig.name} — ${dict.meta.tagline}!`;

	return {
		metadataBase: new URL(siteConfig.url),
		title: {
			default: title,
			template: `%s — ${siteConfig.name}`,
		},
		description: dict.meta.description,
		applicationName: siteConfig.name,
		alternates: { canonical: "/" },
		authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
		creator: siteConfig.author.name,
		openGraph: {
			type: "website",
			siteName: siteConfig.name,
			url: siteConfig.url,
			locale: intlLocale[locale].replace("-", "_"),
			title,
			description: dict.meta.description,
			images: socialImages.openGraph,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: dict.meta.description,
			images: socialImages.twitter,
			creator: siteConfig.author.name,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: { index: true, follow: true, "max-image-preview": "large" },
		},
		keywords: [
			"Instagram",
			"unfollow",
			"followers",
			"following",
			"who doesn't follow me back",
			"ghost followers",
			"chrome extension",
			"geri takip",
			"takip etmeyenler",
			"takipçi",
			"unfolks",
			"özgür özalp",
		],
	};
}

export const viewport: Viewport = {
	colorScheme: "light dark",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#08070d" },
	],
};

export default async function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	const [dict, locale] = await Promise.all([getDictionary(), getLocale()]);

	return (
		<html lang={locale} suppressHydrationWarning className={geistSans.variable}>
			<GoogleTagManager gtmId="GTM-5Z3GH67S" />
			<body className="flex min-h-dvh flex-col bg-background font-sans antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<a
						href="#main"
						className="sr-only rounded-full bg-foreground px-4 py-2 text-background focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
					>
						{dict.meta.skipToContent}
					</a>
					<SiteHeader text={dict.nav} />
					<main id="main" tabIndex={-1} className="flex-1 outline-none">
						{children}
					</main>
					<SiteFooter />
					<PromoAd text={dict.promo} />
				</ThemeProvider>
			</body>
		</html>
	);
}
