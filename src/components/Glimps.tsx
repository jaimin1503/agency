'use client'

import Particles from "./magicui/particles"

const companaydata = [
	{
		title: "Active Members",
		value: "+12k",
	},
	{
		title: "Total Project",
		value: "+1k",
	},
	{
		title: "Team Member",
		value: "+265",
	},
	{
		title: "Total revenue",
		value: "+$1M",
	},
];
export const Glimps = () => {
	return (
		<div className="relative w-screen flex flex-col py-20 justify-center items-center">
			<h1 className=" text-3xl sm:text-5xl font-bold heading-gradient mb-10">Glimps of our achievements</h1>
			<Particles
				className="absolute inset-0"
				quantity={100}
				ease={80}
				color={"#ffffff"}
				refresh
			/>
			<div className=" grid grid-cols-2 lg:grid-cols-4">
				{companaydata.map((data, idx) => (
					<div
						key={idx}
						className={`flex w-full md:mx-4 flex-col my-3 py-4 justify-evenly items-center ${idx !== 3 && " lg:border-r"}`}>
						<h1 className="text-xl sm:text-3xl font-medium">{data.title}</h1>
						<h1 className=" text-gray-400 text-lg sm:text-2xl font-medium">{data.value}</h1>
					</div>
				))}
			</div>
		</div>
	)
}