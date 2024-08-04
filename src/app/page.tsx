import Navbar from "../components/Navbar";
import "./globals.css";
import Hero1 from "../components/Hero1";

export default function Home() {
  return (
    <main className=" bg-black text-white min-h-screen w-screen" style={{ fontFamily: "Open Sans" }}>
      <Navbar />
      <Hero1 />
    </main>
  );
}
