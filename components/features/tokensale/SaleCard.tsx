"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ChainSelector } from "./ChainSelector"
import { useState, useRef } from "react"

export default function SaleCard() {
  const [sellAmount, setSellAmount] = useState("100")
  const [buyAmount, setBuyAmount] = useState("5000")
  const sellInputRef = useRef<HTMLInputElement>(null)
  const buyInputRef = useRef<HTMLInputElement>(null)

  const handleNumericInput = (value: string, setter: (value: string) => void) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      if (!(value.split('.').length > 2)) {
        setter(value)
      }
    }
  }

  const focusInputAtEnd = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.focus()
      const length = inputRef.current.value.length
      inputRef.current.setSelectionRange(length, length)
    }
  }

  return (
    <Card className="bg-[#fff9ec] p-4 sm:p-6 space-y-4 w-full max-w-[475px] mx-auto shadow-lg rounded-xl border border-[#E8C375]/20">
      {/* Currency Selector */}
      <div className="w-full mb-2">
        <ChainSelector />
      </div>

      <div className="relative flex flex-col gap-3">
        {/* Sell Section */}
        <div 
          className="bg-white p-4 sm:p-5 rounded-xl border border-[#E8C375]/20 shadow-md 
            transition-all duration-200 ease-out hover:shadow-lg cursor-pointer
            transform hover:translate-y-[-2px]"
          onClick={() => focusInputAtEnd(sellInputRef)}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <p className="text-[#8D8D8D] text-sm sm:text-base font-medium tracking-wide">Sell</p>
              <input
                ref={sellInputRef}
                type="text"
                inputMode="decimal"
                value={sellAmount}
                placeholder="0"
                onChange={(e) => handleNumericInput(e.target.value, setSellAmount)}
                className="text-3xl sm:text-4xl font-medium bg-transparent outline-none w-40 mt-2
                  transition-colors duration-200 focus:text-[#D18411]"
              />
              <p className="text-[#8D8D8D] text-sm sm:text-base mt-2 font-medium">$499.64</p>
            </div>
            <div className="flex items-center px-4 py-2.5 bg-white rounded-xl border border-[#E8C375]/20 
              shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center justify-center h-8 w-8 relative -ml-2">
                <div className="absolute top-[1px] left-[1px] w-[30px] h-[30px] bg-[#FFFFFF35] rounded-full"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="16" cy="16" r="16" fill="#26A17B"/>
                    <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658s2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118s3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116s-3.301-1.914-7.694-2.117"/>
                  </g>
                </svg>
              </div>
              <span className="font-semibold text-[#222222] ml-2">USDT</span>
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="flex items-center justify-center bg-white border-4 border-[#fff9ec] rounded-xl p-2.5
              shadow-md transition-all duration-200 ease-out hover:shadow-lg
              transform hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              className="w-6 h-6 text-[#D18411]"
            >
              <path d="M12 5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M19 12L12 19L5 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>

        {/* Buy Section */}
        <div 
          className="bg-gray-50 p-4 sm:p-5 rounded-xl border border-[#E8C375]/20 shadow-md 
            transition-all duration-200 ease-out hover:shadow-lg cursor-pointer
            transform hover:translate-y-[-2px]"
          onClick={() => focusInputAtEnd(buyInputRef)}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <p className="text-[#8D8D8D] text-sm sm:text-base font-medium tracking-wide">Buy</p>
              <input
                ref={buyInputRef}
                type="text"
                inputMode="decimal"
                value={buyAmount}
                placeholder="0"
                onChange={(e) => handleNumericInput(e.target.value, setBuyAmount)}
                className="text-3xl sm:text-4xl font-medium bg-transparent outline-none w-40 mt-2
                  transition-colors duration-200 focus:text-[#D18411]"
              />
              <p className="text-[#8D8D8D] text-sm sm:text-base mt-2 font-medium">$498</p>
            </div>
            <div className="flex items-center px-4 py-2.5 bg-white rounded-xl border border-[#E8C375]/20 
              shadow-sm transition-all duration-200 cursor-pointer hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center justify-center h-8 w-8 relative -ml-2">
                <div className="absolute top-[1px] left-[1px] w-[30px] h-[30px] bg-[#FFFFFF35] rounded-full"></div>
                <Image
                  src="/images/hdf-logo.png"
                  alt="HDF Logo"
                  width={32}
                  height={32}
                  className="rounded-full object-contain"
                />
              </div>
              <span className="font-semibold text-[#222222] ml-2">HDF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <button 
        className="w-full text-white py-3 sm:py-4 rounded-xl font-semibold text-lg sm:text-xl
          bg-gradient-to-r from-[#D18411] to-[#E8C375] 
          shadow-md transition-all duration-200 ease-out
          hover:shadow-lg hover:from-[#bc770f] hover:to-[#d1b069]
          active:shadow-inner active:transform active:scale-[0.98]
          mt-6"
      >
        BUY
      </button>
    </Card>
  )
}
