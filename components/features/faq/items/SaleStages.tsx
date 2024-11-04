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
        <div className="space-y-4">
          <p className="text-[16px]">
            The token sale follows a dynamic pricing model with cross-chain deployment:
          </p>
          
          <div className="bg-[#F8F6F2] p-4 rounded-lg space-y-2">
            <h4 className="font-semibold">Key Sale Features:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Total tokens for sale: 90M (45M on BSC, 45M on Arbitrum)</li>
              <li>Dynamic pricing starting at $0.10</li>
              <li>Price increases by $0.002 after each 1M tokens sold</li>
              <li>1% transaction tax on all purchases</li>
              <li>Cross-chain compatibility via Axelar ITS</li>
            </ul>
          </div>

          <p className="text-[16px] mt-6 mb-4">
            Current sale stages across both chains:
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
                    <p className="text-gray-500">Allocation per Chain</p>
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

          <div className="bg-[#F8F6F2] p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Important Notes:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tokens can be purchased on either BSC or Arbitrum</li>
              <li>Price increases apply simultaneously across both chains</li>
              <li>Seamless cross-chain transfers available via Axelar ITS</li>
              <li>Smart contract ensures automatic price adjustments</li>
            </ul>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
