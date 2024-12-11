import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

const title = "Unfolks - Find who doesn't follow you back on Instagram!";
const description = `With this Chrome extension, easily find out who doesn’t follow you back on Instagram! Our extension helps you identify non-followers effortlessly. Filter out those who don’t follow you back and unfollow them with a single tap.`;
export const metadata: Metadata = {
	title,
	description,
	authors: [
		{
			name: "Özgür Özalp",
			url: "https://ozgurozalp.com",
		},
	],
	openGraph: { title, description },
	twitter: {
		title,
		description,
		card: "summary_large_image",
		creator: "Özgür ÖZALP",
	},
	keywords: [
		"Instagram",
		"Unfollow",
		"Followers",
		"Following",
		"ghost followers",
		"geri takip",
		"takip etmeyenler",
		"takipçi",
		"takip",
		"unfolks",
		"özgür özalp",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-5Z3GH67S" />
			<body className="antialiased min-h-dvh bg-gradient-to-b from-pink-50 to-white">
				{children}
				<Footer />
			</body>
		</html>
	);
}
