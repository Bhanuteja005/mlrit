
import Footer from "@/components/Footer";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
 

export default function LayoutGridDemo() {
  return (
    <header>
    <div className="h-screen py-20 w-full">
      <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 mt-32">Our Gallery</h2>
      <hr style={{ width: '50%', margin: '0 auto' }} />
      <LayoutGrid cards={cards} />
      <ParallaxScroll images={images} />
      <Footer/>
    </div>
    </header>
    
  );
}


const Heart = () => {
  return (
    <span role="img" aria-label="heart">
      ❤️
    </span>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">AIM <Heart /></p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
  AIM Club is a dynamic community of innovators and technologists. We strive to inspire, educate, and empower individuals through technology.
</p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Gen AI</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
  AIM Club is a dynamic community of innovators and technologists. We strive to inspire, educate, and empower individuals through technology.
</p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Immersive</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
  AIM Club is a dynamic community of innovators and technologists. We strive to inspire, educate, and empower individuals through technology.
</p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Gen AI</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
  AIM Club is a dynamic community of innovators and technologists. We strive to inspire, educate, and empower individuals through technology.
</p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://aim-mlrit.vercel.app/assets/img/gallery/ag.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://aim-mlrit.vercel.app/assets/img/gallery/c.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://aim-mlrit.vercel.app/assets/img/gallery/ab.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://aim-mlrit.vercel.app/assets/img/gallery/e.jpg",
  },
];
 
const images = [
  "https://aim-mlrit.vercel.app/assets/img/gallery/ad.jpeg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/n.jpeg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/g.jpg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/k.jpeg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/b.jpg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/d.jpg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/f.jpg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/h.jpg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/j.jpg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/i.jpg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/r.jpeg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/af.jpeg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/ae.jpeg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/z.jpeg",
  "https://aim-mlrit.vercel.app/assets/img/gallery/m.jpeg",];