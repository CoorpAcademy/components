import {combineReducers} from 'redux';

import data, {type DataState} from './data';
import ui, {type UIState} from './ui';

export type StoreState = {
  ui: UIState;
  data: DataState;
};

export default combineReducers({
  data,
  ui
});
