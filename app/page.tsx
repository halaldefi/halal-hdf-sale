'use client'

import { AccordionSection } from "@/components/features/faq/AccordionSection";
import { TokenSaleView } from "@/components/features/tokensale/TokenSaleView";
import { Navbar } from "@/components/layout/navbar";
import { AuditedBadge } from "@/components/shared/AuditedBadge";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col h-[calc(100vh-3.5rem)] w-full overflow-x-hidden font-[family-name:var(--font-urbanist)]">
        {/* Mobile View */}
        <div className="md:hidden w-full h-full flex flex-col gap-6 p-4">
          <div className="w-full flex-1">
            <h2 className="pb-4 text-xl sm:text-2xl font-medium text-center">
              Buy $HDF (Halal DeFi Token)
            </h2>
            <TokenSaleView />
          </div>
          <div className="w-full flex-1 overflow-auto">
            <AccordionSection />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex h-full">
          <ResizablePanelGroup direction="horizontal" className="h-full w-full border rounded-lg">
            <ResizablePanel defaultSize={66.66}>
              <div className="relative flex flex-col h-full p-6 justify-center">
                <h2 className="pb-2 text-2xl font-medium text-center">
                  Buy $HDF (Halal DeFi Token)
                </h2>
                <div className="flex-1 max-h-[650px]">
                  <TokenSaleView />
                </div>
                <div className="absolute right-4 bottom-4">
                  <AuditedBadge />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle className="bg-[#e6e6e6]" />
            <ResizablePanel defaultSize={33.33}>
              <div className="h-full p-2 overflow-auto flex items-center">
                <AccordionSection />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
    </div>
  );
}
