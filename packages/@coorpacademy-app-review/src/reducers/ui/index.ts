import {combineReducers} from 'redux';

import finishedSlides from './finished-slides';
import navigation from './navigation';
import reviewStatus from './review-status';
import stepItems from './step-items';

export default combineReducers({
  finishedSlides,
  navigation,
  reviewStatus,
  stepItems
});
