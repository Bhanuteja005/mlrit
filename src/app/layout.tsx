'use client';
import Preloader from "@/components/Preloader";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import { useEffect, useState } from 'react';
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false once all assets for the page have loaded
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <html lang="en" className="dark" style={{ margin: 0, padding: 0 }}>
      <body className={`${inter.className} m-0 p-0`}>
        {loading && <div className="absolute top-0 left-0 w-full h-full"><Preloader/></div>}
        <div className="relative w-full flex items-center justify-center m-0 p-0">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}