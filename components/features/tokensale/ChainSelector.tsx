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
          className="justify-between w-full text-base font-medium bg-white border border-[#E8C375]/20
            shadow-sm hover:shadow-md transition-all duration-200 ease-out
            hover:border-[#E8C375]/40 hover:bg-gray-50
            rounded-xl py-2.5 px-4"
        >
          <div className="flex items-center gap-3">
            {selectedChain && (
              <div className="relative w-7 h-7">
                <Image
                  src={selectedChain.icon}
                  alt={selectedChain.label}
                  width={28}
                  height={28}
                  className="object-contain h-7"
                />
              </div>
            )}
            <span className="text-[#222222]">
              {selectedChain?.label || "Select chain..."}
            </span>
          </div>
          <CaretSortIcon className="w-5 h-5 ml-2 text-[#8D8D8D] transition-transform duration-200
            group-hover:text-[#D18411]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="p-0 w-[--radix-popover-trigger-width] border border-[#E8C375]/20
          shadow-lg backdrop-blur-sm bg-white/95 rounded-xl
          animate-in fade-in-0 zoom-in-95
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95" 
        align="start"
        sideOffset={8}
      >
        <Command 
          className="w-full"
          style={{
            fontFamily: 'var(--font-inter), system-ui, Arial, Helvetica, sans-serif'
          }}
        >
          <CommandList className="py-2">
            <CommandGroup>
              {chains.map((chain) => (
                <CommandItem
                  key={chain.value}
                  value={chain.value}
                  className="text-base font-medium px-4 py-3 m-1 rounded-lg
                    transition-colors duration-200 ease-out
                    data-[selected=true]:bg-[#fff9ec]
                    hover:bg-[#fff9ec]"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-7 h-7">
                      <Image
                        src={chain.icon}
                        alt={chain.label}
                        width={28}
                        height={28}
                        className="object-contain h-7"
                      />
                    </div>
                    <span className="text-[#222222]">{chain.label}</span>
                  </div>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-5 w-5 text-[#D18411]",
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
