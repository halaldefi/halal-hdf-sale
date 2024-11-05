import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function OtherInfo() {
  return (
    <AccordionItem 
      value="item-5" 
      className="transition-colors duration-200 hover:bg-[#F8F6F2] shadow-sm  px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
    >
      <AccordionTrigger className="hover:no-underline">Other Info</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-6 text-[16px]">
          <div>
            <h3 className="font-semibold mb-2">Cross-Chain Architecture</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Native deployment on both BSC and Arbitrum networks</li>
              <li>Seamless cross-chain transfers via Axelar ITS</li>
              <li>Identical token functionality across both chains</li>
              <li>Synchronized price updates and token sales</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Transaction Tax System</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>1% tax on all buy and sell transactions</li>
              <li>Tax revenue directed to treasury wallet</li>
              <li>Supports sustainable fund management</li>
              <li>Tax applies consistently across both chains</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Token Utility</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Governance rights in the Halal DeFi ecosystem</li>
              <li>Access to exclusive Shariah-compliant DeFi products</li>
              <li>Cross-chain DeFi opportunities</li>
              <li>Platform fee discounts across supported chains</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Security & Compliance</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Smart contracts audited by leading security firms</li>
              <li>Axelar ITS ensures secure cross-chain operations</li>
              <li>Automated price adjustments via smart contract</li>
              <li>Transparent and verified source code on both chains</li>
              <li>Shariah-compliant token structure and mechanics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Technical Implementation</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>ERC-20/BEP-20 standard token contracts</li>
              <li>Axelar ITS integration for cross-chain functionality</li>
              <li>Automated price adjustment mechanism</li>
              <li>Real-time synchronization between chains</li>
              <li>Gas-optimized smart contract implementation</li>
            </ul>
          </div>

          <div className="bg-[#F8F6F2] p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Important Notes</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tokens are released immediately after purchase with no vesting period</li>
              <li>The total supply is fixed at 100 million tokens</li>
              <li>90% of tokens available for public sale</li>
              <li>10% reserved for liquidity provision</li>
              <li>No team tokens or airdrops</li>
            </ul>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
