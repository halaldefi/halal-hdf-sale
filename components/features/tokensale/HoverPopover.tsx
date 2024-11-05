"use client"

import { CalendarDays } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface HoverPopoverProps {
  children: React.ReactNode
  content: React.ReactNode
  className?: string
  onOpenChange?: (open: boolean) => void
}

export function HoverPopover({ 
  children, 
  content, 
  className, 
  onOpenChange 
}: HoverPopoverProps) {
  return (
    <HoverCard 
      openDelay={0} 
      closeDelay={0} 
      onOpenChange={onOpenChange}
    >
      <HoverCardTrigger asChild className={className}>
        <div className="w-full cursor-help transition-opacity duration-200 hover:opacity-80">
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-[calc(100vw-3rem)] md:w-[calc(66.666667vw-3rem)] 
          backdrop-blur-md bg-white/95 
          border border-[#E8C375]/20
          shadow-lg
          rounded-xl
          transition-all duration-300 ease-out
          animate-in fade-in-0 zoom-in-95
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        sideOffset={8}
        align="center"
      >
        <div className="relative">
          {content}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
