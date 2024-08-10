import Navbar from "../components/Navbar";
import "./globals.css";
import { Hero2 } from "../components/Hero2";
import Footer from "@/components/Footer";
import { HomePageHero1 } from "@/components/HomePageHero1";
import { Glimps } from "@/components/Glimps";
import Testimonials from "@/components/Testimonials";
import { Faqs } from "@/components/Faqs";

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
