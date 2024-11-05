export interface Stage {
  number: number;
  price: number;
  position: number;
  tokenAmount: string;
}

export interface ThemeConfig {
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

export interface TokenSaleProgressProps {
  currentStage: number;
  stages: Stage[];
  theme?: Partial<ThemeConfig>;
  isEnhanced?: boolean;
  hideCurrentStageLabel?: boolean;
  labelPosition?: 'top' | 'bottom';
  customLabel?: string;
}
