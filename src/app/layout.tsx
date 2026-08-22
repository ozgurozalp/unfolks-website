import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { PromoAd } from "@/components/promo-ad";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
	display: "swap",
});

const title = `${siteConfig.name} — ${siteConfig.tagline}!`;

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: title,
		template: `%s — ${siteConfig.name}`,
	},
	description: siteConfig.description,
	applicationName: siteConfig.name,
	alternates: { canonical: "/" },
	authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
	creator: siteConfig.author.name,
	openGraph: {
		type: "website",
		siteName: siteConfig.name,
		url: siteConfig.url,
		title,
		description: siteConfig.description,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description: siteConfig.description,
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

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#08070d" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning className={geistSans.variable}>
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
						Skip to content
					</a>
					<SiteHeader />
					<main id="main" className="flex-1">
						{children}
					</main>
					<SiteFooter />
					<PromoAd />
				</ThemeProvider>
			</body>
		</html>
	);
}
