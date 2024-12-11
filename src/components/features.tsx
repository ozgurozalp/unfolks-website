import { Search, Shield, Zap } from "lucide-react";
import { FeatureCard } from "./feature-card";

export function Features() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-16">
					Why Choose Unfolks?
				</h2>
				<div className="grid md:grid-cols-3 gap-12">
					<FeatureCard
						icon={<Search className="h-8 w-8 text-pink-600" />}
						title="Smart Detection"
						description="Instantly identify users who don't follow you back with our accurate tracking system."
					/>
					<FeatureCard
						icon={<Zap className="h-8 w-8 text-pink-600" />}
						title="Bulk Unfollow"
						description="Easily unfollow multiple users at once with our efficient batch processing tool."
					/>
					<FeatureCard
						icon={<Shield className="h-8 w-8 text-pink-600" />}
						title="Safe & Secure"
						description="Works within Instagram's limits to keep your account safe. No password required."
					/>
				</div>
			</div>
		</section>
	);
}
