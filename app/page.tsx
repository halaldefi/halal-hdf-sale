'use client'

import { AccordionSection } from "@/components/AccordionSection";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden font-[family-name:var(--font-urbanist)]">
      <header className="flex-none">
        <h1 className="text-3xl font-semibold p-4 sm:p-6">Halal Defi Header</h1>
      </header>
      <div className="flex-1 min-h-0"> {/* Added padding */}
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full rounded-lg border"
        >
          <ResizablePanel defaultSize={66.66}>
            <div className="flex flex-col h-full p-3 sm:p-6">
              <div className="flex-1 min-h-0 border-solid border-2 border-orange-500 shadow-custom overflow-auto"></div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={33.33}>
            <div className="flex justify-center items-center h-full p-3 sm:p-6 overflow-auto">
              <AccordionSection />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
}