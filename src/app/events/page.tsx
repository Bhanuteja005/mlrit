import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function TracingBeamDemo() {
  return (
    <div>
    <TracingBeam className="px-6 mt-32">
      <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Events</h2>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
            </h2>
            <p className="text-xl mb-4" style={{ fontFamily: 'Calsans', fontWeight: 600 }}>
              {item.title}
            </p>
            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={500}
                  width={500}
                  layout="responsive"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
  );
}
const dummyContent = [
  {
    title: "Immersive",
    description: (
      <>
        <p>
        A VR program aimed at MLRIT students designed to empower participants in shaping 
        their understanding of virtual reality technology. Connect with industry experts to
         refine your VR concepts, preparing them for potential incubation pitches. Whether you
          come with a specific idea or not, our immersive program ensures you leave with a 
          well-defined VR project. Pitch your VR innovations to CIE for a chance to secure 
          funding and accelerate your journey into the exciting world of virtual reality technology.
        </p>
        <p>
        The program is aimed at MLRIT students, requiring no prerequisites. Whether you have a specific 
        idea or not, we&apos;re here to guide you through the exciting journey of ideation in the realm of technology.
         With just a dash of enthusiasm, you can embark on an effortless incubation experience. Gain valuable
          insights by connecting with faculty, alumni startups, and field experts. Explore the intricacies of 
          the startup market and culture, making the Immersive program the perfect launchpad for your entrepreneurial aspirations.
        </p>

      </>
    ),
    image:
      "https://i.pinimg.com/736x/50/f7/04/50f704964d9ff70d382fb35b1a6ce3a9.jpg",
  },
  {
    title: "Squid Game",
    description: (
      <>
         <p>
          &quot;Squid Game&quot; was an exciting event organized by our college&apos;s AIM Club. 
          This unique programming competition was inspired by the popular TV series &quot;Squid Game&quot;.
           Participants were challenged to solve complex coding problems under time pressure,
            mimicking the high-stakes environment of the show. The event was not only a test of coding skills 
            but also of strategy, teamwork, and resilience. It was a thrilling experience that brought together
             coding enthusiasts from all disciplines, fostering a spirit of camaraderie and friendly competition. 
             The &quot;Squid Game&quot; event was a testament to the innovative and engaging activities that
              AIM Club continually brings to our college community.
        </p>
      </>
    ),
    image:
      "https://i.pinimg.com/564x/9b/ff/4a/9bff4a63e285fba08fb6dd7cc28f8d40.jpg",
  },
  {
    title: "Gen AI",
    description: (
      <>
        <p>
          &quot;Gen AI&quot; was a landmark event hosted by AIM Club at our college. This event was designed to inspire and
           educate students about the vast potential of artificial intelligence. It featured a series of interactive
            workshops, enlightening talks by industry experts, and hands-on coding sessions. Participants had the 
            opportunity to delve into various AI technologies, work on real-world projects, and interact with AI 
            professionals. The event was a resounding success, sparking curiosity and fostering a deep interest 
            in AI among students. It truly embodied the spirit of AIM Club, turning challenges into opportunities
             for learning and growth. Join us as we continue to explore and push the boundaries of AI.
        </p>
      </>
    ),
    image:
      "https://i.pinimg.com/736x/fc/24/bf/fc24bf6351b6cbf6a876eeb281d14762.jpg",
  },
];