import {SlideNumber} from './slides';
import {FinishedSlides} from './finished-slides';

const ICON_VALUES = {
  right: 'right',
  wrong: 'wrong'
} as const;

type IconValue = keyof typeof ICON_VALUES;

export type StepItem = {
  current: boolean;
  icon: IconValue;
  value: string;
};

export type StepItems = Map<SlideNumber, StepItem>;

export type UpdateStepItemsOnValidationClickPayload = {
  stepNumber: SlideNumber;
  icon: IconValue;
};

export type UpdateStepItemsOnNextClickPayload = {
  stepNumber: SlideNumber;
  finishedSlides: FinishedSlides;
  current: boolean;
};
