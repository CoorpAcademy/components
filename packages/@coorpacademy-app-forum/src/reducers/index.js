import {combineReducers} from 'redux';
import api from './api';
import ui from './ui';

export default () =>
  combineReducers({
    api,
    ui
  });
