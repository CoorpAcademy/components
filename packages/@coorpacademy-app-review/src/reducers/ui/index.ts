import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import reviewStatus, {ReviewStatusState} from './review-status';
import slides, {UISlidesState} from './slides';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  reviewStatus: ReviewStatusState;
  slides: UISlidesState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  reviewStatus,
  slides
});
