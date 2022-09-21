import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import answers, {UIAnswerState} from './answers';
import slide, {UISlideState} from './slide';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  answers: UIAnswerState;
  slide: UISlideState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  answers,
  slide
});
