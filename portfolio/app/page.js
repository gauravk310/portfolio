'use client'
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Image from "next/image";
import TargetCursor from "@/components/TargetCursor";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <>

      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <Main />
      </ClickSpark>
    </>
  );
}
