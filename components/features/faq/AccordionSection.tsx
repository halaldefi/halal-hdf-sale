import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { HowToBuy } from "./items/HowToBuy";
import { ProjectDetails } from "./items/ProjectDetails";
import { TokenPricing } from "./items/TokenPricing";
import { SaleStages } from "./items/SaleStages";
import { OtherInfo } from "./items/OtherInfo";

export function AccordionSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleValueChange = (value: string[]) => {
    setOpenItems(value);
  };

  return (
    <div className="p-4 h-full flex">
      <div className="w-full my-auto">
        <Accordion 
          type="multiple" 
          className="w-full text-2xl text-zinc-500 space-y-2"
          value={openItems}
          onValueChange={handleValueChange}
        >
          <HowToBuy openItems={openItems} />
          <ProjectDetails />
          <TokenPricing />
          <SaleStages />
          <OtherInfo />
        </Accordion>
      </div>
    </div>
  );
}
