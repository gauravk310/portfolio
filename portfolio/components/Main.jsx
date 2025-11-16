"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TerminalHero from "./Terminal/Terminal";
import Profile from "./Profile";

export default function Main() {
  return (
    <main className="w-full h-[calc(100vh-80px)] bg-gray-800 p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-lg"
        // style={{ border: "2px solid #008236" }}
      >
        {/* Left Section */}
        <ResizablePanel
          defaultSize={30}
          minSize={20}
          maxSize={45}
          className="min-w-[200px] max-w-[500px]"
        
        >
          <div
            className="h-full w-full p-6 bg-gray-800 text-white flex items-center justify-center"
            style={{ borderRight: "2px solid #008236" }}
          >
            <Profile/>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Right Section */}
        <ResizablePanel
          defaultSize={70}
          minSize={40}
          maxSize={80}
          className="min-w-[300px] max-w-[900px]"
        >
          <div className="h-full w-full p-6 bg-gray-800 text-white flex items-center justify-center">
            {/* <span className="font-semibold text-lg">Right Section</span> */}
            <TerminalHero />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
