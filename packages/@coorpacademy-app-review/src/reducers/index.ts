import {combineReducers} from 'redux';

import courses from './courses';
import navigation from './navigation';
import token from './token';

const rootReducer = combineReducers({
  courses,
  navigation,
  token
});

export default rootReducer;
