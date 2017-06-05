import {combineReducers} from 'redux';
import slides from './slides';
import progressions from './progressions';
import exitNodes from './exit-nodes';

export default combineReducers({
  slides,
  progressions,
  exitNodes
});
