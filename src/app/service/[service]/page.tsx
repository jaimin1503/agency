import Navbar from "@/components/Navbar"
import { WebHero } from "@/components/services/WebHero"
import WebHero2 from "@/components/services/WebHero2"

function page() {
  return (
    <div className=" bg-black min-h-screen w-screen text-white">
      <Navbar />
      <WebHero />
      <WebHero2 />
    </div>
  )
}
export default page