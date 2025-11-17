'use client'
import Navbar from "@/components/Pages/Navbar";
import HomePage from "@/components/Pages/Home";
import Image from "next/image";
import TargetCursor from "@/components/ui/TargetCursor";
import Logoloop from "@/components/Pages/Logoloop";

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
        <Logoloop />

    </>
  );
}
