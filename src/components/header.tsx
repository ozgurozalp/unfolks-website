import { Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="container mx-auto px-4 py-16 text-center">
			<div className="flex justify-center mb-6">
				<Link href="/">
					<Image
						className="size-32"
						width={849}
						height={849}
						src="/logo.png"
						alt="Unfolks"
					/>
				</Link>
			</div>
			<h1 className="text-5xl font-bold text-gray-900 mb-6">Unfolks</h1>
			<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
				Discover who's not following you back on Instagram. Clean up your
				following list and maintain genuine connections with our powerful
				tracking tool.
			</p>
			<a
				href="https://chrome.google.com/webstore/detail/idgjpjkoddplmbdepekendpdbaibcgpc"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all"
			>
				<Download className="mr-2 h-5 w-5" />
				Add to Chrome - It's Free
			</a>
			<div className="flex items-center justify-center mt-6 text-gray-600">
				<Star className="h-5 w-5 text-yellow-400 mr-2" />
				<span>5/5 rating from 25,000+ Instagram users</span>
			</div>
		</header>
	);
}
