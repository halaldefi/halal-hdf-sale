import * as Progress from '@radix-ui/react-progress';
import * as Popover from '@radix-ui/react-popover';
import { ArrowDownIcon } from "@heroicons/react/24/solid";

interface Stage {
  number: number;
  price: number;
  position: number;
}

interface TokenSaleProgressProps {
  currentStage?: number;
  totalStages?: number;
  stages?: Stage[];
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
}: TokenSaleProgressProps) => {
  const stages = providedStages.length > 0 ? providedStages : calculateStages(totalStages);
  const currentProgress = ((currentStage - 1) / (totalStages - 1)) * 100;

  return (
    <div className="relative">
      <Popover.Root>
        <Popover.Trigger asChild>
          <div className="relative w-full cursor-pointer">
            {/* Progress Bar */}
            <Progress.Root
              className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden"
              value={currentProgress}
            >
              <Progress.Indicator
                className="h-full bg-blue-500 transition-transform duration-300"
                style={{ transform: `translateX(-${100 - currentProgress}%)` }}
              />
            </Progress.Root>

            {/* Stage Indicators */}
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className={`absolute w-1.5 h-2 -translate-x-1/2 -translate-y-1/2 top-1/2 border border-blue-300
                  ${index === 0 ? 'rounded-l-lg' : ''}
                  ${index === stages.length - 1 ? 'rounded-r-lg' : ''}
                  ${stage.number <= currentStage ? 'bg-gray-300' : 'bg-blue-300'}`}
                style={{ left: `${stage.position}%` }}
              />
            ))}

            {/* Current Price and Arrow */}
            <div
              className="absolute -translate-x-1/2 -bottom-12 flex flex-col items-center"
              style={{ left: `${currentProgress}%` }}
            >
              <ArrowDownIcon className="size-6 text-blue-500 stroke-2" />
              <span className="text-blue-500 font-bold">
                ${stages[currentStage - 1]?.price.toFixed(2)}
              </span>
            </div>
          </div>
        </Popover.Trigger>

        <Popover.Content
          className="z-50 bg-white rounded-lg shadow-lg border p-4 w-[300px]"
          sideOffset={5}
          align="center"
        >
          <h3 className="text-lg font-bold mb-4 text-center">Token Sale Stages</h3>
          <div className="space-y-3">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className={`flex justify-between items-center p-2 rounded ${
                  stage.number === currentStage
                    ? 'bg-blue-100 font-semibold'
                    : stage.number < currentStage
                    ? 'text-gray-500'
                    : ''
                }`}
              >
                <span>Stage {stage.number}</span>
                <span>${stage.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default TokenSaleProgress;
