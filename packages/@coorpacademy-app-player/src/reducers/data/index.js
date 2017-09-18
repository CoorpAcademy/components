import {combineReducers} from 'redux';
import answers from './answers';
import contents from './contents';
import clues from './clues';
import exitNodes from './exit-nodes';
import progressions from './progressions';
import rank from './rank';
import recommendations from './recommendations';

export default combineReducers({
  answers,
  contents,
  clues,
  exitNodes,
  progressions,
  rank,
  recommendations
});
