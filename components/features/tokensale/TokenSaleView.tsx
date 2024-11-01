import SaleCard from "./SaleCard";
import { TokenSaleProgress } from "./ProgressBar";
import { HoverPopover } from "./HoverPopover";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

export function TokenSaleView() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

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
    [stages, isMobile]
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
    [stages, isMobile]
  );

  return (
    <div className={cn(
      "relative grid w-full h-full border-2 rounded-lg shadow-md",
      isMobile ? "border-transparent" : "border-[#EFD2AD]"
    )}>
      <div className="grid place-items-center h-full pb-16 w-full">
        <SaleCard />
      </div>
      <div className="absolute bottom-2 w-full">
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
  );
}
