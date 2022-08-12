import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import finishedSlides, {FinishedSlidesState} from './finished-slides';
import navigation, {NavigationState} from './navigation';
import reviewStatus, {ReviewStatusState} from './review-status';
import slides, {UISlidesState} from './slides';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  finishedSlides: FinishedSlidesState;
  reviewStatus: ReviewStatusState;
  slides: UISlidesState;
};

export default combineReducers({
  currentSlideRef,
  finishedSlides,
  navigation,
  reviewStatus,
  slides
});
