import { AuditedBadge } from "@/components/shared/AuditedBadge";
import SaleCard from "./SaleCard";

export function TokenSaleView() {
  return (
    <div className="relative w-full h-full border-solid border-[1.5px] rounded-lg border-[#e2ceb2] overflow-auto shadow-[4px_4px_16px_rgba(197,156,101,0.25)]">
      <div className="flex flex-col items-center justify-center h-full">
        <SaleCard />
      </div>
      <div className="absolute right-4 bottom-4">
        <AuditedBadge />
      </div>
    </div>
  );
}
