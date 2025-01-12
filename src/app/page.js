'use client';  

import Navbar from "@/components/Navbar/Navbar";
import Blogs from "@/components/news/blog";
import About from "@/pages/about";
import Footer from "@/pages/footer";
import Dashboard from "@/pages/home";
import VerticalStepperForm from "@/pages/levelUp";
import LevelUp from "@/pages/levelUp";
import NewsAndUpdates from "@/pages/newsUpdates";
import ProgramOverViews from "@/pages/programsOver";

import SucceStories from "@/pages/successStory";
import Image from "next/image";

export default function Home() {
  return (
    <>
  
        <Dashboard />
      <About />
      <LevelUp />
      <ProgramOverViews />
      <SucceStories />

      <NewsAndUpdates />
      <Footer />
    </>
  );
}
