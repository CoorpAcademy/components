import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import answers, {AnswerState} from './answers';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  answers: AnswerState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  answers
});
