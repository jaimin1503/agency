import { BorderBeam } from "../magicui/border-beam"
import { motion } from "framer-motion"

const Hero1Image = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: "easeInOut",
			}}
			className=" my-10">
			<div className="relative rounded-xl shadowgold-500">
				<img className=" rounded-xl" src="../assets/web-photo.png" alt="" />
				<BorderBeam size={250} duration={12} delay={9} />
				<div className="absolute rounded-xl inset-0 bg-gradient-to-br from-transparent via-black/50 to-black"></div>
			</div>
		</motion.div>
	)
}
export default Hero1Image