import { CodeIcon, DesktopIcon, SewingPinIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { FadeText } from "./magicui/fade-text";

const services = [
	{
		Icon: CodeIcon,
		name: "Web Development",
		description: "Building responsive and high-quality websites tailored to your needs.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-1",
		background: (
			<div className="absolute top-10 left-0 w-full h-full flex items-center justify-center">
				<img className=" w-32 opacity-60 group-hover:opacity-30 transition-all duration-300" src="../assets/svgs/web-development.svg" alt="" />
			</div>
		),
	},
	{
		Icon: DesktopIcon,
		name: "Web Design",
		description: "Crafting beautiful and user-friendly interfaces.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-2",
		background: (
			<div className="absolute right-2 top-4 h-full w-full flex items-center justify-center">
				<img className=" w-32 opacity-60 group-hover:opacity-30 transition-all duration-300" src="../assets/svgs/web-design.svg" alt="" />
			</div>
		),
	},
	{
		Icon: Share2Icon,
		name: "SEO & Marketing",
		description: "Enhancing your online presence with effective SEO and marketing strategies.",
		href: "#",
		cta: "Learn more",
		className: "col-span-3 lg:col-span-2",
		background: (
			<div className="absolute right-2 top-4 h-full w-full flex items-center justify-center">
				<img className=" w-32 opacity-60 group-hover:opacity-30 transition-all duration-300" src="../assets/svgs/seo.svg" alt="" />
			</div>
		),
	},
	{
		Icon: SewingPinIcon,
		name: "Support & Maintenance",
		description: "Providing ongoing support and maintenance to keep your website running smoothly.",
		className: "col-span-3 lg:col-span-1",
		href: "#",
		cta: "Learn more",
		background: (
			<div className="absolute right-0 top-10 w-full h-full flex items-center justify-center">
				<img className=" w-32 opacity-60 group-hover:opacity-30 transition-all duration-300" src="../assets/svgs/maintenance.svg" alt="" />
			</div>
		),
	},
];

export function Hero2() {
	return (
		<div className=" max-w-[80%] mx-auto text-center py-10">
			<FadeText
				text="Over services"
				direction="down"
				className=" md:text-5xl font-extrabold text-center w-full text-4xl "
			/>
			<FadeText
				text="Everithing you need to start your business."
				direction="down"
				className=" md:text-xl font-extralight text-center w-full text-lg text-gray-400"
			/>
			<BentoGrid className=" dark">
				{services.map((service, idx) => (
					<BentoCard key={idx} {...service} />
				))}
			</BentoGrid>
		</div>
	);
}
