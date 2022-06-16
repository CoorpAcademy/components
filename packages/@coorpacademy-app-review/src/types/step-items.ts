import {ICON_VALUES} from '@coorpacademy/components/es/atom/review-header-step-item';
import {SlideNumber} from './slides';
import {FinishedSlides} from './finished-slides';

export type StepItem = {
  current: boolean;
  icon: ICON_VALUES;
  value: string;
};

export type StepItems = Map<SlideNumber, StepItem>;

export type UpdateStepItemsOnValidationClickPayload = {
  stepNumber: SlideNumber;
  icon: ICON_VALUES;
};

export type UpdateStepItemsOnNextClickPayload = {
  stepNumber: SlideNumber;
  finishedSlides: FinishedSlides;
  current: boolean;
};
