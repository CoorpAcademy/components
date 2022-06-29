import {combineReducers} from 'redux';

import data from './data';
import courses from './courses';
import finishedSlides from './finished-slides';
import navigation from './navigation';
import reviewStatus from './review-status';
import slides from './slides';
import stepItems from './step-items';

const ui = combineReducers({
  courses,
  finishedSlides,
  navigation,
  reviewStatus,
  slides,
  stepItems
});

export default combineReducers({
  ui,
  data
});
