import {combineReducers} from 'redux';
import answers from './answers';
import coaches from './coaches';
import comment from './comments';
import corrections from './corrections';
import current from './current';
import route from './route';

export default combineReducers({
  answers,
  coaches,
  comment,
  corrections,
  current,
  route
});
