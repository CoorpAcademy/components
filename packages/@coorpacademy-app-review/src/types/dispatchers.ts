import {validateSlide} from '../actions/data/validate-slide';
import {updateFinishedSlides} from '../actions/finished-slides';
import {navigateBack, navigateTo} from '../actions/navigation';
import {updateReviewStatus} from '../actions/review-status';
import {updateSlidesOnValidation, updateSlidesOnNext} from '../actions/slides';
import {updateStepItemsOnValidation, updateStepItemsOnNext} from '../actions/step-items';

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
