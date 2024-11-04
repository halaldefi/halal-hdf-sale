import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { priceTiers } from "../data/faq-data";

export function TokenPricing() {
  return (
    <AccordionItem 
      value="item-3" 
      className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
    >
      <AccordionTrigger className="hover:no-underline">Token Pricing</AccordionTrigger>
      <AccordionContent>
        <p className="text-[16px] mb-4">
          The token price increases by $0.002 for every million tokens sold. Here&apos;s a breakdown of the price tiers:
        </p>
        <div className="rounded-lg overflow-hidden border mb-4">
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
        <div className="space-y-4">
          <p className="text-[16px]">
            Important Notes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Initial price starts at $0.10 per token</li>
            <li>Price increases by $0.002 after each 1,000,000 tokens are sold</li>
            <li>A 1% transaction tax applies to all buy and sell transactions</li>
            <li>The tax revenue is automatically directed to the treasury wallet</li>
          </ul>
        </div>
        <div className="relative h-40 w-full bg-[#F8F6F2] rounded-lg p-4 mt-4">
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
  );
}
