import {
  StoreFirstSlide,
  updateSlidesOnValidation,
  updateSlidesOnNext,
  validateSlide
} from './data/slides';
import {ErrorFetchingSkills, ReceivedSkills} from './data/skills';
import {StoreToken} from './data/token';

import {updateFinishedSlides} from './ui/finished-slides';
import {navigateBack, navigateTo, NavigateBack, NavigateTo, StartApp} from './ui/navigation';
import {updateReviewStatus} from './ui/review-status';
import {updateStepItemsOnValidation, updateStepItemsOnNext} from './ui/step-items';
import {ErrorCreatingProgression, ReceiveProgression} from './data/progression';

export type Action =
  | NavigateBack
  | NavigateTo
  | ReceivedSkills
  | ErrorFetchingSkills
  | StartApp
  | StoreFirstSlide
  | StoreToken
  | ErrorCreatingProgression
  | ReceiveProgression;

export type Dispatchers = {
  navigateTo: typeof navigateTo;
  navigateBack: typeof navigateBack;
  validateSlide: typeof validateSlide;
  updateSlidesOnValidation: typeof updateSlidesOnValidation;
  updateSlidesOnNext: typeof updateSlidesOnNext;
  updateReviewStatus: typeof updateReviewStatus;
  updateStepItemsOnValidation: typeof updateStepItemsOnValidation;
  updateStepItemsOnNext: typeof updateStepItemsOnNext;
  updateFinishedSlides: typeof updateFinishedSlides;
};
