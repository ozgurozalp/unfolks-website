import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/footer";

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
	openGraph: { title, description, url: "https://unfolks.com" },
	twitter: {
		title,
		description,
		card: "summary_large_image",
		creator: "Özgür ÖZALP",
		site: "https://unfolks.com",
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
			<body className="antialiased min-h-dvh bg-gradient-to-b from-pink-50 to-white">
				{children}
				<Footer />
			</body>
		</html>
	);
}
