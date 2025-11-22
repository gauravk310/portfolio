"use client";

import TerminalHero from "../Terminal/Terminal";

export default function HomePage() {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-[#0f172a]">
      <div className="terminal-container h-full w-full p-6 bg-[#0f172a] text-white flex items-center justify-center">
        <TerminalHero />
      </div>
    </div>
  );
}
