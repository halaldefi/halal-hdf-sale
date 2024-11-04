export const projectDetails = [
  {
    feature: "Token Name",
    details: "Halal DeFi ($HDF)",
  },
  {
    feature: "Total Supply",
    details: "100,000,000 HDF (50M on BSC, 50M on Arbitrum)",
  },
  {
    feature: "Networks",
    details: "• Binance Smart Chain (BSC)\n• Arbitrum (ARB)\n• Cross-chain compatibility via Axelar ITS",
  },
  {
    feature: "Token Type",
    details: "Cross-chain ERC-20/BEP-20 via Axelar ITS",
  },
  {
    feature: "Initial Price",
    details: "$0.10",
  },
  {
    feature: "Max Supply for Sale",
    details: "90,000,000 HDF (45M on each chain)",
  },
  {
    feature: "Token Distribution",
    details: "• 90% for Public Sale\n• 10% for Liquidity\n• No Team Tokens\n• No Airdrops",
  },
  {
    feature: "Transaction Tax",
    details: "1% on all buy/sell transactions",
  }
];

export const priceTiers = [
  { tier: "First 1M tokens", price: "$0.100" },
  { tier: "Next 1M tokens", price: "$0.102" },
  { tier: "Next 1M tokens", price: "$0.104" },
  { tier: "Next 1M tokens", price: "$0.106" },
  { tier: "Next 1M tokens", price: "$0.108" },
];

export const saleStages = [
  {
    name: "Initial Stage",
    allocation: "1,000,000 HDF",
    price: "$0.100",
    status: "active",
    startDate: "2024-01-15",
    endDate: "Until allocation sold",
    minBuy: "100 USDT",
    maxBuy: "50,000 USDT",
    tokensSold: "0"
  },
  {
    name: "Second Stage",
    allocation: "1,000,000 HDF",
    price: "$0.102",
    status: "upcoming",
    startDate: "After Initial Stage",
    endDate: "Until allocation sold",
    minBuy: "50 USDT",
    maxBuy: "50,000 USDT"
  },
  {
    name: "Third Stage",
    allocation: "1,000,000 HDF",
    price: "$0.104",
    status: "upcoming",
    startDate: "After Second Stage",
    endDate: "Until allocation sold",
    minBuy: "50 USDT",
    maxBuy: "50,000 USDT"
  },
];
