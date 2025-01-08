'use client';  // This will ensure it's rendered client-side

import Navbar from "@/components/Navbar/Navbar";
import About from "@/pages/about";
import Footer from "@/pages/footer";
import Dashboard from "@/pages/home";
import LevelUp from "@/pages/levelUp";
import NewsAndUpdates from "@/pages/newsUpdates";
import ProgramOverViews from "@/pages/programsOver";
import SucceStories from "@/pages/successStory";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    // Add background color here
    style={{background:'black'}}
    >
      {/* <Navbar /> */}
      <Dashboard />
    </div>
      <About />
      <LevelUp />
      <ProgramOverViews />
      <SucceStories />
      <NewsAndUpdates />
      <Footer />
    </>
  );
}
