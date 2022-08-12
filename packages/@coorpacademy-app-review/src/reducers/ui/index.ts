import {combineReducers} from 'redux';

import finishedSlides, {FinishedSlidesState} from './finished-slides';
import navigation, {NavigationState} from './navigation';
import reviewStatus, {ReviewStatusState} from './review-status';
import slides, {UISlidesState} from './slides';

export type UIState = {
  navigation: NavigationState;
  finishedSlides: FinishedSlidesState;
  reviewStatus: ReviewStatusState;
  slides: UISlidesState;
};

export default combineReducers({
  finishedSlides,
  navigation,
  reviewStatus,
  slides
});
