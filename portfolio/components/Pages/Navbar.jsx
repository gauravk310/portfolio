"use client";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import NavLinks from "../ui/NavLinks";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-black px-6 py-4 flex items-center justify-between z-50">
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
      <div className="flex items-center gap-10">
        <NavLinks />
        <Avatar className='w-12 h-12 cursor-target'>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
