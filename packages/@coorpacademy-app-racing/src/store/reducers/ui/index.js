import {combineReducers} from 'redux';
import answers from './answers';
import corrections from './corrections';
import current from './current';
import route from './route';
import races from './races';

export default combineReducers({
  answers,
  corrections,
  current,
  races,
  route
});
