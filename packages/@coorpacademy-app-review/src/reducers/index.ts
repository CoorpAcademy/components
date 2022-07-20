import {combineReducers} from 'redux';

import data, {DataState} from './data';
import ui, {UIState} from './ui';

export type StoreState = {
  ui: UIState;
  data: DataState;
};

export default combineReducers({
  data,
  ui
});
