import WordFadeIn from "@/components/magicui/word-fade-in";
import { FadeText } from "@/components/magicui/fade-text";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";
import ShinyButton from "./magicui/shiny-button";
import webPic from "../../public/assets/web-photo.png"
import ShineBorder from "./magicui/shine-border";
import { BorderBeam } from "./magicui/border-beam";
import Hero1Image from "./Hero1Image";

const Hero1 = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center items-center dark mt-10 sm:mt-20 xl:max-w-[80%] lg:max-w-[90%]">
        <GridPattern
          numSquares={30}
          maxOpacity={0.3}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12"
          )}
        />
        <div className="z-10 flex min-h-[8rem] items-center justify-center">

          <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <button className=" colourful-button">
              Introducing the Agency
            </button>
          </ShineBorder>

        </div>
        {/* <WordFadeIn words="Crafting Exceptional Websites That Drive Success" /> */}
        <div className=" w-full text-center">
          <FadeText
            text="Crafting Exceptional Websites That Drive Success"
            direction="down"
            className=" md:text-7xl font-extrabold heading-gradient tracking-tight text-center w-full text-4xl "
          />
        </div>
        <h1 className=" text-xl py-5 text-gray-400 font-light">
          We provide top-notch web development services tailored to your
          business needs.
        </h1>

        <ShinyButton text="Get Started &rarr;" className=" my-5" />

        <Hero1Image />
      </div>
    </div>
  );
};
export default Hero1;
