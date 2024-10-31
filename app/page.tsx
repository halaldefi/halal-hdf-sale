'use client'

import { AccordionSection } from "@/components/features/faq/AccordionSection";
import SaleCard from "@/components/features/tokensale/SaleCard";
import { Navbar } from "@/components/layout/navbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col h-[calc(100vh-3.5rem)] w-full overflow-x-hidden font-[family-name:var(--font-urbanist)]">
        {/* Mobile View */}
        <div className="md:hidden w-full h-full flex flex-col gap-6 p-4">
          <div className="w-full flex-1">
            <h2 className="pb-4 text-xl sm:text-2xl font-medium text-center">Buy $HDF (Halal DeFi Token)</h2>
            <div className="relative w-full border-solid border-[1.5px] rounded-lg border-[#e2ceb2] overflow-auto shadow-[4px_4px_16px_rgba(197,156,101,0.25)] p-4">
              <div className="flex flex-col items-center justify-center w-full">
                <SaleCard />
              </div>
            </div>
          </div>
          {/* Moved Audited label outside the buy button */}
          <div className="absolute right-4 bottom-4 flex items-center gap-1 px-2.5 py-1 w-fit bg-[#dbf4f0] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#1ebaa5]" width="20" height="20" viewBox="0 0 16 16">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
                <path d="m5.75 7.75l2.5 2.5l6-6.5" />
              </g>
            </svg>
            <span className="text-[#1ebaa5] text-sm font-semibold">Audited</span>
          </div>
          <div className="w-full flex-1 p-4 overflow-auto">
            <AccordionSection />
          </div>
        </div>

        {/* Desktop View with Resizable Panels */}
        <div className="hidden md:flex h-full">
          <ResizablePanelGroup
            direction="horizontal"
            className="h-full w-full border rounded-lg"
          >
            <ResizablePanel defaultSize={66.66}>
              <div className="flex flex-col h-full p-6">
                <h2 className="pb-2 text-2xl font-medium text-center">Buy $HDF (Halal DeFi Token)</h2>
                <div className="relative flex-1 border-solid border-[1.5px] rounded-lg border-[#e2ceb2] overflow-auto shadow-[4px_4px_16px_rgba(197,156,101,0.25)]">
                  <div className="flex flex-col items-center justify-center h-full">
                    <SaleCard />
                  </div>
                  <div className="absolute right-4 bottom-4 flex items-center gap-1 px-2.5 py-1 w-fit bg-[#dbf4f0] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#1ebaa5]" width="20" height="20" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" /><path d="m5.75 7.75l2.5 2.5l6-6.5" /></g></svg>
                    <span className="text-[#1ebaa5] font-semibold">Audited</span>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle className="bg-[#e6e6e6]" />
            <ResizablePanel defaultSize={33.33}>
              <div className="h-full p-6 overflow-auto">
                <AccordionSection />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
    </div>
  );
}
