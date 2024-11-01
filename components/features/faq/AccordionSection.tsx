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
            <iframe 
              src="https://www.loom.com/embed/f49f5be56d2d4b4a84f8792996ccec50?sid=3a2a6f5b-4cbf-4b53-820e-52596ba83603&hideEmbedTopBar=true" 
              frameBorder="0" 
              allowFullScreen 
              loading="eager"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem 
        value="item-2" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger className="hover:no-underline">Project Details</AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px]">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem 
        value="item-3" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger className="hover:no-underline">Token Pricing</AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px]">Price of the Token will increase by 4 per million $HDF (single batch) sold. and other details will be here.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem 
        value="item-4" 
        className="transition-colors duration-200 hover:bg-[#F8F6F2] px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
      >
        <AccordionTrigger className="hover:no-underline">Other Info</AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px]">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
