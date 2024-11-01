import SaleCard from "./SaleCard";
import { TokenSaleProgress } from "./ProgressBar";
import { HoverPopover } from "./HoverPopover";
import { useMemo, useState } from "react";

export function TokenSaleView() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  const stages = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      number: i + 1,
      price: 0.1 * (i + 1),
      position: i === 0 ? 0 : i === 7 ? 100 : (i * 100) / 7
    })), []
  );

  const progressBar = useMemo(() => 
    <TokenSaleProgress
      currentStage={3}
      progressColor="bg-[#E8C375]"
      progressBackgroundColor="bg-[#f5f3ef]"
      completedStageColor="bg-green-200"
      upcomingStageColor="bg-[#D18411]"
      borderColor="border-[#EFD2AD]"
      arrowColor='text-[#E8C375]'
      priceColor='text-[#E8C375]'
      stages={stages} 
    />, 
    [stages]
  );

  return (
    <div className="relative flex justify-center justify-items-center w-full h-full border-2 rounded-lg border-[#EFD2AD] shadow-md">
      <div className="flex flex-col items-center h-full pb-16 w-full">
        <SaleCard />
      </div>
      <div className="absolute bottom-2 w-full px-2">
        <HoverPopover
          className="w-full"
          width="700px"
          height="40px"
          content={progressBar}
          onOpenChange={setIsPopoverOpen}
        >
          <div
            className="w-full mx-auto"
            style={{
              visibility: isPopoverOpen ? 'hidden' : 'visible',
              transition: 'visibility 0.2s'
            }}
          >
            {progressBar}
          </div>
        </HoverPopover>
      </div>
    </div>
  );
}
