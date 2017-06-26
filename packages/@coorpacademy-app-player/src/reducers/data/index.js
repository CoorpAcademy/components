import {combineReducers} from 'redux';
import answers from './answers';
import clues from './clues';
import exitNodes from './exit-nodes';
import progressions from './progressions';
import slides from './slides';

export default combineReducers({
  answers,
  clues,
  exitNodes,
  progressions,
  slides
});
