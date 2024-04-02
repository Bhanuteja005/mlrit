'use client'
import Link from "next/link";
import { HoverEffect } from "../ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Introduction to AI',
      description:
        'Dive deep into the fundamentals of artificial intelligence and enhance your skills.',
      slug: 'introduction-to-ai',
      isFeatured: true,
    },
    {
      title: 'Machine Learning Basics',
      description:
        'Learn the craft of machine learning from experienced data scientists.',
      slug: 'machine-learning-basics',
      isFeatured: true,
    },
    {
      title: 'Mastering Deep Learning',
      description:
        'Advanced techniques to master deep learning.',
      slug: 'mastering-deep-learning',
      isFeatured: true,
    },
    {
      title: 'AI in Real World Applications',
      description:
        'Get started with real world applications of artificial intelligence.',
      slug: 'ai-in-real-world-applications',
      isFeatured: true,
    },
    {
      title: 'Natural Language Processing',
      description:
        'Enhance your skills in natural language processing with expert tips and strategies.',
      slug: 'natural-language-processing',
      isFeatured: true,
    },
    {
      title: 'AI Ethics',
      description:
        'Learn about the ethical considerations in the field of artificial intelligence.',
      slug: 'ai-ethics',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center">
  <h2 className="text-base text-teal-600 font-semibold uppercase tracking-wide">FEATURED WEBINARS</h2>
  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Explore the World of AI</p>
</div>

        <div className="mt-10">
          <HoverEffect   
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          
          >
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Read More
        </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars