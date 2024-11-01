import SaleCard from "./SaleCard";
import { TokenSaleProgress } from "./ProgressBar";
import { HoverPopover } from "./HoverPopover";
import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function TokenSaleView() {
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
      progressBackgroundColor="bg-[#f5f3ef]"
      completedStageColor="bg-[#D18411]"
      upcomingStageColor="bg-gray-300"
      borderColor="border-[#EFD2AD]"
      arrowColor='text-black'
      priceColor='text-black'
      stages={stages}
    />,
    [stages]
  );

  const enhancedProgressBar = useMemo(() =>
    <div className="absolute bottom-0 w-full">
      <Card className="w-full h-96">
        <CardHeader>
          <CardTitle>Token Sale Progress</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
      <TokenSaleProgress
        currentStage={3}
        progressColor="bg-[#000]"
        progressBackgroundColor="bg-[#f5f3ef]"
        completedStageColor="bg-[#D18411]"
        upcomingStageColor="bg-gray-300"
        borderColor="border-[#EFD2AD]"
        arrowColor='text-black'
        priceColor='text-black'
        stages={stages}
          />
        </CardContent>
      </Card>
    </div>,
    [stages]
  );

  return (
    <div className="relative flex justify-center justify-items-center w-full h-full border-2 rounded-lg border-[#EFD2AD] shadow-md">
      <div className="flex flex-col items-center h-full pb-16 w-full justify-center">
        <SaleCard />
      </div>
      <div className="absolute bottom-2 w-full">
        <HoverPopover
          className="w-full"
          content={enhancedProgressBar}
          onOpenChange={setIsPopoverOpen}
          style={{
          }}
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
