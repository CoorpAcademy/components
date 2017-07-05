import {combineReducers} from 'redux';
import answers from './answers';
import chapters from './chapters';
import clues from './clues';
import exitNodes from './exit-nodes';
import progressions from './progressions';
import rank from './rank';
import recommendations from './recommendations';
import slides from './slides';

export default combineReducers({
  answers,
  chapters,
  clues,
  exitNodes,
  progressions,
  rank,
  recommendations,
  slides
});
