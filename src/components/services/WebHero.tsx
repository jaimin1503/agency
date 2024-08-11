'use client'

import { motion } from "framer-motion"

export const WebHero = () => {
	return (
		<div className=" flex flex-col md:flex-row mt-20 container">
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.7,
					delay: 0.3,
					ease: "easeInOut",
				}}
				className=" md:w-1/2 p-10 text-start">
				<h1 className="heading-gradient text-3xl sm:text-4xl md:text-6xl font-medium">
					Web Development services at AGENCY
				</h1>
				<p className="text- text-gray-400 text-lg sm:text-2xl">
					We build websites that are fast, easy to use, and look great on all devices.
				</p>
			</motion.div>

			<motion.div

				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.7,
					delay: 0.3,
					ease: "easeInOut",
				}}
				className="md:w-1/2 flex justify-center">
				<img
					src="../assets/web-photo.png"
					alt="hero"
					className="w-[90%] shadowgold-500"
				/>
			</motion.div>
		</div>
	)
}