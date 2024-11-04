import { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

export function HowToBuy({ openItems }: { openItems: string[] }) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <AccordionItem 
      value="item-1" 
      className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
    >
      <AccordionTrigger className="hover:no-underline">How to Buy</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Purchase Options:</h3>
            <p className="text-[16px]">
              You can buy $HDF tokens on either Binance Smart Chain (BSC) or Arbitrum network. The tokens are fully interoperable between chains thanks to Axelar ITS integration.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Step-by-Step Guide:</h3>
            
            <div className="bg-white rounded-lg border p-4">
              <h4 className="font-medium mb-2">1. Choose Your Network</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Select either BSC or Arbitrum network in your wallet</li>
                <li>Ensure you have enough USDT for your purchase plus gas fees</li>
                <li>Both chains offer identical pricing and allocation</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h4 className="font-medium mb-2">2. Connect & Purchase</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Connect your Web3 wallet to our platform</li>
                <li>Enter the amount of USDT you wish to invest</li>
                <li>Approve the USDT spending (first-time only)</li>
                <li>Confirm the purchase transaction</li>
                <li>Note: A 1% transaction tax applies to all purchases</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border p-4">
              <h4 className="font-medium mb-2">3. Cross-Chain Transfers (Optional)</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can move tokens between BSC and Arbitrum anytime</li>
                <li>Use the built-in cross-chain transfer feature</li>
                <li>Transfers are powered by Axelar ITS for security</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#F8F6F2] p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Important Notes:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum purchase: 100 USDT</li>
              <li>Maximum purchase: 50,000 USDT per transaction</li>
              <li>Price increases by $0.002 for every 1M tokens sold</li>
              <li>The same price applies across both chains</li>
            </ul>
          </div>

          <div>
            <p className="text-[16px] mb-4">
              Watch our step-by-step video guide:
            </p>
            <div 
              className="relative w-full"
              style={{ 
                paddingBottom: '56.25%',
                display: 'block',
              }}
            >
              {isVideoLoading && openItems.includes('item-1') && (
                <Skeleton 
                  className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded-lg"
                />
              )}
              {openItems.includes('item-1') && (
                <iframe 
                  src="https://www.loom.com/embed/f49f5be56d2d4b4a84f8792996ccec50?sid=3a2a6f5b-4cbf-4b53-820e-52596ba83603&hideEmbedTopBar=true" 
                  frameBorder="0" 
                  allowFullScreen 
                  loading="eager"
                  className="absolute top-0 left-0 w-full h-full"
                  onLoad={() => setIsVideoLoading(false)}
                />
              )}
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
