import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import answers, {UIAnswerState} from './answers';
import positions, {UIPositionState} from './positions';
import slide, {UISlideState} from './slide';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  answers: UIAnswerState;
  slide: UISlideState;
  positions: UIPositionState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  answers,
  slide,
  positions
});
