import {combineReducers, compose} from 'redux';
import {historyReducer} from '../../../redux-tools/redux-history';

export const createReducer = () => combineReducers({
  route: historyReducer
});
