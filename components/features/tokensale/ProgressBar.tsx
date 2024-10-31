import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number;
  currentPrice: number;
  pastPrices: number[];
  futurePrices: number[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, currentPrice, pastPrices, futurePrices }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="relative w-full bg-gray-200 h-4 rounded">
          <div
            className={cn(
              'h-4 rounded transition-width duration-300',
              progress < 50 ? 'bg-green-500' : 'bg-blue-500'
            )}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-4 bg-white border rounded shadow-lg">
        <h3 className="text-lg font-bold">Token Sale Details</h3>
        <p>Current Progress: {progress}%</p>
        <p>Current Price: ${currentPrice}</p>
        <div>
          <h4 className="font-semibold">Past Prices:</h4>
          <ul>
            {pastPrices.map((price, index) => (
              <li key={index}>Time {index + 1}: ${price}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Future Prices:</h4>
          <ul>
            {futurePrices.map((price, index) => (
              <li key={index}>Time {index + 1}: ${price}</li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProgressBar;
