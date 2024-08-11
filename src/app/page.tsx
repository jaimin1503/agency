import Navbar from "../components/Navbar";
import "./globals.css";
import { Hero2 } from "../components/home/Hero2";
import Footer from "@/components/Footer";
import { HomePageHero1 } from "@/components/home/HomePageHero1";
import { Glimps } from "@/components/home/Glimps";
import Testimonials from "@/components/home/Testimonials";
import { Faqs } from "@/components/home/Faqs";

export default function Home() {
  return (
    <main className=" bg-black text-white min-h-screen w-screen" style={{ fontFamily: "Open Sans" }}>
      <Navbar />
      <HomePageHero1 />
      <Hero2 />
      <Glimps />
      <Testimonials />
      <Faqs />
      <Footer />
    </main>
  );
}
