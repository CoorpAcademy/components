import {combineReducers} from 'redux';
import answers from './answers';
import corrections from './corrections';
import current from './current';
import route from './route';

export default combineReducers({
  answers,
  corrections,
  current,
  route
});
