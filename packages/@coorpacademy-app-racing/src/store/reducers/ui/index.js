import {combineReducers} from 'redux';
import answers from './answers';
import current from './current';
import route from './route';
import races from './races';

export default combineReducers({
  answers,
  current,
  races,
  route
});
