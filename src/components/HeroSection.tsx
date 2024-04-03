import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function HeroSection() {
  const words = [
    {
      text: "Aspiring",
    },
    {
      text: "Intellectual",
    },
    {
      text: "Mindsets",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center ">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
       AIM 
        </h1>
        <TypewriterEffectSmooth words={words} className="place-content-center"/>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">

        WELCOME TO THE FOREFRONT OF INNOVATION AT MLRIT WITH AIM CLUB!
        </p>
        <div className="p-4">
          <Link href="/events">
  <Button
    borderRadius="1.75rem"
    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
  >
    Explore 
  </Button>
</Link>
        </div>
      </div>
    </div>
  );
}