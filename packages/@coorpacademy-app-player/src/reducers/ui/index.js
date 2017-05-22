import {combineReducers} from 'redux';
import answers from './answers';
import current from './current';

export default combineReducers({
  answers,
  current
});
