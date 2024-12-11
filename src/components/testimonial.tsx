import Image from "next/image";

interface TestimonialProps {
	quote: string;
	author: string;
	role: string;
	image: string;
}

export function Testimonial({ quote, author, role, image }: TestimonialProps) {
	return (
		<div className="bg-white p-6 rounded-xl shadow-sm">
			<p className="text-gray-600 text-2xl md:text-base mb-4 min-h-[3lh] text-balance">
				"{quote}"
			</p>
			<div className="flex items-center justify-center">
				<Image
					width={200}
					height={200}
					src={image}
					alt={`${author} - ${role}`}
					className="w-12 h-12 rounded-full mr-3 object-cover"
				/>
				<div className="text-left">
					<div className="font-semibold">{author}</div>
					<div className="text-sm text-gray-500">{role}</div>
				</div>
			</div>
		</div>
	);
}
