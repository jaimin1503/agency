import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
	return (
		<div className="navbar flex justify-between items-center py-2">
			<div className="left">
				{/* <div className="logo">
				<img src="/logo.svg" alt="logo" />
			</div> */}
				<div className=" mx-10">
					<Link href="/" className="title">
						<h1 className="text-2xl py-2 font-bold">AGENCY</h1>
					</Link>
				</div>
			</div>
			<div className="right mx-10">
				<Button variant="default" className=" mx-4" >Log in</Button>
				<Button variant="secondary" className=" mx-4" >Sign up</Button>
			</div>
		</div>
	)
}
export default Navbar