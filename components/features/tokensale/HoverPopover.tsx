import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useState, useRef } from "react";

interface HoverPopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  delay?: number;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  alignOffset?: number;
  width?: string | number;
  height?: string | number;
  onOpenChange?: (open: boolean) => void;
}

export const HoverPopover = ({ 
  children, 
  content, 
  delay = 100,
  align = "center",
  side = "top",
  sideOffset = -40,
  alignOffset = 0,
  width,
  height,
  onOpenChange,
  ...props 
}: HoverPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
    onOpenChange?.(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      onOpenChange?.(false);
    }, delay); // Small delay to prevent flickering
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        align={align}
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        style={{
          width: width,
          height: height
        }}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};
