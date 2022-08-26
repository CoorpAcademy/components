import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import answers, {AnswerState} from './answers';
import slide, {UISlideState} from './slide';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  answers: AnswerState;
  slide: UISlideState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  answers,
  slide
});
