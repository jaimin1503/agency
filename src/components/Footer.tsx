import { InstagramLogoIcon, TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon, GlobeIcon } from "@radix-ui/react-icons"
import { Mail, ContactIcon } from "lucide-react"
import Link from "next/link"
import Globe from "./magicui/globe"

const Footer = () => {
	return (
		<div className=" flex flex-col md:flex-row justify-between items-center py-2">
			<div className=" flex justify-evenly w-full">
				<div className="socials flex flex-col justify-start items-start">

					<h1 className=" text-xl font-bold mb-2">
						Social Links
					</h1>
					<div className=" flex items-center my-1">
						<InstagramLogoIcon className="w-6 h-6" />
						<p className="text-md mx-2">Instagram</p>
					</div>

					<div className=" flex items-center my-1">
						<GitHubLogoIcon className="w-6 h-6" />
						<p className="text-md mx-2">Github</p>
					</div>

					<div className=" flex items-center my-1">
						<TwitterLogoIcon className="w-6 h-6" />
						<p className="text-md mx-2">Twitter</p>
					</div>

					<div className=" flex items-center my-1">
						<LinkedInLogoIcon className="w-6 h-6" />
						<p className="text-md mx-2">LinkedIn</p>
					</div>

				</div>
				<div className="quickLinks flex flex-col justify-start items-start">

					<h1 className=" text-xl font-bold mb-2">
						Quick Links
					</h1>

					<div className=" flex items-center my-1">
						<Link href={"/"} className="text-md mx-2">Home</Link>
					</div>

					<div className=" flex items-center my-1">
						<Link href={"/about"} className="text-md mx-2">About</Link>
					</div>

					<div className=" flex items-center my-1">
						<Link href={"/services"} className="text-md mx-2">Services</Link>
					</div>

					<div className=" flex items-center my-1">
						<Link href={"/contact"} className="text-md mx-2">Contact</Link>
					</div>
				</div>
				<div className="Contact">

					<h1 className=" text-xl font-bold mb-2">
						Contact Us
					</h1>
					<div className=" flex items-center my-1">
						<GlobeIcon className="w-6 h-6" />
						<Link href={"https://jaimin-15-03.netlify.app"} className="text-md mx-2">Website</Link>
					</div>

					<div className=" flex items-center my-1">
						<Mail className="w-6 h-6" />
						<Link href={"mailto:jaiminv153@gmail.com"} className="text-md mx-2">Email</Link>
					</div>

					<div className=" flex items-center my-1">
						<ContactIcon className="w-6 h-6" />
						<p className="text-md mx-2"> &#43; 917 123 4567</p>
					</div>
				</div>
			</div>
			<div className="glob relative w-[60%] md:w-[40%] flex items-center justify-center overflow-hidden rounded-lg px-40 p-20 py-24 md:pb-40">
				<Globe />
			</div>
		</div>
	)
}
export default Footer