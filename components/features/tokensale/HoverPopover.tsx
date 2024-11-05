"use client"

import { X } from "lucide-react"
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
          className={`w-full will-change-transform
            transition-all duration-300 ease-soft
            hover:opacity-90 active:opacity-100 active:scale-[0.99]
            ${interactionMode !== 'hover' ? 'cursor-pointer' : 'cursor-help'}`}
          onClick={handleClick}
        >
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-[calc(100vw-3rem)] md:w-[calc(66.666667vw-3rem)] 
          bg-white/95 backdrop-blur-md
          border border-[#E8C375]/30
          shadow-lg
          rounded-xl 
          will-change-transform
          transition-all duration-300 ease-bounce
          data-[state=open]:animate-scale-in
          data-[state=closed]:animate-fade-out
          fixed -bottom-[1rem] left-1/2 -translate-x-1/2"
        side="bottom"
        align="center"
        sideOffset={0}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 p-1.5 rounded-full 
            transition-all duration-300 ease-soft
            hover:bg-[#fef8eb] hover:text-[#d18411] hover:scale-110
            active:scale-95
            bg-gray-100/80 backdrop-blur-sm
            group"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-800 
            transition-colors duration-300 ease-soft 
            group-hover:text-[#d18411]" />
        </button>
        <div className="relative">
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 
            bg-gradient-to-b from-[#D18411]/5 to-transparent rounded-xl opacity-50" />
          <div className="relative">
            {content}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
