"use client"

import { CalendarDays, X } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useState } from "react"

interface HoverPopoverProps {
  children: React.ReactNode
  content: React.ReactNode
  className?: string
  onOpenChange?: (open: boolean) => void
  interactionMode?: 'hover' | 'click' | 'both'
}

export function HoverPopover({ 
  children, 
  content, 
  className, 
  onOpenChange,
  interactionMode = 'hover'
}: HoverPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  const handleClick = () => {
    if (interactionMode === 'click' || interactionMode === 'both') {
      setIsOpen(!isOpen);
      onOpenChange?.(!isOpen);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    onOpenChange?.(false);
  };

  return (
    <HoverCard 
      open={isOpen}
      openDelay={0} 
      closeDelay={0} 
      onOpenChange={(open) => {
        if (interactionMode === 'hover' || interactionMode === 'both') {
          handleOpenChange(open);
        }
      }}
    >
      <HoverCardTrigger asChild className={className}>
        <div 
          className={`w-full transition-all duration-200 hover:opacity-80 ${
            interactionMode !== 'hover' ? 'cursor-pointer' : 'cursor-help'
          }`}
          onClick={handleClick}
        >
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-[calc(100vw-3rem)] md:w-[calc(66.666667vw-3rem)] 
          bg-white/95 backdrop-blur-md
          border border-[#E8C375]/20
          shadow-[0_4px_20px_-2px_rgba(209,132,17,0.1)]
          rounded-xl 
          transition-all duration-300 ease-out
          data-[side=bottom]:animate-slide-up-fade
          data-[side=top]:animate-slide-down-fade
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        sideOffset={8}
        align="center"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-[#fef8eb] bg-gray-100 transition-colors z-50  hover:text-[#d18411]"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-800 hover:text-[#d18411]" />
        </button>
        <div className="relative">
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-b from-[#D18411]/5 to-transparent rounded-xl opacity-50" />
          {content}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
