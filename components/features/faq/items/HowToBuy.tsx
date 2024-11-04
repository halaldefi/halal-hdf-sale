import { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export function HowToBuy({ openItems }: { openItems: string[] }) {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

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
              Watch our step-by-step video guide:{" "}
              <span
                className="text-primary cursor-pointer hover:underline"
                onClick={() => setIsVideoDialogOpen(true)}
              >
                Watch Now
              </span>
            </p>

            <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
              <DialogContent
                className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[95vw] w-full md:max-w-[92vw] lg:max-w-[1600px] bg-transparent border-0 p-2"
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  margin: 0,
                  height: '90vh'
                }}
              >
                <div className="relative w-full h-full bg-black/5 rounded-lg shadow-xl">
                  <DialogClose className="absolute -top-3 -right-3 rounded-full w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors duration-200 z-10 shadow-md hover:shadow-lg">
                    <Cross2Icon className="h-6 w-6" />
                  </DialogClose>
                  <iframe
                    src="https://www.loom.com/embed/f49f5be56d2d4b4a84f8792996ccec50?sid=3a2a6f5b-4cbf-4b53-820e-52596ba83603&hideEmbedTopBar=true"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                    style={{ height: 'calc(90vh - 16px)' }}
                  />
                </div>
              </DialogContent>
            </Dialog>

          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
