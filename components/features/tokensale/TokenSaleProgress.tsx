import { useState, useEffect, memo } from 'react';
import * as Progress from '@radix-ui/react-progress';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Info } from 'lucide-react';
import { Stage, ThemeConfig, TokenSaleProgressProps } from './types/token-sale-progress';
import { DEFAULT_THEME } from './constants/theme';

// Utility function to ensure positions stay within bounds
const calculateAdjustedPosition = (position: number): number => {
  return Math.min(Math.max(position, 2), 99);
};

const StageArrow = memo(({ direction, color }: { direction: 'up' | 'down'; color: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-8 h-8 mt-2 hidden md:block transition-transform duration-200 ease-out
      ${direction === 'up' ? '-rotate-120' : 'rotate-180'}`} 
    viewBox="0 0 24 24"
    style={{ color }}
  >
    <path fill="currentColor" d="m12 21l-6.346-6.346l.688-.713l5.158 5.157v-7.117h1v7.136l5.158-5.152l.688.689zm-.5-11.02v-3h1v3zm0-5v-2h1v2z"/>
  </svg>
));
StageArrow.displayName = 'StageArrow';

const StageIndicator = memo(({ 
  stage, 
  currentStage, 
  theme 
}: {
  stage: Stage;
  currentStage: number;
  theme: ThemeConfig;
  }) => {
  const adjustedPosition = calculateAdjustedPosition(stage.position);

  return (
    <div
      className={`absolute w-3 h-3 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full
        transition-all duration-300 ease-out shadow-md
        ${stage.number < currentStage ? theme.completed :
          stage.number === currentStage ? `ring-4 ring-[#D18411]/20 ${theme.completed}` :
            theme.upcoming}`}
      style={{ left: `${adjustedPosition}%` }}
    />
  );
});
StageIndicator.displayName = 'StageIndicator';

const StageContent = memo(({ 
  position, 
  textColor, 
  arrowColor, 
  stage, 
  isCurrentStage 
}: {
  position: 'top' | 'bottom';
  textColor: string;
  arrowColor: string;
  stage: Stage;
  isCurrentStage: boolean;
}) => (
  <>
    {position === 'top' ? (
      <>
        <div className={`flex flex-col items-center ${textColor} ${isCurrentStage ? 'scale-110' : ''}`}>
          <span className="font-medium text-lg">${stage.price.toFixed(3)}</span>
          {!isCurrentStage && <span className="text-sm w-max">{stage.tokenAmount}</span>}
        </div>
        <StageArrow direction="down" color={arrowColor} />
      </>
    ) : (
      <>
        <StageArrow direction="up" color={arrowColor} />
        <div className={`flex flex-col items-center ${textColor} ${isCurrentStage ? 'scale-110' : ''}`}>
            <span className="font-medium text-lg">${stage.price.toFixed(3)}</span>
            {!isCurrentStage && <span className="text-sm w-max">{stage.tokenAmount}</span>}
        </div>
      </>
    )}
  </>
));
StageContent.displayName = 'StageContent';

const CurrentStageLabel = memo(({
  position,
  theme,
  stage,
  isEnhanced,
  customLabel
}: {
  position: 'top' | 'bottom';
  theme: ThemeConfig;
  stage: Stage;
  isEnhanced: boolean;
  customLabel: string;
}) => (
  <div className={`text-md w-max font-semibold ${theme.currentStage} text-center absolute 
    bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg
    transition-all duration-300 ease-out transform hover:scale-105
    ${position === 'top' ? 'top-[7.5rem]' : 'bottom-[5.5rem]'}`}>
    <span className='flex justify-evenly items-center font-medium text-md'>
      {stage.tokenAmount}
      {!isEnhanced && (
        <Info className="h-4 w-4 text-[#D18411]/70 hover:text-[#D18411] transition-colors cursor-pointer ml-2" />
      )}
    </span>
    {customLabel}
  </div>
));
CurrentStageLabel.displayName = 'CurrentStageLabel';

const StageInfo = memo(({
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
  theme: ThemeConfig;
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
  const adjustedPosition = calculateAdjustedPosition(stage.position);

  return (
    <div 
      className={`absolute -translate-x-1/2 flex flex-col items-center
        transition-all duration-300 ease-out
        ${position === 'top' ? '-top-[5.5rem]' : isCurrentStage ? '-bottom-[3.75rem]' : '-bottom-[5rem]'}`}
      style={{ left: `${adjustedPosition}%` }}
    >
      <StageContent
        position={position}
        textColor={textColor}
        arrowColor={arrowColor}
        stage={stage}
        isCurrentStage={isCurrentStage}
      />
      {isCurrentStage && !isMobile && !hideCurrentStageLabel && (
        <CurrentStageLabel
          position={position}
          theme={theme}
          stage={stage}
          isEnhanced={isEnhanced}
          customLabel={customLabel}
        />
      )}
    </div>
  );
});
StageInfo.displayName = 'StageInfo';

const TokenSaleProgress = ({
  currentStage,
  stages,
  theme: providedTheme = {},
  isEnhanced = false,
  hideCurrentStageLabel = false,
  labelPosition = 'bottom',
  customLabel = "You are here",
}: TokenSaleProgressProps) => {
  const [progress, setProgress] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const theme = { ...DEFAULT_THEME, ...providedTheme };
  const currentStagePosition = calculateAdjustedPosition(stages[currentStage - 1]?.position ?? 0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(currentStagePosition), 100);
    return () => clearTimeout(timer);
  }, [currentStagePosition]);

  return (
    <div className="relative w-full">
      <div className={`border-2 rounded-lg p-[2px] ${theme.border} shadow-md relative`}>
        <Progress.Root
          className={`relative w-full h-4 ${theme.background} rounded-full overflow-hidden`}
          value={progress}
        >
          <Progress.Indicator
            className={`h-full ${theme.progress} rounded-full transition-transform duration-500 ease-out`}
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>

        {stages.map((stage) => (
          <StageIndicator
            key={stage.number}
            stage={stage}
            currentStage={currentStage}
            theme={theme}
          />
        ))}
      </div>

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
TokenSaleProgress.displayName = 'TokenSaleProgress';

const MemoizedTokenSaleProgress = memo(TokenSaleProgress);
MemoizedTokenSaleProgress.displayName = 'MemoizedTokenSaleProgress';

export default MemoizedTokenSaleProgress;
