'use client'
import Navbar from "@/components/Pages/Navbar";
import HomePage from "@/components/Pages/Home";
import Image from "next/image";
import TargetCursor from "@/components/ui/TargetCursor";
import Skills from "@/components/Pages/Skills";
import Projects from "@/components/Pages/Projects";

export default function Home() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
        <Navbar />
        <HomePage />
        <Skills />
        <Projects />

    </>
  );
}
