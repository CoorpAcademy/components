import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import answer, {AnswerState} from './answer';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  answer: AnswerState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  answer
});
