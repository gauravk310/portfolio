"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-black px-6 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold" style={{ color: "#00c951" }}>
          Gaurav Kadam
        </h1>
        <p className="text-base text-white">
          Full Stack Developer
        </p>
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex items-center">
        <Image
          src="/profile.jpg" // update your image path
          width={48}
          height={48}
          alt="Profile"
          className="rounded-full object-cover"
        />
      </div>
    </nav>
  );
}
