import {combineReducers} from 'redux';

import courses from './courses';
import navigation from './navigation';
import slide from './slide';
import token from './token';

export default combineReducers({
  courses,
  navigation,
  slide,
  token
});
