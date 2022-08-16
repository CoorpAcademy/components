import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import slides, {UISlidesState} from './slides';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  slides: UISlidesState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  slides
});
