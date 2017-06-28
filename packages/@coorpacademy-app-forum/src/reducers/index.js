import {combineReducers} from 'redux';
import api from './api';
import ui from './ui';

const combine = () =>
  combineReducers({
    api,
    ui
  });

export default combine;
