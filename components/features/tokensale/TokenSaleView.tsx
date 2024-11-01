import { AuditedBadge } from "@/components/shared/AuditedBadge";
import SaleCard from "./SaleCard";
import { TokenSaleProgress } from "./ProgressBar";
import { Card } from "@/components/ui/card"; // Adjust the import path as needed

export function TokenSaleView() {
  const totalStages = 8;
  const stages = Array.from({ length: totalStages }, (_, i) => ({
    number: i + 1,
    price: 0.1 * (i + 1),
    // Ensure even distribution across 0-100%
    position: i === 0 ? 0 : i === totalStages - 1 ? 100 : (i * 100) / (totalStages - 1)
  }));

  return (
    <div className="relative w-full h-full border-solid border-[1.5px] rounded-lg border-[#e2ceb2] overflow-auto shadow-md ">
      <Card className="hover:shadow-lg w-4/5 p-4 bg-transparent border-0 shadow-none hover:bg-[#f8f7f4]p-12 justify-self-center">
        <TokenSaleProgress
          currentStage={3}
          totalStages={totalStages}
          stages={stages}
        />
      </Card>
      <div className="flex flex-col items-center justify-center h-full">
        <SaleCard />
      </div>
      <div className="absolute right-4 bottom-4">
        <AuditedBadge />
      </div>
    </div>
  );
}
