'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const instructors = [
    {
      id: 1,
      name: 'Sai Prasad k',
      designation: 'HOD & Associate Professor',
      image:
        'https://mlrit.ac.in/wp-content/uploads/2022/03/Sai-Prasad-e1688727445691.jpeg',
    },

    {
      id: 3,
      name: 'Vijay G',
      designation: 'Associate Professor',
      image:
        'https://mlrit.ac.in/wp-content/uploads/2023/07/1688724924587-2-scaled-e1688725244546.jpg',
    },

  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the skilled professionals who will guide your journey into the realm of artificial intelligence.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors