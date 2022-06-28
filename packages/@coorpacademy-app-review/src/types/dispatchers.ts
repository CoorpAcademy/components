import {updateSlidesOnValidation, updateSlidesOnNext, validateSlide} from '../actions/data/slides';
import {updateFinishedSlides} from '../actions/ui/finished-slides';
import {navigateBack, navigateTo} from '../actions/ui/navigation';
import {updateReviewStatus} from '../actions/ui/review-status';
import {updateStepItemsOnValidation, updateStepItemsOnNext} from '../actions/ui/step-items';

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
