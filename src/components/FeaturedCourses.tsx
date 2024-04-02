'use client'
import { TextGenerateEffect } from "./ui/text-generate-effect";


function FeaturedCourses() {
    const words = `Welcome to Aim Club at MLRIT College, where the future meets innovation! Aim, short for Aspiring Intellectual Mindsets, is the dynamic AIML department club that explores the realms of artificial intelligence. In collaboration with Inlustroo Company, Aim Club pioneers cutting-edge projects and fosters a community of forward-thinkers. Our members have harnessed their skills to develop a remarkable robot, showcasing the potential of AI in the real world. Join us on this journey of discovery and advancement, where passion meets technology. Be part of Aim Club and embrace the limitless possibilities of AI. Together, we shape the future!`;
  
    return (
      <div className="py-12 bg-black flex items-center justify-center h-screen">
        <div>
          <div className="text-center">
            <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">About Us</h1>
            <TextGenerateEffect words={words} className="place-content-center justify-center pl-32 pr-32 text-left"/>
          </div>
          <div className="mt-20 text-center">
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    )
  }

export default FeaturedCourses