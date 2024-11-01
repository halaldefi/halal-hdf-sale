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
      {/* Add the "You are here" text above */}
      <div
        className="absolute -translate-x-1/2 -top-6 flex flex-col items-center"
        style={{ left: `${currentStagePosition}%` }}
      >
        <span className={`text-lg font-semibold ${priceColor} indie-flower-script`}>You are here</span>
      </div>

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

      {/* Modified bottom container to only include arrow and price */}
      <div
        className="absolute -translate-x-1/2 -bottom-16 flex flex-col items-center "
        style={{ left: `${currentStagePosition}%` }}  // Use the same position value
      >
     
        <svg xmlns="http://www.w3.org/2000/svg"
          className="rotate-90 w-12 h-12 mt-2" // Added mt-2 for margin-top
          data-name="handdrwan down arrow" viewBox="0 0 100 125" x="0px" y="0px"><title>Arrow</title><path d="M86.5,52.93c-1.34,0-2.68-.13-4-.09-10,.33-20.07.4-30.08,1.09-13.47.92-26.95,1.18-40.43,1.68a23.48,23.48,0,0,1-3.25-.09A4,4,0,0,1,5,51.65a3.94,3.94,0,0,1,3.42-3.94,16.7,16.7,0,0,1,3.24-.21c7,.21,14,.38,20.93.7,6.37.28,12.72.75,19.08,1.1,2.91.16,5.83.24,8.74.33q10.88.34,21.75.67c1.29,0,2.57,0,4.11,0a18.81,18.81,0,0,0-3.16-4.82c-3.18-3-6.4-6.06-9.58-9.1-.47-.45-1.37-.74-.94-1.76,1-.19,1.36.58,1.89,1C77.76,38.25,81,41,84.31,43.52c1,.77,2.27,1.17,3.34,1.86,1.53,1,3,2,4.45,3.15.69.52,1.24,1.22,1.9,1.8a2.42,2.42,0,0,1-.64,4.25q-8.61,3.89-17.21,7.78c-1.72.79-3.41,1.67-5.11,2.5a4.07,4.07,0,0,1-1.3.55A1.43,1.43,0,0,1,68.57,65a1.32,1.32,0,0,1,.25-1.2,5.39,5.39,0,0,1,1.36-.88l15.47-9c.32-.19.61-.45.92-.68Z" /></svg>


        <span className={`font-bold text-lg ${priceColor}`}>
          ${stages[currentStage - 1]?.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default TokenSaleProgress;
