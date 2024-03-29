import {combineReducers} from 'redux';

import currentSlideRef, {CurrentSlideRefState} from './current-slide-ref';
import navigation, {NavigationState} from './navigation';
import answers, {UIAnswerState} from './answers';
import positions, {UIPositionState} from './positions';
import slide, {UISlideState} from './slide';
import showQuitPopin, {type ShowQuitPopinState} from './quit-popin';
import showButtonRevising, {UIShowButtonRevisingState} from './show-button-revising';
import showCongrats, {UIShowCongratsState} from './show-congrats';

export type UIState = {
  currentSlideRef: CurrentSlideRefState;
  navigation: NavigationState;
  answers: UIAnswerState;
  slide: UISlideState;
  positions: UIPositionState;
  showQuitPopin: ShowQuitPopinState;
  showButtonRevising: UIShowButtonRevisingState;
  showCongrats: UIShowCongratsState;
};

export default combineReducers({
  currentSlideRef,
  navigation,
  answers,
  slide,
  positions,
  showQuitPopin,
  showButtonRevising,
  showCongrats
});
