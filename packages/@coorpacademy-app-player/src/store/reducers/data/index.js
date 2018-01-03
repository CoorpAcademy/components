import {combineReducers} from 'redux';
import answers from './answers';
import comments from './comments';
import configs from './configs';
import contents from './contents';
import nextContent from './next-content';
import clues from './clues';
import exitNodes from './exit-nodes';
import progressions from './progressions';
import rank from './rank';
import recommendations from './recommendations';

export default combineReducers({
  answers,
  comments,
  configs,
  contents,
  clues,
  exitNodes,
  progressions,
  rank,
  recommendations,
  nextContent
});
