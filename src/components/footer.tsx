import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center gap-x-2 mb-4 md:mb-0">
						<Image
							className="h-8 w-auto"
							width={1040}
							height={877}
							src="/white-logo.png"
							alt="Unfolks"
						/>
						<span className="text-xl font-bold">Unfolks</span>
					</div>
					<div className="flex space-x-6">
						<Link
							href="/privacy-policy"
							className="hover:text-white transition-colors"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
				<div className="mt-8 text-center text-sm">
					© {new Date().getFullYear()} Unfolks. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
