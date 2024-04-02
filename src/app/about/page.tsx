'use client';
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 mt-32">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">About us</h2>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4" style={{ fontFamily: 'Calsans', fontWeight: 600 }}>
  {item.title}
</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">

              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Our mission",
    description: (
      <>
        <p>
        Welcome to AIM, where Aspiring Intellectual Mindsets converge to shape the future. AIM is not just an acronym, it's a commitment to pushing the boundaries of knowledge and creativity. In the dynamic landscape of AIM, we are not merely students, we are pioneers, visionaries, and architects of the digital age. Our journey is marked by a relentless pursuit of excellence, a passion for discovery, and a collective aspiration to make a meaningful impact.As we embark on this adventure, the possibilities are limitless, and the challenges are met with enthusiasm.
        </p>

      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Aim",
    description: (
      <>
        <p>
        At AIM Club, we envision a future where innovation knows no bounds, where the frontiers of artificial intelligence are explored with boundless curiosity. Our vision is to foster a dynamic community of Aspiring Intellectual Mindsets, united in the pursuit of pushing the boundaries of AI technology. We strive to be at the forefront of innovation, shaping a world where intelligence meets inspiration, and where AIM Club is synonymous with excellence, creativity, and transformative impact.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Exploring the AI Frontier",
    description: (
      <>
        <p>
          At AIM Club, we believe in the power of curiosity and the thrill of discovery. We dive into the depths of artificial intelligence, exploring its vast potential and pushing the boundaries of what's possible. Our members are not just learners, they are explorers charting the uncharted territories of AI. We tackle challenges head-on, turning obstacles into opportunities for learning and growth. Join us as we embark on this exciting journey into the future of AI.
        </p>
      </>
    ),
    badge: "AI Exploration",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];