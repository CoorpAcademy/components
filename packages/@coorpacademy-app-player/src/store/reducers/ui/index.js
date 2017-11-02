import {combineReducers} from 'redux';
import answers from './answers';
import coaches from './coaches';
import corrections from './corrections';
import current from './current';
import route from './route';
import extraLife from './extra-life';

export default combineReducers({
  answers,
  coaches,
  corrections,
  current,
  extraLife,
  route
});
