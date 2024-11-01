import { AuditedBadge } from "@/components/shared/AuditedBadge";
import SaleCard from "./SaleCard";
import { TokenSaleProgress } from "./ProgressBar";

export function TokenSaleView() {
  const totalStages = 8;
  const stages = Array.from({ length: totalStages }, (_, i) => ({
    number: i + 1,
    price: 0.1 * (i + 1),
    position: (100 / (totalStages - 1)) * i,
  }));

  return (
    <div className="relative w-full h-full border-solid border-[1.5px] rounded-lg border-[#e2ceb2] overflow-auto shadow-[4px_4px_16px_rgba(197,156,101,0.25)]">
      <TokenSaleProgress
        currentStage={3}
        totalStages={totalStages}
        stages={stages}
      />
      <div className="flex flex-col items-center justify-center h-full">
        <SaleCard />
      </div>
      <div className="absolute right-4 bottom-4">        <AuditedBadge />      </div>    </div>  );}