'use client'

import { AccordionSection } from "@/components/features/faq/AccordionSection";
import { HoverPopover } from "@/components/features/tokensale/HoverPopover";
import TokenSaleProgress from "@/components/features/tokensale/ProgressBar";
import SaleCard from "@/components/features/tokensale/SaleCard";
import { TokenSaleView } from "@/components/features/tokensale/TokenSaleView";
import { Navbar } from "@/components/layout/navbar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { useState, useMemo } from "react";

export default function Home() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const stages = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      number: i + 1,
      tokenAmount: i === 0 ? "0-5M" : `${(i + 2) * 10}M`,
      price: i === 0 ? 0.108 :  // 5M
        i === 1 ? 0.128 :  // 15M
          i === 2 ? 0.148 :  // 25M
            i === 3 ? 0.168 :  // 35M
              0.188,   // 45M
      position: i === 0 ? 2 : i === 4 ? 98 : 2 + (i * 96) / (5 - 1)
    })), []
  );

  const baseProgressBar = useMemo(() =>
    <TokenSaleProgress
      currentStage={3}
      stages={stages}
      hideCurrentStageLabel={false}
      labelPosition="bottom"
      customLabel="You are here"
      theme={{
        progress: 'bg-gradient-to-r from-[#D18411] to-[#E8C375]',
        background: 'bg-[#fff9ec]',
        completed: 'bg-[#D18411]',
        upcoming: 'bg-gray-200',
        border: 'border-[#E8C375]/20',
        currentStage: 'text-[#D18411]',
        completedArrow: '#D18411',
        upcomingArrow: '#94A3B8',
        completedText: 'text-[#D18411]',
        upcomingText: 'text-gray-400'
      }}
    />,
    [stages]
  );

  const enhancedProgressBar = useMemo(() =>
    <div className="w-full z-20">
      <div className="bg-gradient-to-r from-[#fff9ec] to-white border-b border-[#E8C375]/20 py-4 px-6 rounded-t-xl">
        <div className="text-[#222222] text-xl font-semibold">Token Sale Progress</div>
      </div>
      <div className="p-6 bg-white/95">
        <div className="h-[calc(24rem-72px)]">
          <div className="grid place-items-end h-full">
            <TokenSaleProgress
              currentStage={3}
              stages={stages}
              isEnhanced={true}
              hideCurrentStageLabel={false}
              customLabel="Current Stage"
              theme={{
                progress: 'bg-gradient-to-r from-[#D18411] to-[#E8C375]',
                background: 'bg-[#fff9ec]/50',
                completed: 'bg-[#D18411]',
                upcoming: 'bg-gray-300/50',
                border: 'border-[#EFD2AD]/50',
                completedArrow: '#D18411',
                upcomingArrow: '#94A3B8',
                completedText: 'text-[#D18411]',
                upcomingText: 'text-gray-500',
                currentStage: 'text-[#D18411]'
              }}
            />
            <div className="w-full flex justify-between items-center mt-8 mb-4">
              <div className="flex items-center gap-2 bg-[#fff9ec] py-2 px-4 rounded-lg border border-[#E8C375]/20 hover:border-[#E8C375]/40 transition-colors">
                <img src="/images/chains/bsc.svg" alt="BSC" className="w-6 h-6" />
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
    [stages]
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
                    style={{
                      visibility: isPopoverOpen ? 'hidden' : 'visible',
                      transition: 'visibility 0.2s'
                    }}
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
