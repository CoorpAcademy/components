import {combineReducers} from 'redux';

import slides from './slides';
import skills from './skills';
import token from './token';

export default combineReducers({
  skills,
  slides,
  token
});
