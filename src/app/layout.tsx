'use client';
import Loader from "@/components/Preloader";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import { useEffect, useState } from 'react';
import { MdDescription } from "react-icons/md";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Change this to control how long the preloader is displayed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <title>Aim Club</title>
        <MdDescription>The official website of AIM Club at MLRIT</MdDescription>
        </head>
      <body className={inter.className}>
        {loading && <Loader/>}
        <div className="realtive w-full flex items-center justify-center">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}