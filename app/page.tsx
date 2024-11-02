'use client'

import { AccordionSection } from "@/components/features/faq/AccordionSection";
import { TokenSaleView } from "@/components/features/tokensale/TokenSaleView";
import { Navbar } from "@/components/layout/navbar";
import { AuditedBadge } from "@/components/shared/AuditedBadge";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden font-[family-name:var(--font-inter)]">
        {/* Mobile View */}
        <div className="md:hidden w-full min-h-[calc(100vh-3.5rem)] flex flex-col gap-4 p-4">
          <div className="w-full pb-8 border-b border-gray-200">
            <h2 className="pb-4 text-xl sm:text-2xl font-semibold text-center">
              Buy $HDF (Halal DeFi Token)
            </h2>
            <TokenSaleView />
          </div>
          <div className="w-full">
            <AccordionSection />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex h-[calc(100vh-3.5rem)]">
          <div className="flex w-full">
            <div className="w-2/3 relative flex flex-col gap-6 p-6 border-r">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h2 className="pb-4 text-3xl font-medium">
                  Buy $HDF (Halal DeFi Token)
                </h2>
                <TokenSaleView />
              </div>
              <div className="absolute right-4 bottom-4">
                <AuditedBadge />
              </div>
            </div>
            <div className="w-1/3 h-full overflow-y-auto">
              <AccordionSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
