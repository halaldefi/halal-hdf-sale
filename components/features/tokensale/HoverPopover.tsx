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
    <HoverCard openDelay={0} closeDelay={0} onOpenChange={onOpenChange}>
      <HoverCardTrigger asChild className={className}>
        <div className="w-full cursor-help">{children}</div>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-[calc(100vw-3rem)] md:w-[calc(66.666667vw-3rem)] backdrop-blur-sm bg-background/95 border-primary/20"
        sideOffset={5}
      >
        {content}
      </HoverCardContent>
    </HoverCard>
  )
}
