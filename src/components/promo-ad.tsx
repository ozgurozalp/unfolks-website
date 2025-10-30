"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Cookie helper function for client-side
function setCookie(name: string, value: string, days: number = 1) {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export function PromoAdClient() {
	const [isVisible, setIsVisible] = useState(true);
	const [isAnimating, setIsAnimating] = useState(true);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			setIsVisible(false);
			// Set cookie for 1 day
			setCookie("rps-promo-closed", "true", 1);
		}, 300);
	};

	if (!isVisible) return null;

	return (
		<div
			className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-300 max-w-[calc(100vw-2rem)] md:max-w-sm ${
				isAnimating
					? "translate-y-0 opacity-100"
					: "translate-y-4 opacity-0"
			}`}
		>
			<div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20">
				{/* Close Button */}
				<Button
					onClick={handleClose}
					variant="ghost"
					size="icon"
					className="absolute top-2 right-2 md:top-3 md:right-3 hover:bg-white/30 rounded-full z-20"
					aria-label="Close"
				>
					<X className="w-4 h-4 text-white" />
				</Button>

				{/* Content */}
				<div className="p-4 md:p-6">
					{/* Logo centered at top */}
					<div className="flex justify-center mb-4">
						<img
							src="https://taskagitmakas.online/game-icons/game-image.svg"
							alt="Rock Paper Scissors"
							className="w-16 h-16 md:w-20 md:h-20"
						/>
					</div>

					<h3 className="text-white font-medium text-base md:text-lg text-center mb-3">
						Have you tried our online <br /><strong>Rock Paper Scissors</strong> <br />game?
					</h3>

					<p className="text-white/95 text-xs md:text-sm mb-4 text-balance leading-relaxed text-center">
						Having a disagreement with your friends?{" "}
						<strong>Play our online Rock Paper Scissors game</strong> and settle it online!
					</p>

					<a
						href="https://rock.paperscissors.online/?utm_source=unfolks.com&utm_medium=referral"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-white text-purple-600 font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-purple-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full text-center text-sm md:text-base"
					>
						Play Now!
					</a>
				</div>

				{/* Decorative elements */}
				<div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-full -ml-10 md:-ml-12 -mb-10 md:-mb-12"></div>
			</div>
		</div>
	);
}

