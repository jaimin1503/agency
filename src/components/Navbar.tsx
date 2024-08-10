import Link from "next/link"

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

			<div className="right max-w-2xl mr-4 md:mr-10 hidden md:flex">
				<div className="space-x-8 flex">
					<Link href="/" className="link">Home</Link>
					<Link href="/about" className="link">About</Link>
					<Link href="/" className="link">Services</Link>
					<Link href="/" className="link">Contact</Link>
				</div>
			</div>
		</div>
	)
}
export default Navbar