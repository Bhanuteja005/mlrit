import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aim Club",
  description: "The official website of AIM Club at MLRIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="realtive w-full flex items-center justify-center">
        <Navbar/>
        </div>
        {children}
        
        </body>
    </html>
  );
}
