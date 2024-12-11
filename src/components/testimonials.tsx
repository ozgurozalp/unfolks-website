import React from "react";
import { Users } from "lucide-react";
import { Testimonial } from "./testimonial";

export function Testimonials() {
	return (
		<section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
			<div className="container mx-auto px-4 text-center">
				<div className="flex flex-col items-center justify-center mb-8">
					<Users className="size-10 text-pink-600 mr-3" />
					<h2 className="text-3xl font-bold text-balance">
						Loved by <br /> Instagram Users
					</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
					<Testimonial
						quote="Best tool for managing Instagram followers!"
						author="Özgür Özalp"
						role="Software Engineer"
						image="/ozgur.jpeg"
					/>
					<Testimonial
						quote="Finally found out who wasn't following me back. So helpful!"
						author="Vito Konuk"
						role="Fashion Designer"
						image="/vito.jpg"
					/>
					<Testimonial
						quote="Clean interface and works perfectly. Helped me clean up my following list."
						author="Batsy Habis"
						role="Fashion Model"
						image="/batsy.jpg"
					/>
				</div>
			</div>
		</section>
	);
}
