import * as Progress from '@radix-ui/react-progress';
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

interface Stage {
  number: number;
  price: number;
  position: number;
}

interface TokenSaleProgressProps {
  currentStage?: number;
  totalStages?: number;
  stages?: Stage[];
  progressColor?: string;
  completedStageColor?: string;
  upcomingStageColor?: string;
  borderColor?: string;
  // Add new color props
  arrowColor?: string;
  priceColor?: string;
  progressBackgroundColor?: string;
}

const calculateStages = (totalStages: number): Stage[] => {
  return Array.from({ length: totalStages }, (_, i) => ({
    number: i + 1,
    price: 0.1 * (i + 1),
    // Adjust position calculation to keep stages inside the bar
    position: (i * 100) / (totalStages - 1)
  }));
};

export const TokenSaleProgress = ({
  currentStage = 3,
  totalStages = 8,
  stages: providedStages = [],
  progressColor = 'bg-blue-500',
  completedStageColor = 'bg-gray-300',
  upcomingStageColor = 'bg-blue-300',
  borderColor = 'border-gray-200',
  arrowColor = 'text-blue-500',
  priceColor = 'text-blue-500',
  progressBackgroundColor = 'bg-gray-200',
}: TokenSaleProgressProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const stages = providedStages.length > 0 ? providedStages : calculateStages(totalStages);
  
  // Update currentProgress to use the same position calculation as stages
  const currentStagePosition = stages[currentStage - 1]?.position || 0;

  return (
    <div className="relative w-full px-2"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <div className={`border-2 rounded-lg p-[2px] ${borderColor}`}>
        <Progress.Root
          className={`relative w-full h-3 ${progressBackgroundColor} rounded-full overflow-hidden`}
          value={currentStagePosition}  // Use the same position value
        >
          <Progress.Indicator
            className={`h-full transition-transform duration-300 ${progressColor}`}
            style={{ transform: `translateX(-${100 - currentStagePosition}%)` }}
          />
        </Progress.Root>
      </div>

      {stages.map((stage, index) => (
        <div
          key={stage.number}
          className={`absolute w-2 h-2 -translate-x-1/2 top-1/2 -translate-y-1/2
            ${stage.number <= currentStage ? completedStageColor : upcomingStageColor}`}
          style={{ 
            left: `${stage.position}%`,
            borderRadius: '100%'
          }}
        />
      ))}

      <div
        className="absolute -translate-x-1/2 -bottom-20 flex flex-col items-center gap-1"
        style={{ left: `${currentStagePosition}%` }}  // Use the same position value
      >
     
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          className={`w-6 h-6 text-[#222222] transition-transform ${arrowColor} ${isHovered ? 'scale-110' : ''}`} 
        >
          <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span className={`text-sm font-medium ${priceColor}`}>You are here</span>
        <span className={`font-bold ${priceColor}`}>
          ${stages[currentStage - 1]?.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default TokenSaleProgress;
