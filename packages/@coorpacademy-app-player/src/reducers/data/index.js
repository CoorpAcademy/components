import {combineReducers} from 'redux';
import slides from './slides';
import progressions from './progressions';

export default combineReducers({
  slides,
  progressions
});
