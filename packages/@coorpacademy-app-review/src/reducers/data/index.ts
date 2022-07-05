import {combineReducers} from 'redux';

import progression from './progression';
import skills from './skills';
import slides from './slides';
import token from './token';

export default combineReducers({
  progression,
  skills,
  slides,
  token
});
