'use client'

import { AccordionSection } from "@/components/AccordionSection";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden font-[family-name:var(--font-urbanist)]">
      <header>
        <h1 className="text-3xl font-semibold p-6">Resizable Panels</h1>
      </header>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={66.66}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={33.33}>
          <div className="flex h-full items-center justify-center p-6">
            <AccordionSection />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}