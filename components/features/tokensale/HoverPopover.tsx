import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useState, useRef, ReactNode } from "react";

interface HoverPopoverProps {
  children: ReactNode;
  content: ReactNode;
  delay?: number;
  className?: string;
  width?: string;
  height?: string;
  onOpenChange?: (open: boolean) => void;
  style?: React.CSSProperties;
}

export const HoverPopover = ({
  children,
  content,
  delay = 100,
  className,
  width,
  height,
  onOpenChange,
  style,
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
    }, delay);
  };

  // Add this new function to handle clicks in content
  const handleContentClick = (e: React.MouseEvent) => {
    // Check if the click was on a button
    if ((e.target as HTMLElement).closest('button')) {
      setIsOpen(false);
      onOpenChange?.(false);
    }
  };

  return (
    <div className="relative" style={style}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </div>
      {isOpen && (
        <div
          className="absolute left-0 right-0 z-50"
          style={{
            width: width,
            height: height,
            transition: 'all 0.2s ease-in-out',
            opacity: isOpen ? 1 : 0,
            transform: `scale(${isOpen ? 1 : 0.98})`,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleContentClick} // Add click handler here
        >
          {content}
        </div>
      )}
    </div>
  );
}