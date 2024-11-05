import SaleCard from "./SaleCard";

export function TokenSaleView() {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full bg-gradient-to-b from-[#fff9ec] to-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Title Section */}
          <div className="text-center space-y-3 mb-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-[#222222]">
              Token Sale
            </h1>
            <p className="text-[#8D8D8D] text-lg sm:text-xl max-w-2xl mx-auto">
              Purchase HDF tokens securely and easily
            </p>
          </div>

          {/* Sale Card */}
          <div className="w-full max-w-[475px] transition-all duration-300 ease-out">
            <SaleCard />
          </div>
        </div>
      </div>
    </div>
  );
}
