
import { Card,  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function SaleCardSection() {

  return (
    <Card className="bg-[#F5F3EF] p-5 space-y-4 min-w-[475px] shadow-lg rounded-xl">
      {/* Currency Selector */}
      <div className="bg-white p-2 rounded-lg border border-[#F1F1F1] flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-black rounded-full relative" />
          <span className="font-urbanist text-base font-medium">Arbitrum</span>
        </div>
        <div className="ml-auto">
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" />
        </div>
      </div>

      {/* Sell Section */}
      <div className="bg-white p-4 rounded-lg border border-[#F1F1F1]">
        <p className="text-[#8D8D8D] text-base font-medium">Sell</p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-3xl font-medium">100</p>
            <p className="text-[#8D8D8D] text-base mt-2">$499.64</p>
          </div>
          <Button variant="outline" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B" /><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658s2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118s3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116s-3.301-1.914-7.694-2.117" /></g></svg>
            
            <span className='font-medium'>
              USDT
            </span>
          </Button>
        </div>
      </div>

      {/* Buy Section */}
      <div className="bg-[#F9F9F9] p-4 rounded-lg border border-[#F1F1F1]">
        <p className="text-[#8D8D8D] text-base font-medium">Buy</p>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-3xl font-medium">5000</p>
            <p className="text-[#8D8D8D] text-base mt-2">$498</p>
          </div>
          <Button variant="outline" >
            <Image
              src="/images/hdf-logo.png"
              alt="HDF Logo"
              width={16}
              height={16}
            />
            <span className='font-medium'>
              HDF
            </span>
          </Button>
        </div>
      </div>

      {/* Buy Button */}
      <button className="w-full py-3 rounded-lg font-semibold text-xl bg-gradient-to-r from-[#B4AFF4] to-[#EAAA7C]">
        BUY
      </button>
    </Card>
  )
}