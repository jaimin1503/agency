import { BorderBeam } from "./magicui/border-beam"

const Hero1Image = () => {
	return (
		<div className=" my-10">
			<div className="relative rounded-xl shadowgold-500">
				<img className=" rounded-xl" src="../assets/web-photo.png" alt="" />
				<BorderBeam size={250} duration={12} delay={9} />
			</div>
		</div>
	)
}
export default Hero1Image