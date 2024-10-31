import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionSection() {
  return (
    <Accordion type="multiple" className="w-full text-2xl text-zinc-500 space-y-2">
      <AccordionItem 
        value="item-1" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger>How to Buy</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem 
        value="item-2" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger>Project Details</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem 
        value="item-3" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger>Token Pricing</AccordionTrigger>
        <AccordionContent>
          Price of the Token will increase by 4 per million $HDF (single batch) sold. and other details will be here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem 
        value="item-4" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger>Other Info</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
