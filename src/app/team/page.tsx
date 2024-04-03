"use client";
import Footer from "@/components/Footer";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function CanvasRevealEffectDemo() {
  return (
    <>
    <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 mt-32">Our Team</h2>
    <p className="text-center text-white">&quot;Individual commitment to a group effort - that is what makes a team work, a company work, a society work, a civilization work.&quot;<br></br>
- Vince Lombardi</p>
    <h6 className="text-xl md:text-3xl lg:text-5xl text-white text-center mb-8 mt-32">Core Team</h6>
<div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center bg-white dark:bg-black w-full mx-auto px-8">

  <Card title="Arun Kumar" hoverText="President"   imageSrc="">
    <CanvasRevealEffect
      animationSpeed={5.1}
      containerClassName="bg-emerald-900"
    />
  </Card>
  <Card title="Sagar Sirikonda" hoverText="Vice President"  imageSrc="">
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-black"
      colors={[
        [236, 72, 153],
        [232, 121, 249],
      ]}
      dotSize={2}
    />
    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
  </Card>
  <Card title="Deepak Alapati" hoverText="Secretary"   imageSrc="">
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-sky-600"
      colors={[[125, 211, 252]]}
    />
  </Card>
  <Card title="Srujana Gudipudi" hoverText="Treasurer"   imageSrc="">
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-red-600" // changed color
      colors={[[125, 211, 252]]}
    />
  </Card>
  <Card title="Sai Prashant" hoverText="Technical"   imageSrc="https://aim-mlrit-bhanu.vercel.app/assets/img/a.jpg">
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-yellow-600" // changed color
      colors={[[125, 211, 252]]}
    />
  </Card>
</div>
      <Footer/>
    </>
  );
}
const Card = ({
    title,
    children,
    imageSrc,
    hoverText,
  }: {
    title: string;
    children?: React.ReactNode;
    imageSrc: string;
    hoverText: string;
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
        title={hoverText} // hover text added here
      >
        <img src={imageSrc} alt={title} className="absolute w-full h-full object-cover" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          </div>
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
          <div className={`opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 text-center ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            {hoverText}
          </div>
        </div>
      </div>
    );
  };