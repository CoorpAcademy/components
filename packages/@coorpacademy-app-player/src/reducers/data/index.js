import {combineReducers} from 'redux';
import answers from './answers';
import clues from './clues';
import exitNodes from './exit-nodes';
import progressions from './progressions';
import rank from './rank';
import recommendations from './recommendations';
import slides from './slides';

export default combineReducers({
  answers,
  clues,
  exitNodes,
  progressions,
  rank,
  recommendations,
  slides
});
