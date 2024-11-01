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
    // Ensure even distribution across 0-100%
    position: i === 0 ? 0 : i === totalStages - 1 ? 100 : (i * 100) / (totalStages - 1)
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
  const currentProgress = ((currentStage - 1) / (totalStages - 1)) * 100;

  return (
    <div className="relative w-full"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <div className={`border-2 rounded-lg p-[2px] ${borderColor}`}>
        <Progress.Root
          className={`relative w-full h-3 ${progressBackgroundColor} rounded-full overflow-hidden`}
          value={currentProgress}
        >
          <Progress.Indicator
            className={`h-full transition-transform duration-300 ${progressColor}`}
            style={{ transform: `translateX(-${100 - currentProgress}%)` }}
          />
        </Progress.Root>
      </div>

      {stages.map((stage, index) => (
        <div
          key={stage.number}
          className={`absolute w-1.5 h-2 -translate-x-1/2 -translate-y-1/2 top-1/2 border border-blue-300
            ${index === 0 ? 'rounded-l-lg' : ''}
            ${index === stages.length - 1 ? 'rounded-r-lg' : ''}
            ${stage.number <= currentStage ? completedStageColor : upcomingStageColor}`}
          style={{ left: `${stage.position}%` }}
        />
      ))}

      <div
        className="absolute -translate-x-1/2 -bottom-12 flex flex-col items-center"
        style={{ left: `${currentProgress}%` }}
      >
        <ArrowDownIcon className={`size-6 stroke-2 transition-transform ${arrowColor} ${isHovered ? 'scale-110' : ''}`} />
        <span className={`font-bold ${priceColor}`}>
          ${stages[currentStage - 1]?.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default TokenSaleProgress;
