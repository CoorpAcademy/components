import {combineReducers} from 'redux';
import navigation from './navigation';
import token from './token';

const rootReducer = combineReducers({
  navigation,
  token
});

export default rootReducer;
