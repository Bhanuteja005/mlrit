'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import GlobePage from "@/components/GlobePage";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSLider";
import Instructors from "@/components/Instructors";
import WhyChooseUs from "@/components/WhyChooseUs";
import AimTestimonials from "@/components/ui/TestimonialCards";

export default function Home() {
 
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

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

    </main>
  );
}