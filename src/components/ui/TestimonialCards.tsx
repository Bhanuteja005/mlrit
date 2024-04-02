'use client'
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
const aiClubTestimonials = [
  {
    quote:
      'Being a part of the AI club has been a transformative experience. The projects we work on are innovative and challenging, and I have learned so much.',
    name: 'John Doe',
    title: 'AI Enthusiast',
  },
  {
    quote:
      "The community at the AI club is incredibly supportive. I've grown not just as a programmer, but also as a thinker, thanks to their comprehensive approach.",
    name: 'John Doe',
    title: 'Data Scientist',
  },
  {
    quote:
      "The AI club has given me the confidence to tackle complex problems. I'm endlessly grateful for the opportunities to learn and grow.",
    name: 'John Doe',
    title: 'Machine Learning Engineer',
  },
  {
    quote:
      'Finding the right mentor can be challenging, but the AI club matched me with a mentor who truly understands my goals and challenges.',
    name: 'John Doe',
    title: 'AI Researcher',
  },
  {
    quote:
      'The projects and collaborations here have opened my eyes to the potential of AI. I highly recommend joining the AI club!',
    name: 'John Doe',
    title: 'AI Enthusiast',
  },
];

function AiClubTestimonials() {
return (
  <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear from our Members: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
          <InfiniteMovingCards
              items={aiClubTestimonials}
              direction="right"
              speed="slow"
    />
          </div>
      </div>
  </div>
)
}

export default AiClubTestimonials