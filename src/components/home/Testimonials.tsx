function Testimonials() {
	return (
		<div className=" flex flex-col items-center justify-center dark">
			<h1 className=" text-3xl sm:text-5xl font-bold heading-gradient p-2">What people are saying</h1>
			<MarqueeDemo />
		</div>
	)
}
export default Testimonials



import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
	{
		name: "Jaimin",
		username: "@jaimin",
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "../assets/images/testi1.jpeg",
	},
	{
		name: "Daxil",
		username: "@daxil",
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "../assets/images/testi2.jpeg",
	},
	{
		name: "Ranjeet",
		username: "@ranjeet",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "../assets/images/testi3.jpg",
	},
	{
		name: "Jatin",
		username: "@jatin",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "../assets/images/testi4.jpeg",
	},
	{
		name: "Ashish",
		username: "@ashish",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "../assets/images/testi5.jpg",
	},
	{
		name: "Hardik",
		username: "@hardik",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "../assets/images/testi6.jpg",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
	name,
	username,
	body,
}: {
	img: string;
	name: string;
	username: string;
	body: string;
}) => {
	return (
		<figure
			className={cn(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img className="rounded-full object-cover w-10 h-10" alt="image" src={img} />
				<div className="flex flex-col">
					<figcaption className="text-sm font-medium dark:text-white">
						{name}
					</figcaption>
					<p className="text-xs font-medium dark:text-white/40">{username}</p>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{body}</blockquote>
		</figure>
	);
};

export function MarqueeDemo() {
	return (
		<div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.username} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	);
}
