import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function OtherInfo() {
  return (
    <AccordionItem 
      value="item-5" 
      className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
    >
      <AccordionTrigger className="hover:no-underline">Other Info</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4 text-[16px]">
          <div>
            <h3 className="font-semibold mb-2">Vesting Schedule</h3>
            <p>Tokens are released immediately after purchase with no vesting period.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Token Utility</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Governance rights in the Halal DeFi ecosystem</li>
              <li>Access to exclusive features and products</li>
              <li>Staking rewards and yield farming opportunities</li>
              <li>Trading fee discounts on the platform</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Security Measures</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Smart contract audited by leading security firms</li>
              <li>Anti-whale mechanisms implemented</li>
              <li>Locked liquidity for 2 years</li>
              <li>Transparent and verified source code</li>
            </ul>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
