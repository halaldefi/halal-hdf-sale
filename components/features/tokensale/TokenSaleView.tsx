import SaleCard from "./SaleCard";

export function TokenSaleView() {
 
  return (
    <div className={
      "grid w-full h-full"
    }>
      <div className="grid place-items-center h-full w-full">
        <SaleCard />
      </div>
      
    </div>
  );
}
