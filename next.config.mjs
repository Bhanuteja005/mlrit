import withFonts from 'next-fonts';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com', 'assets.aceternity.com', 'mlrit.ac.in'],
  },
};

export default withFonts(nextConfig);
