import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
};

export default combineReducers({
  currentSlideRef,
  navigation
});
