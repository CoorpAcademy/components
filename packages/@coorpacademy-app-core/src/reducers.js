import {combineReducers} from 'redux';
import reduce from 'lodash/fp/reduce';
import {historyReducer as route} from '@coorpacademy/redux-history';
import {createLanguageReducer} from './language';

const composeReducers = (...reducers) => (state, action) =>
  reduce(
    (acc, reducer) => {
      return reducer(acc, action);
    },
    state,
    reducers
  );

const createReducers = ({lang} = {}, reducers) =>
  composeReducers(
    combineReducers({
      lang: createLanguageReducer(lang),
      route,
      ...reducers
    })
  );

export default createReducers;
