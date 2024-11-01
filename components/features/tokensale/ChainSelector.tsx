"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const chains = [
  {
    value: "arb",
    label: "Arbitrum",
  },
  {
    value: "bsc",
    label: "Binance Smart Chain",
  },
  {
    value: "eth",
    label: "Ethereum",
  },
]

export function ChainSelector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("arb")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full text-base font-medium"
        >
          {value
            ? chains.find((chain) => chain.value === value)?.label
            : "Select chain..."}
          <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[--radix-popover-trigger-width]" align="start">
        <Command 
          className="w-full"
          style={{
            fontFamily: 'var(--font-urbanist), system-ui, Arial, Helvetica, sans-serif'
          }}
        >
          <CommandList>
            <CommandGroup>
              {chains.map((chain) => (
                <CommandItem
                  key={chain.value}
                  value={chain.value}
                  className="text-base font-medium"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {chain.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === chain.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
