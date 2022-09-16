import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import answers, {AnswerState} from './answers';
import slide, {SlideState} from './slide';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  answers: AnswerState;
  slide: SlideState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  answers,
  slide
});
