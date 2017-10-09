import {combineReducers} from 'redux';
import data from './data';
import ui from './ui';

const reducer = () =>
  combineReducers({
    data,
    ui
  });

export default reducer;
