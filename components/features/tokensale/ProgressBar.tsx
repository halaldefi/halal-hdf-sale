import * as Progress from '@radix-ui/react-progress';
import { useState, useEffect, useMemo } from 'react';
import { useMediaQuery } from "@/hooks/use-media-query";
import { Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Stage {
  number: number;
  price: number;
  position: number;
  tokenAmount: string;
}

interface Theme {
  progress: string;
  background: string;
  completed: string;
  upcoming: string;
  border: string;
  completedArrow: string;
  upcomingArrow: string;
  completedText: string;
  upcomingText: string;
  currentStage: string;
}

interface TokenSaleProgressProps {
  currentStage?: number;
  totalStages?: number;
  stages?: Stage[];
  theme?: Partial<Theme>;
  isEnhanced?: boolean;
  hideCurrentStageLabel?: boolean;
  labelPosition?: 'top' | 'bottom';
  customLabel?: string;
}

const defaultTheme: Theme = {
  progress: 'bg-gradient-to-r from-[#D18411] to-[#E8C375]',
  background: 'bg-gray-100',
  completed: 'bg-[#D18411]',
  upcoming: 'bg-gray-200',
  border: 'border-gray-100',
  completedArrow: '#D18411',
  upcomingArrow: '#94A3B8',
  completedText: 'text-[#D18411]',
  upcomingText: 'text-gray-400',
  currentStage: 'text-[#D18411]'
};

const StageArrow = ({ direction, color }: { direction: 'up' | 'down'; color: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-8 h-8 mt-2 hidden md:block transition-transform duration-200 ease-out
      ${direction === 'up' ? '-rotate-120' : 'rotate-180'}`} 
    viewBox="0 0 24 24"
    style={{ color }}
  >
    <path fill="currentColor" d="m12 21l-6.346-6.346l.688-.713l5.158 5.157v-7.117h1v7.136l5.158-5.152l.688.689zm-.5-11.02v-3h1v3zm0-5v-2h1v2z"/>
  </svg>
);

const StageIndicator = ({ stage, currentStage, theme }: {
  stage: Stage;
  currentStage: number;
  theme: Theme;
}) => (
  <div
    className={`absolute w-3 h-3 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full
      transition-all duration-300 ease-out shadow-md
      ${stage.number < currentStage ? theme.completed : 
        stage.number === currentStage ? 'ring-4 ring-[#D18411]/20 ' + theme.completed :
        theme.upcoming}`}
    style={{ left: `${stage.position}%` }}
  />
);

const StageInfo = ({
  stage,
  currentStage,
  theme,
  isMobile,
  position,
  hideCurrentStageLabel,
  customLabel = "You are here",
  isEnhanced = false
}: {
  stage: Stage;
  currentStage: number;
  theme: Theme;
  isMobile: boolean;
  position: 'top' | 'bottom';
  hideCurrentStageLabel?: boolean;
  customLabel?: string;
  isEnhanced?: boolean;
}) => {
  const isCurrentStage = stage.number === currentStage;
  const isPastStage = stage.number < currentStage;
  const textColor = isCurrentStage ? theme.currentStage : isPastStage ? theme.completedText : theme.upcomingText;
  const arrowColor = isCurrentStage ? '#D18411' : isPastStage ? theme.completedArrow : theme.upcomingArrow;

  return (
    <div 
      className={`absolute -translate-x-1/2 flex flex-col items-center
        transition-all duration-300 ease-out
        ${position === 'top' ? '-top-[5.5rem]' : '-bottom-[3.75rem]'}`}
      style={{ left: `${stage.position}%` }}
    >
      {position === 'top' ? (
        <>
          <div className={`flex flex-col items-center ${textColor} ${isCurrentStage ? 'scale-110' : ''}`}>
            <span className="font-medium text-lg">${stage.price.toFixed(3)}</span>
            <span className="text-sm">{stage.tokenAmount}</span>
          </div>
          <StageArrow direction="down" color={arrowColor} />
        </>
      ) : (
        <>
          <StageArrow direction="up" color={arrowColor} />
          <div className={`flex flex-col items-center ${textColor} ${isCurrentStage ? 'scale-110' : ''}`}>
            <span className="font-medium text-lg">${stage.price.toFixed(3)}</span>
          </div>
        </>
      )}

      {isCurrentStage && !isMobile && !hideCurrentStageLabel && (
        <div className={`text-md w-max font-semibold ${theme.currentStage} text-center absolute 
          bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg
          transition-all duration-300 ease-out transform hover:scale-105
          ${position === 'top' ? 'top-[7.5rem]' : 'bottom-[5.5rem]'}`}>
          <span className='flex justify-evenly items-center font-medium text-md'>
            {stage.tokenAmount}
            {!isEnhanced && (
              <Info className="h-4 w-4 text-[#D18411]/70 hover:text-[#D18411] transition-colors cursor-pointer" />
            )}

          </span>
          {customLabel}
         
        </div>
      )}
    </div>
  );
};

const calculateStages = (totalStages: number): Stage[] => {
  return Array.from({ length: totalStages }, (_, i) => ({
    number: i + 1,
    price: 0.1 * (i + 1),
    position: ((i * 100) / (totalStages - 1) * (100 - 4) / 100) + 2,
    tokenAmount: `${(i + 1) * 1000} tokens`
  }));
};

export const TokenSaleProgress = ({
  currentStage = 3,
  totalStages = 8,
  stages: providedStages = [],
  theme: providedTheme = {},
  isEnhanced = false,
  hideCurrentStageLabel = false,
  labelPosition = 'bottom',
  customLabel = "You are here",
}: TokenSaleProgressProps) => {
  const [progress, setProgress] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const theme = { ...defaultTheme, ...providedTheme };

  const stages = useMemo(() =>
    providedStages.length > 0
      ? providedStages.map(stage => ({
        ...stage,
        position: ((stage.position) * (100 - 4) / 100) + 2
      }))
      : calculateStages(totalStages),
    [providedStages, totalStages]
  );

  const currentStagePosition = stages[currentStage - 1]?.position ?? 0;

  useEffect(() => {
    const timer = setTimeout(() => setProgress(currentStagePosition), 100);
    return () => clearTimeout(timer);
  }, [currentStagePosition]);

  return (
    <div className="relative w-full px-2">
      {!isEnhanced && !hideCurrentStageLabel && labelPosition === 'top' && (
        <div
          className="absolute -translate-x-1/2 -top-14 flex flex-col items-center
            bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg
            transition-all duration-300 ease-out transform hover:scale-105"
          style={{ left: `${currentStagePosition}%` }}
        >
          <span className="text-lg font-medium">
            {stages[currentStage - 1]?.tokenAmount}
          </span>
          <span className={`text-lg font-semibold ${theme.currentStage} indie-flower-script`}>
            {customLabel}
          </span>
        </div>
      )}

      <div className={`border-2 rounded-lg p-[2px] ${theme.border} shadow-md`}>
        <Progress.Root
          className={`relative w-full h-4 ${theme.background} rounded-full overflow-hidden`}
          value={progress}
        >
          <Progress.Indicator
            className={`h-full ${theme.progress} rounded-full transition-transform duration-500 ease-out`}
            style={{
              transform: `translateX(-${100 - progress}%)`,
            }}
          />
        </Progress.Root>
      </div>

      {stages.map((stage) => (
        <StageIndicator
          key={stage.number}
          stage={stage}
          currentStage={currentStage}
          theme={theme}
        />
      ))}

      {isEnhanced ? (
        stages.map((stage) => (
          <StageInfo
            key={stage.number}
            stage={stage}
            currentStage={currentStage}
            theme={theme}
            isMobile={isMobile}
            position={stage.number % 2 === 0 ? 'bottom' : 'top'}
            hideCurrentStageLabel={hideCurrentStageLabel}
            customLabel={customLabel}
            isEnhanced={isEnhanced}
          />
        ))
      ) : (
        <StageInfo
          stage={stages[currentStage - 1]}
          currentStage={currentStage}
          theme={theme}
          isMobile={isMobile}
          position={labelPosition}
          hideCurrentStageLabel={hideCurrentStageLabel}
          customLabel={customLabel}
          isEnhanced={isEnhanced}
        />
      )}
    </div>
  );
};

export default TokenSaleProgress;
