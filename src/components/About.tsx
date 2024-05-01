'use client'
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";

function About() {
    const words = `Welcome to Aim Club at MLRIT College, where the future meets innovation! Aim, short for Aspiring Intellectual Minds, is the dynamic AIML department club that explores the realms of artificial intelligence. In collaboration with Inlustro Company, Aim Club pioneers cutting-edge projects and fosters a community of forward-thinkers. Our members have harnessed their skills to develop a remarkable robot, showcasing the potential of AI in the real world. Join us on this journey of discovery and advancement, where passion meets technology. Be part of Aim Club and embrace the limitless possibilities of AI. Together, we shape the future!`;
  
    return (
      <div className="py-12 bg-gray-900">
        <div>
        <div className="text-center">
        <h6 className="text-sm sm:text-5xl md:text-6xl text-teal-600 mt-20 md:mt-0 font-bold bg-clip-text calsans-font">ABOUT US</h6>
        <TextGenerateEffect words={words} className="mt-4 font-normal text-base md:text-lg xs:text-sm text-neutral-300 max-w-full mx-auto text-left pl-5 pr-5 calsans-font"/>
        </div>
</div>
            <div className="mt-20 text-center">
            <Link href={"/team"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Read More 
            </Button>
          </Link>
            </div>
    </div>
  )
}

export default About