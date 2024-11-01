import * as Progress from '@radix-ui/react-progress';
import * as Popover from '@radix-ui/react-popover';
import { useState, useCallback } from 'react';

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
    position: (100 / (totalStages - 1)) * i
  }));
};

const StageIndicator = ({ stage, isCurrent }: { stage: Stage; isCurrent: boolean }) => (
  <div
    className={`absolute w-4 h-4 rounded-full -translate-y-1/2 top-1/2 cursor-pointer
      ${isCurrent ? 'bg-blue-600 ring-4 ring-blue-200' : 'bg-gray-300'}`}
    style={{ left: `${stage.position}%` }}
  />
);

const StagesPopover = ({ stages, currentStage }: { stages: Stage[], currentStage: number }) => (
  <div className="bg-white rounded-lg shadow-lg border p-4 w-[300px]">
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
  </div>
);

export const TokenSaleProgress = ({
  currentStage = 3,
  totalStages = 8,
  stages = [],
}: TokenSaleProgressProps) => {
  const currentProgress = ((currentStage - 1) / (totalStages - 1)) * 100;

  return (
    <div className="relative pt-10 pb-4 px-4">
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
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="absolute w-4 h-4 rounded-full -translate-y-1/2 top-1/2 bg-white border-2 border-blue-500"
                style={{ left: `${stage.position}%` }}
              />
            ))}

            {/* Current Price and Arrow */}
            <div
              className="absolute -translate-x-1/2 -bottom-6 flex flex-col items-center"
              style={{ left: `${currentProgress}%` }}
            >
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-blue-500"></div>
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
