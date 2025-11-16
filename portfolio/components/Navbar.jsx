"use client";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Navbar() {
  return (
    <nav className="w-full bg-black px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold font-serif" style={{ color: "#00c951" }}>
          Gaurav Kadam
        </h1>
        <p className="text-base text-white font-serif">
          Software Developer
        </p>
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex items-center">
        <Avatar className='w-12 h-12 cursor-target'>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
