"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import Image from "next/image"

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
    icon: "/images/chains/arbitrum.svg",
  },
  {
    value: "bsc",
    label: "Binance Smart Chain",
    icon: "/images/chains/bsc.svg",
  },
  {
    value: "eth",
    label: "Ethereum",
    icon: "/images/chains/ethereum.svg",
  },
]

export function ChainSelector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("arb")

  const selectedChain = chains.find((chain) => chain.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full text-base font-medium"
        >
          <div className="flex items-center gap-2">
            {selectedChain && (
              <div className="relative w-6 h-6">
                <Image
                  src={selectedChain.icon}
                  alt={selectedChain.label}
                  width={24}
                  height={24}
                  className="object-contain h-6"
                />
              </div>
            )}
            {selectedChain?.label || "Select chain..."}
          </div>
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
          <CommandList className="py-2">
            <CommandGroup>
              {chains.map((chain) => (
                <CommandItem
                  key={chain.value}
                  value={chain.value}
                  className="text-base font-medium px-3 py-2"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6">
                      <Image
                        src={chain.icon}
                        alt={chain.label}
                        width={24}
                        height={24}
                        className="object-contain h-6"
                      />
                    </div>
                    {chain.label}
                  </div>
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
