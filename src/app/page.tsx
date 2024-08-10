import Navbar from "../components/Navbar";
import "./globals.css";
import Hero1 from "../components/Hero1";
import { Hero2 } from "../components/Hero2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" bg-black text-white min-h-screen w-screen" style={{ fontFamily: "Open Sans" }}>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Footer />
    </main>
  );
}
