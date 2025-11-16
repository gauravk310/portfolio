"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TerminalHero from "./Terminal/Terminal";
import TiltedCard from "./TiltedCard";
export default function Main() {
  return (
    <main className="w-full h-[calc(100vh-80px)] bg-gray-800 p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-lg"
      >
        {/* LEFT SECTION - HIDDEN ON MOBILE */}
        <div className="hidden md:block">
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
              <div className="cursor-target py-15">
                <TiltedCard
                  imageSrc="/profile.jpg"
                  altText="Gaurav Kadam - Developer"
                  captionText="Gaurav Kadam"
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />
        </div>

        {/* RIGHT SECTION - FULL WIDTH ON MOBILE */}
        <ResizablePanel
          defaultSize={70}
          minSize={40}
          maxSize={80}
          className="w-full"
        >
          <div className="h-full w-full p-6 bg-gray-800 text-white flex items-center justify-center">
            <TerminalHero />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
