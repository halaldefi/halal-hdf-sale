'use client'

import { AccordionSection } from "@/components/features/faq/AccordionSection";
import { HoverPopover } from "@/components/features/tokensale/HoverPopover";
import SaleCard from "@/components/features/tokensale/SaleCard";
import TokenSaleProgress from "@/components/features/tokensale/TokenSaleProgress";
import { Navbar } from "@/components/layout/navbar";
import Image from "next/image";
import { useState, useMemo } from "react";

// Define the sale stages
const saleStages = [
  { number: 1, price: 0.1, position: 0, tokenAmount: "Initial Price" },
  { number: 2, price: 0.108, position: 20, tokenAmount: "5M HDF" },
  { number: 3, price: 0.128, position: 40, tokenAmount: "15M HDF" },
  { number: 4, price: 0.148, position: 60, tokenAmount: "25M HDF" },
  { number: 5, price: 0.17, position: 80, tokenAmount: "35M HDF" },
  { number: 6, price: 0.19, position: 100, tokenAmount: "45M HDF" }
];
export default function Home() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const baseProgressBar = useMemo(() =>
    <TokenSaleProgress
      currentStage={3}
      stages={saleStages}
      isEnhanced={false}
      customLabel="Current Stage"
    />,
    []
  );

  const enhancedProgressBar = useMemo(() =>
    <div className="w-full z-20">
      <div className="bg-gradient-to-r from-[#fff9ec] to-white border-b border-[#E8C375]/20 py-4 px-6 rounded-t-xl">
        <div className="text-[#222222] text-xl font-semibold">Token Sale Progress</div>
      </div>
      <div className="p-6 bg-white/95 mx-6">
        <div className="h-[calc(24rem-72px)]">
          <div className="grid place-items-end h-full">


            {/* Sale Progress */}
            <div className="w-full mb-4">
              <TokenSaleProgress
                currentStage={3}
                stages={saleStages}
                isEnhanced={true}
                customLabel="Current Stage"
              />
            </div>
            <div className="w-full flex justify-between items-center mt-8 mb-4">
              <div className="flex items-center gap-2 bg-[#fff9ec] py-2 px-4 rounded-lg border border-[#E8C375]/20 hover:border-[#E8C375]/40 transition-colors">
                <Image src="/images/chains/bsc.svg" alt="BSC" width={24} height={24} />
                <span className="font-medium text-[#222222]">BSC Network</span>
              </div>
              <div className="text-lg font-medium text-[#222222] bg-[#fff9ec] py-2 px-4 rounded-lg border border-[#E8C375]/20">
                <span className="font-semibold">Total Token Sold:</span>{' '}
                <span className="font-bold text-[#D18411]">22.73M</span>
                <span className="text-[#222222]">/45M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    []
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 font-[family-name:var(--font-inter)] overflow-hidden">
        <div className="flex flex-col md:flex-row md:h-[calc(100vh-64px)]">
          <div className="w-full md:w-2/3 md:border-r overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="md:min-h-[650px] h-full flex flex-col items-center justify-center gap-4 md:gap-12 border-b border-gray-200 md:border-none">
              <div className="w-full px-4 flex grow flex-col pt-4 justify-center items-center">
                <h2 className="pt-8 text-xl sm:text-2xl md:text-3xl font-semibold md:font-medium text-center px-4 pb-4 md:pb-8">
                  Buy $HDF
                </h2>
                <SaleCard />
              </div>
              <div className="w-full max-w-4xl px-4 mt-auto py-8 mb-4 md:mb-8">
                <HoverPopover
                  className="w-full"
                  content={enhancedProgressBar}
                  interactionMode="click"
                  onOpenChange={setIsPopoverOpen}
                >
                  <div
                    className="w-full"
                  >
                    {baseProgressBar}
                  </div>
                </HoverPopover>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <AccordionSection />
          </div>
        </div>
      </main>
    </div>
  );
}
