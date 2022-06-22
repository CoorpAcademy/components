import {combineReducers} from 'redux';

import api from './api';
import courses from './courses';
import finishedSlides from './finished-slides';
import navigation from './navigation';
import reviewStatus from './review-status';
import slides from './slides';
import stepItems from './step-items';
import token from './token';

export default combineReducers({
  api,
  courses,
  finishedSlides,
  navigation,
  reviewStatus,
  slides,
  stepItems,
  token
});
