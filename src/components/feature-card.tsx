interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-lg transition-shadow">
			<div className="flex justify-center mb-4">{icon}</div>
			<h3 className="text-xl font-semibold mb-3">{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	);
}
