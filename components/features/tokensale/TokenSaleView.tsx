import { AuditedBadge } from "@/components/shared/AuditedBadge";
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
    <TokenSaleProgress currentStage={3} stages={stages} />, 
    [stages]
  );

  return (
    <div className="relative w-full h-full border-[1.5px] rounded-lg border-[#e2ceb2] overflow-auto shadow-md">
      <div className="flex flex-col items-center justify-center h-full">
        <HoverPopover 
          className="w-full"
          width="700px"
          height="40px"
          content={progressBar}
          onOpenChange={setIsPopoverOpen}
        >
          <div 
            className="w-4/5 p-4 justify-self-center" 
            style={{
              visibility: isPopoverOpen ? 'hidden' : 'visible',
              transition: 'visibility 0.2s'
            }}
          >
            {progressBar}
          </div>
        </HoverPopover>
        <SaleCard />
        <div className="absolute right-4 bottom-4">

        <AuditedBadge />
        </div>
      </div>
    </div>
  );
}
