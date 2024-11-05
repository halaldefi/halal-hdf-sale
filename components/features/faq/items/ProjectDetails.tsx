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
import { projectDetails } from "../data/faq-data";

export function ProjectDetails() {
  return (
    <AccordionItem 
      value="item-2" 
      className="transition-colors duration-200 hover:bg-[#F8F6F2] shadow-sm  px-4 data-[state=open]:bg-[#f8f7f4] data-[state=open]:rounded-md"
    >
      <AccordionTrigger className="hover:no-underline">Project Details</AccordionTrigger>
      <AccordionContent>
        <p className="text-[16px] mb-4">
          Key information about the Halal DeFi Token project:
        </p>
        <div className="rounded-lg border overflow-hidden">
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
  );
}
