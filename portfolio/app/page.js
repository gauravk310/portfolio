'use client'
import Navbar from "@/components/Pages/Navbar";
import Main from "@/components/Pages/Main";
import Image from "next/image";
import TargetCursor from "@/components/ui/TargetCursor";
// import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      {/* <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      > */}
        <Navbar />
        <Main />
      {/* </ClickSpark> */}
    </>
  );
}
