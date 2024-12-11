import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<div className="p-4">
			<div className="border-b max-w-3xl mx-auto pb-4 mb-4">
				<Link href="/" className="flex items-center gap-x-2">
					<Image
						className="size-10"
						width={849}
						height={849}
						src="/logo.png"
						alt="Unfolks"
					/>
					<p className="text-3xl font-semibold">Unfolks</p>
				</Link>
			</div>
			<div className="prose max-w-3xl mx-auto lg:prose-xl">
				<p>
					<strong>Effective Date: 12-12-2024</strong>
				</p>
				<p>
					This Privacy Policy explains how Unfolks ("we," "our," or "us")
					collects, uses, and protects your information when you use our
					services, including our Google extension.
				</p>
				<h3>
					<strong>1. Information We Collect</strong>
				</h3>
				<p>We may collect the following types of information:</p>
				<ul>
					<li>
						<strong>Account Information:</strong> Your Instagram username and
						profile data, if you grant permission.
					</li>
					<li>
						<strong>Usage Data:</strong> Information about your interaction with
						our extension, including follow/unfollow actions.
					</li>
					<li>
						<strong>Technical Data:</strong> Browser type, version, and
						operating system.
					</li>
				</ul>
				<h3>
					<strong>2. How We Use Your Information</strong>
				</h3>
				<p>We use your information to:</p>
				<ul>
					<li>
						Provide the functionality of the extension, such as identifying
						non-followers.
					</li>
					<li>Improve our services and user experience.</li>
					<li>Maintain the security and integrity of our systems.</li>
				</ul>
				<h3>
					<strong>3. Sharing Your Information</strong>
				</h3>
				<p>
					We do not sell, rent, or share your personal data with third parties,
					except as required by law or to protect our rights.
				</p>
				<h3>
					<strong>4. Data Security</strong>
				</h3>
				<p>
					We take reasonable measures to protect your information from
					unauthorized access, use, or disclosure. However, no internet service
					is entirely secure, and we cannot guarantee complete security.
				</p>
				<h3>
					<strong>5. Your Choices</strong>
				</h3>
				<ul>
					<li>You can stop using the extension at any time.</li>
					<li>
						You may request deletion of your data by contacting us at [Your
						Email Address].
					</li>
				</ul>
				<h3>
					<strong>6. Third-Party Services</strong>
				</h3>
				<p>
					Our extension interacts with Instagram. Please review Instagram's
					privacy policy to understand how they manage your data.
				</p>
				<h3>
					<strong>7. Changes to This Policy</strong>
				</h3>
				<p>
					We may update this Privacy Policy from time to time. Changes will be
					effective immediately upon posting the revised policy.
				</p>
				<h3>
					<strong>8. Contact Us</strong>
				</h3>
				<p>
					If you have questions about this Privacy Policy, you can reach us at:
				</p>
				<ul>
					<li>
						<strong>Email:</strong>{" "}
						<a href="mailto:mail@ozgurozalp.com">mail@ozgurozalp.com</a>
					</li>
					<li>
						<strong>Website:</strong>{" "}
						<a href="https://ozgurozalp.com/">https://ozgurozalp.com</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
