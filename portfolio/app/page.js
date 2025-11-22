'use client'
import Navbar from "@/components/Pages/Navbar";
import HomePage from "@/components/Pages/Home";
import Image from "next/image";
import TargetCursor from "@/components/ui/TargetCursor";
import Skills from "@/components/Pages/Skills";
import Projects from "@/components/Pages/Projects";
import AboutMe from "@/components/Pages/AboutMe";
import Experience from "@/components/Pages/Experience";
import Certifications from "@/components/Pages/Certifications";
import ContactMe from "@/components/Pages/ContactMe";
import Footer from "@/components/Pages/Footer";
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
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <ContactMe />
        <Footer />

    </>
  );
}
