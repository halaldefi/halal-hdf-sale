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
    Array.from({ length: 8 }, (_, i) => ({
      number: i + 1,
      price: 0.1 * (i + 1),
      position: i === 0 ? 2 : i === 7 ? 98 : 2 + (i * 96) / (8 - 1)
    })), []
  );

  const baseProgressBar = useMemo(() =>
    <TokenSaleProgress
      currentStage={3}
      progressColor="bg-[#E8C375]"
      progressBackgroundColor="bg-[#fff9ec]"
      completedStageColor="bg-[#D18411]"
      upcomingStageColor="bg-gray-300"
      borderColor="border-[#EFD2AD]"
      currentStageArrowColor="#1F2937"
      currentStageTextColor="text-gray-800"
      stages={stages}
    />,
    [stages]
  );

  const enhancedProgressBar = useMemo(() =>
    <div className="absolute bottom-0 w-full z-20">
      <Card className="w-full h-96 relative">
        <button
          onClick={() => setIsPopoverOpen(false)}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close enhanced view"
        >
          <X className="h-4 w-4" />
        </button>
        <CardHeader className="bg-[#f5f5f5]">
          <CardTitle className="text-gray-800">Token Sale Progress</CardTitle>
        </CardHeader>
        <CardContent className="h-[calc(24rem-72px)]">
          <div className="grid place-items-end h-full">
            <TokenSaleProgress
              currentStage={3}
              progressColor="bg-[#E8C375]"
              progressBackgroundColor="bg-[#fff9ec]"
              completedStageColor="bg-[#D18411]"
              upcomingStageColor="bg-gray-300"
              borderColor='border-[#EFD2AD]'
              completedArrowColor="#9CA3AF"
              upcomingArrowColor="#9CA3AF"
              completedPriceColor="text-gray-400"
              upcomingPriceColor="text-gray-400"
              currentStageArrowColor="#D18411"
              currentStageTextColor="text-[#D18411]"
              stages={stages}
              isEnhanced={true}
            />
            <div className="text-lg font-medium text-gray-800 mb-4">
              <span className="font-semibold">Total Token Sold:</span>{' '}
              <span className="font-bold text-[#D18411]">32.73M</span>
              <span className="text-gray-800">/85M</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>,
    [stages]
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 font-[family-name:var(--font-inter)] overflow-hidden">
        <div className="flex flex-col md:flex-row md:h-[calc(100vh-64px)]">
          <div className="w-full md:w-2/3 p-6 md:border-r overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="md:min-h-[650px] h-full flex flex-col items-center justify-center gap-4 md:gap-16 md:py-6 border-b border-gray-200 md:border-none">
              <div className="w-full px-4 flex grow flex-col pt-4 justify-center items-center">
                <h2 className="pt-8 text-xl sm:text-2xl md:text-3xl font-semibold md:font-medium text-center px-4 pb-4 md:pb-8">
                  Buy $HDF
                </h2>
                <SaleCard />
              </div>
              <div className="w-full max-w-4xl px-4 mt-auto py-8 mb-4 md:mb-10">
                <HoverPopover
                  className="w-full"
                  content={enhancedProgressBar}
                  onOpenChange={setIsPopoverOpen}
                >
                  <div
                    className="w-full mx-auto"
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
