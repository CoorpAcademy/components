import {combineReducers} from 'redux';
import answers from './answers';
import corrections from './corrections';
import current from './current';

export default combineReducers({
  answers,
  current,
  corrections
});
