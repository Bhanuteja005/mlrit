import withFonts from 'next-fonts';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com','media.licdn.com', 'assets.aceternity.com','aim-mlrit.vercel.app', 'mlrit.ac.in','encrypted-tbn0.gstatic.com','i.pinimg.com'],
  },
};

export default withFonts(nextConfig);
