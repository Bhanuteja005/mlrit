'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import GlobePage from "@/components/GlobePage";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSLider";
import Instructors from "@/components/Instructors";
import MultiStepLoaderDemo from "@/components/Preloader";
import WhyChooseUs from "@/components/WhyChooseUs";
import AimTestimonials from "@/components/ui/TestimonialCards";
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Change this to control how long the preloader is displayed

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {loading ? (
        <MultiStepLoaderDemo />
      ) : (
        <>
          <HeroSection/>
          <About/>
          <WhyChooseUs/>
          <GlobePage/>
          <AimTestimonials/>
          <Instructors/>
          <ImageSlider/>
          <Footer/>
        </>
      )}
    </main>
  );
}