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
    // Allow empty string, numbers, and one decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      // Prevent multiple decimal points
      if (!(value.split('.').length > 2)) {
        setter(value)
      }
    }
  }

  return (
    <Card className="bg-[#fff9ec] p-3 sm:p-3 space-y-1 w-full max-w-[475px] mx-auto shadow-lg rounded-xl">
      {/* Currency Selector */}
      <div className="w-full">
        <ChainSelector />
      </div>

      <div className="relative flex flex-col gap-1">
        {/* Sell Section */}
        <div 
          className="bg-white p-3 sm:p-4 rounded-lg border-[0.5px] border-[#E6E6F2] pb-2 cursor-pointer"
          onClick={() => sellInputRef.current?.focus()}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8D8D8D] text-sm sm:text-base font-medium">Sell</p>
              <input
                ref={sellInputRef}
                type="text"
                inputMode="decimal"
                value={sellAmount}
                placeholder="0"
                onChange={(e) => handleNumericInput(e.target.value, setSellAmount)}
                className="text-3xl sm:text-3xl font-medium bg-transparent outline-none w-32 mt-2"
              />
              <p className="text-[#8D8D8D] text-sm sm:text-base mt-2">$499.64</p>
            </div>
            <div className="flex items-center px-4 py-2 bg-white rounded-lg border border-[#f2f2f2] shadow-[0_0_10px_rgba(34,34,34,0.04)] cursor-pointer hover:bg-gray-50">
              <div className="flex items-center justify-center h-7 w-7 relative -ml-2">
                <div className="absolute top-[1px] left-[1px] w-[26px] h-[26px] bg-[#FFFFFF35] rounded-full"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658s2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118s3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116s-3.301-1.914-7.694-2.117"/></g></svg>
              </div>
              <span className="font-semibold text-[#222222] ml-2">USDT</span>
            </div>
          </div>
        </div>
        {/* Down Arrow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="flex items-center justify-center bg-[#F9F9F9] border-4 border-white rounded-lg p-2"
            style={{ transform: 'scale(1)', opacity: 1 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              className="w-6 h-6 text-[#222222]"
            >
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
        {/* Buy Section */}
        <div 
          className="bg-[#f5f5f5] p-3 sm:p-4 rounded-lg border-[0.5px] border-[#E6E6F2] pt-2 cursor-pointer"
          onClick={() => buyInputRef.current?.focus()}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8D8D8D] text-sm sm:text-base font-medium">Buy</p>
              <input
                ref={buyInputRef}
                type="text"
                inputMode="decimal"
                value={buyAmount}
                placeholder="0"
                onChange={(e) => handleNumericInput(e.target.value, setBuyAmount)}
                className="text-3xl sm:text-3xl font-medium bg-transparent outline-none w-32 mt-2"
              />
              <p className="text-[#8D8D8D] text-sm sm:text-base mt-2">$498</p>
            </div>
            <div className="flex items-center px-4 py-2 bg-white rounded-lg border border-[#f2f2f2] shadow-[0_0_10px_rgba(34,34,34,0.04)] cursor-pointer hover:bg-gray-50">
              <div className="flex items-center justify-center h-7 w-7 relative -ml-2">
                <div className="absolute top-[1px] left-[1px] w-[26px] h-[26px] bg-[#FFFFFF35] rounded-full"></div>
                <Image
                  src="/images/hdf-logo.png"
                  alt="HDF Logo"
                  width={28}
                  height={28}
                  className="rounded-full object-contain"
                />
              </div>
              <span className="font-semibold text-[#222222] ml-2">HDF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Button */}
      <button className="w-full text-white py-2.5 sm:py-3 rounded-lg font-semibold text-lg sm:text-xl bg-gradient-to-r from-[#B4AFF4] to-[#EAAA7C] cursor-pointer hover:from-[#9d98dd] hover:to-[#d49970]">
        BUY
      </button>
    </Card>
  )
}
