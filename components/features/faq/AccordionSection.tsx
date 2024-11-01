import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"

const projectDetails = [
  {
    feature: "Token Name",
    details: "Halal DeFi (HDF)",
  },
  {
    feature: "Total Supply",
    details: "1,000,000,000 HDF",
  },
  {
    feature: "Network",
    details: "• Binance Smart Chain (BSC) \n• Arbitrum (ARB)",
  },
  {
    feature: "Token Type",
    details: "BEP-20",
  },
  {
    feature: "Initial Price",
    details: "$0.10",
  },
  {
    feature: "Max Supply for Sale",
    details: "85,000,000 HDF",
  },
  {
    feature: "Token Distribution",
    details: "• 85% for Public Sale\n• 15% for Liquidity\n• No Team Tokens\n• No Airdrops",
  }
]

const priceTiers = [
  { tier: "First 1M tokens", price: "$0.100" },
  { tier: "1M - 2M tokens", price: "$0.104" },
  { tier: "2M - 3M tokens", price: "$0.108" },
  { tier: "3M - 4M tokens", price: "$0.112" },
  { tier: "4M - 5M tokens", price: "$0.116" },
];

const saleStages = [
  {
    name: "Stage 3",
    allocation: "1,000,000 HDF",
    price: "$0.100",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    minBuy: "100 USDT",
    maxBuy: "50,000 USDT",
    tokensSold: "750,000"
  },
  {
    name: "Stage 4",
    allocation: "1,000,000 HDF",
    price: "Starting at $0.104",
    status: "upcoming",
    startDate: "2024-02-16",
    endDate: "2024-03-15",
    minBuy: "50 USDT",
    maxBuy: "25,000 USDT"
  },
  {
    name: "Stage 5",
    allocation: "1,000,000 HDF",
    price: "Starting at $0.108",
    status: "upcoming",
    startDate: "2024-03-16",
    endDate: "2024-04-15",
    minBuy: "50 USDT",
    maxBuy: "100,000 USDT"
  },
];

const getStatusBadge = (status: string) => {
  const styles = {
    active: "bg-green-100 text-green-800 border-green-200",
    upcoming: "bg-blue-100 text-blue-800 border-blue-200",
    completed: "bg-gray-100 text-gray-800 border-gray-200"
  };
  return `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status as keyof typeof styles]}`;
};

export function AccordionSection() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleValueChange = (value: string[]) => {
    setOpenItems(value);
    // Reset loading state when "item-1" is opened
    if (value.includes('item-1') && !openItems.includes('item-1')) {
      setIsVideoLoading(true);
    }
  };

  return (
    <Accordion 
      type="multiple" 
      className="w-full text-2xl text-zinc-500 space-y-2"
      value={openItems}
      onValueChange={handleValueChange}
    >
      <AccordionItem 
        value="item-1" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger className="hover:no-underline">How to Buy</AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] pb-1">
            You can buy by following the steps below:
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
        </AccordionContent>
      </AccordionItem>
      <AccordionItem 
        value="item-2" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger className="hover:no-underline">Project Details</AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] mb-4">
            Key information about the Halal DeFi Token project:
          </p>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100 hover:bg-gray-100">
                  <TableHead className="w-[200px] font-semibold">Feature</TableHead>
                  <TableHead className="font-semibold">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectDetails.map((item, index) => (
                  <TableRow 
                    key={item.feature} 
                    className={
                      index % 2 === 0 
                        ? "bg-white hover:bg-gray-50" 
                        : "bg-[#F8F6F2] hover:bg-[#F1EFE9]"
                    }
                  >
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell className="whitespace-pre-line">{item.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem 
        value="item-3" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger className="hover:no-underline">Token Pricing</AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] mb-4">
            The token price increases by 4% for every million tokens sold. Here's a breakdown of the price tiers:
          </p>
          <div className="rounded-md border mb-4">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100 hover:bg-gray-100">
                  <TableHead className="font-semibold">Token Range</TableHead>
                  <TableHead className="font-semibold">Price per Token</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {priceTiers.map((tier, index) => (
                  <TableRow 
                    key={tier.tier}
                    className={index % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-[#F8F6F2] hover:bg-[#F1EFE9]"}
                  >
                    <TableCell>{tier.tier}</TableCell>
                    <TableCell>{tier.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="relative h-40 w-full bg-[#F8F6F2] rounded-lg p-4">
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-gray-300 rounded">
              {priceTiers.map((_, index) => (
                <div
                  key={index}
                  style={{ left: `${(index) * 25}%` }}
                  className="absolute h-6 w-1 bg-[#D18411] -top-2"
                />
              ))}
            </div>
            {priceTiers.map((tier, index) => (
              <div
                key={index}
                style={{ left: `${(index) * 25}%` }}
                className="absolute -translate-x-1/2 bottom-8 text-sm font-medium"
              >
                {tier.price}
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
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
    </Accordion>
  )
}
