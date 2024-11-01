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
  );
}
