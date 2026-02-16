import {combineReducers} from 'redux';
import answers from './answers';
import coaches from './coaches';
import comments from './comments';
import corrections from './corrections';
import current from './current';
import location from './location';
import route from './route';
import tourguide from './tourguide';
import tourguideTracking from './tourguide-tracking';

export default combineReducers({
  answers,
  coaches,
  comments,
  corrections,
  current,
  location,
  route,
  tourguide,
  tourguideTracking
});
