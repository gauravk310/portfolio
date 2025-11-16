'use client'
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Image from "next/image";
import TargetCursor from "@/components/TargetCursor";

export default function Home() {
  return (
    <>
    <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
    <Navbar />
    <Main />
    </>
  );
}
