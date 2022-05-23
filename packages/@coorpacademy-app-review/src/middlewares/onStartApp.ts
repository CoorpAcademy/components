import type {Middleware, MiddlewareAPI, Dispatch} from 'redux';

import {Action, receivedCourse, START_APP, storeToken} from '../actions';
import {StoreState} from '../configure-store';
import fetchCourse from '../services/fetch-demo';

type $Middleware = (StoreState) => (next: Dispatch<Action>) => (Action) => Action;

const onStartApp: $Middleware = ({dispatch, getState}) => next => (action: Action) => {
  if (action.type === START_APP) {
    const {token} = action.payload;
    dispatch(storeToken(token));

    // --------------
    // demo service

    const language = 'fr';
    const universalRef = 'dis_NkAPG3m4U';
    fetchCourse(token, language, universalRef).then(course => {
      console.log({course});
      dispatch(receivedCourse(course));
    });
  }

  return next(action);
};

export default onStartApp;
