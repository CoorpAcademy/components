import fetch from 'cross-fetch';
import type {Middleware} from 'redux';
import {Dispatch} from 'redux';

import {Action, receivedCourse, START_APP, storeToken} from '../actions';
import {StoreState} from '../configure-store';
import fetchCourse from '../services/fetch-demo';

const onStartApp: Middleware<{}, StoreState, Dispatch<Action>> = ({dispatch}) => next => (
  action: Action
) => {
  if (action.type === START_APP) {
    const {token} = action.payload;
    dispatch(storeToken(token));

    // --------------
    // demo service

    const language = 'fr';
    const universalRef = 'dis_xxx15';

    fetchCourse(token, language, universalRef).then(course => {
      dispatch(receivedCourse(course));
    });
  }

  return next(action);
};

export default onStartApp;
