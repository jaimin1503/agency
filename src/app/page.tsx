import WordFadeIn from "@/components/magicui/word-fade-in";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <main className=" bg-black text-white min-h-screen w-screen" style={{ fontFamily: "Open Sans" }}>
      <Navbar />
      <div className="container flex flex-col justify-center items-center text-justify dark mt-10 sm:mt-20 sm:max-w-[80%]">
        <WordFadeIn words="Crafting Exceptional Websites That Drive Success" />
        <h1 className=" text-xl py-5 text-gray-400 font-light">We provide top-notch web development services tailored to your business needs.</h1>
      </div>
    </main>
  );
}
