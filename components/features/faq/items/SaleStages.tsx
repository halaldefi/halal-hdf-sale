import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { saleStages } from "../data/faq-data";
import { getStatusBadge } from "../utils/faq-utils";

export function SaleStages() {
  return (
    <AccordionItem
      value="item-4"
      className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
    >
      <AccordionTrigger className="hover:no-underline">Sale Stages</AccordionTrigger>
      <AccordionContent>
        <p className="text-[16px] mb-4">
          The token sale is divided into multiple stages to ensure fair distribution:
        </p>
        <div className="space-y-4">
          {saleStages.map((stage, index) => (
            <div key={stage.name} className="rounded-lg border p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{stage.name}</h3>
                <span className={getStatusBadge(stage.status)}>
                  {stage.status.charAt(0).toUpperCase() + stage.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Allocation</p>
                  <p className="font-medium">{stage.allocation}</p>
                </div>
                <div>
                  <p className="text-gray-500">Price</p>
                  <p className="font-medium">{stage.price}</p>
                </div>
                {stage.status === "active" && (
                  <div>
                    <p className="text-gray-500">Tokens Sold</p>
                    <p className="font-medium">{stage.tokensSold} / 1M</p>
                  </div>
                )}
                <div>
                  <p className="text-gray-500">Investment Limits</p>
                  <p className="font-medium">{`${stage.minBuy} - ${stage.maxBuy}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
