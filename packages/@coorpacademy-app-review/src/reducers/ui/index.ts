import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import answers, {UIAnswerState} from './answers';
import positions, {UIPositionState} from './positions';
import slide, {UISlideState} from './slide';
import showQuitPopin, {ShowQuitPopinState} from './quit-popin';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  answers: UIAnswerState;
  slide: UISlideState;
  positions: UIPositionState;
  showQuitPopin: ShowQuitPopinState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  answers,
  slide,
  positions,
  showQuitPopin
});
