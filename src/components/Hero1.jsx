import WordFadeIn from "@/components/magicui/word-fade-in";
import { FadeText } from "@/components/magicui/fade-text";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";

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
          <ShimmerButton className="shadow-2xl" shimmerSize="0.08rem">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Get Started &gt;
            </span>
          </ShimmerButton>
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
      </div>
    </div>
  );
};
export default Hero1;
