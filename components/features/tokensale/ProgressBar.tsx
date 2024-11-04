import * as Progress from '@radix-ui/react-progress';
import { useState, useEffect, useMemo } from 'react';
import { useMediaQuery } from "@/hooks/use-media-query";

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
  progress: 'bg-blue-500',
  background: 'bg-gray-200',
  completed: 'bg-gray-300',
  upcoming: 'bg-blue-300',
  border: 'border-gray-200',
  completedArrow: '#666666',
  upcomingArrow: '#999999',
  completedText: 'text-gray-600',
  upcomingText: 'text-gray-400',
  currentStage: 'text-blue-500'
};

const StageArrow = ({ direction, color }: { direction: 'up' | 'down'; color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 mt-2 ${direction === 'up' ? '-rotate-120' : 'rotate-180'}`} viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-6.346-6.346l.688-.713l5.158 5.157v-7.117h1v7.136l5.158-5.152l.688.689zm-.5-11.02v-3h1v3zm0-5v-2h1v2z"/></svg>
);

const StageIndicator = ({ stage, currentStage, theme }: {
  stage: Stage;
  currentStage: number;
  theme: Theme;
}) => (
  <div
    className={`absolute w-2 h-2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full
      ${stage.number <= currentStage ? theme.completed : theme.upcoming}`}
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
  customLabel = "You are here"
}: {
  stage: Stage;
  currentStage: number;
  theme: Theme;
  isMobile: boolean;
  position: 'top' | 'bottom';
  hideCurrentStageLabel?: boolean;
  customLabel?: string;
}) => {
  const isCurrentStage = stage.number === currentStage;
  const isPastStage = stage.number < currentStage;
  const textColor = isCurrentStage ? theme.currentStage : isPastStage ? theme.completedText : theme.upcomingText;
  const arrowColor = isCurrentStage ? '#000000' : isPastStage ? theme.completedArrow : theme.upcomingArrow;

  return (
    <div className={`absolute -translate-x-1/2 flex flex-col items-center
      ${position === 'top' ? '-top-[4.8rem]' : '-bottom-[3.75rem]'}`}
      style={{ left: `${stage.position}%` }}
    >
      {position === 'top' ? (
        <>
          <div className={`flex flex-col items-center ${textColor}`}>
            <span className="font-medium text-md">${stage.price.toFixed(3)}</span>
            <span className="text-sm">{stage.tokenAmount}</span>
          </div>
          <StageArrow direction="down" color={arrowColor} />
        </>
      ) : (
        <>
          <StageArrow direction="up" color={arrowColor} />
          <div className={`flex flex-col items-center ${textColor}`}>
            <span className="font-medium text-md">${stage.price.toFixed(3)}</span>
          </div>
        </>
      )}

      {isCurrentStage && !isMobile && !hideCurrentStageLabel && (

        <span className={`text-md w-28 font-semibold ${theme.currentStage} text-center absolute 
          ${position === 'top' ? 'top-[6.5rem]' : 'bottom-[5.5rem]'}`}>
          <span className='font-medium text-md'>
            {stage.tokenAmount}
          </span>
          <br />
          {customLabel}
        </span>
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
          className="absolute -translate-x-1/2 -top-14 flex flex-col items-center"
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

      <div className={`border-2 rounded-lg p-[2px] ${theme.border}`}>
        <Progress.Root
          className={`relative w-full h-3 ${theme.background} rounded-full overflow-hidden`}
          value={progress}
        >
          <Progress.Indicator
            className={`h-full ${theme.progress} rounded-full`}
            style={{
              transform: `translateX(-${100 - progress}%)`,
              transition: 'transform 500ms cubic-bezier(0.65, 0, 0.35, 1)'
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
        />
      )}
    </div>
  );
};

export default TokenSaleProgress;
