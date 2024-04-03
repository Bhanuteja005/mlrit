"use client";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function CanvasRevealEffectDemo() {
  return (
    <>
    <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 mt-32">Our Team</h2>
    <p className="text-center text-white">&quot;Individual commitment to a group effort - that is what makes a team work, a company work, a society work, a civilization work.&quot;<br></br>
- Vince Lombardi</p>
<hr style={{ width: '50%', margin: '0 auto' , marginTop:"50px"}} />
    <h6 className="text-xl md:text-3xl lg:text-5xl text-white text-center mb-8 mt-32">Core Team</h6>
<div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center bg-white dark:bg-black w-full mx-auto px-8">

  <Card title="Arun Kumar" hoverText="President"   imageSrc="https://media.licdn.com/dms/image/D5635AQFanKz8SYHbRQ/profile-framedphoto-shrink_800_800/0/1688991800985?e=1712764800&v=beta&t=g6JlYfmNB7Zp2oKBHhXRN_BrWOSJMH_U4Rk8HPaVv9Q">
    <CanvasRevealEffect
      animationSpeed={5.1}
      containerClassName="bg-emerald-900"
    />
  </Card>
  <Card title="Sagar Sirikonda" hoverText="Vice President"  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEUZ42JeNLF7TiDC-p6R1Yq41x6QlkxGtJ1GGfWBSKG3Kq6UiDRoWyZcwVeVryP58_L4&usqp=CAU">
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
  <Card title="Deepak Alapati" hoverText="Secretary"   imageSrc="https://media-hyd1-1.cdn.whatsapp.net/v/t61.24694-24/328116525_516282913913999_8994638814297558483_n.jpg?ccb=11-4&oh=01_ASDBIrN9-Nzad5Ezi5cCOsWZ-fnk79jjRr-wuyDvGtimvg&oe=661A779B&_nc_sid=e6ed6c&_nc_cat=106">
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-sky-600"
      colors={[[125, 211, 252]]}
    />
  </Card>
  <Card title="Srujana Gudipudi" hoverText="Treasurer"   imageSrc="https://media.licdn.com/dms/image/D5635AQEde4FG_YTTfg/profile-framedphoto-shrink_400_400/0/1708847905005?e=1712764800&v=beta&t=s9hT4ry6LjngyRrJVoeyF8rOOB5e5AWDUdRYMePxGeQ">
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-red-600" // changed color
      colors={[[125, 211, 252]]}
    />
  </Card>
  <Card title="Sai Prashanth" hoverText="Technical"   imageSrc="https://media.licdn.com/dms/image/D5603AQH__l8C-e5jVA/profile-displayphoto-shrink_400_400/0/1711027713540?e=1717632000&v=beta&t=Z8DR_RuM2AH3_y7U9DE5jV_Xq8Cj1671yNM3NXduIXU">
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-yellow-600" // changed color
      colors={[[125, 211, 252]]}
    />
  </Card>
</div>
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