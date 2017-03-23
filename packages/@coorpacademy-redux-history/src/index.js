import {parse as qsParse} from 'querystring';
import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import isEqual from 'lodash/fp/isEqual';
import negate from 'lodash/fp/negate';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';

export const LOCATION = '@@history/LOCATION';
export const NAVIGATE = '@@history/NAVIGATE';

const REMOVE_QUESTION_MARK = /^\??(.*)/;
const parseQuery = pipe(
  s => REMOVE_QUESTION_MARK.exec(s),
  get(1),
  qsParse
);

export const createLocation = location => {
  const loc = pipe(
      getOr('', 'search'),
      parseQuery,
      query => {
        if (isEqual(query, {}))
          return location;
        return set('query', query, location);
      }
    )(location);

  return {
    type: LOCATION,
    payload: {
      ...loc
    }
  };
};

const ACTIONS_HISTORY = {
  PUSH: 'push',
  REPLACE: 'replace',
  GO: 'go',
  GO_BACK: 'goBack',
  GO_FORWARD: 'goForward'
};

const createNavigate = action => (...args) => {
  return {
    type: NAVIGATE,
    payload: {
      action,
      args
    }
  };
};

export const createPushNavigate = createNavigate(ACTIONS_HISTORY.PUSH);
export const createReplaceNavigate = createNavigate(ACTIONS_HISTORY.REPLACE);
export const createGoNavigate = createNavigate(ACTIONS_HISTORY.GO);
export const createGoBackNavigate = createNavigate(ACTIONS_HISTORY.GO_BACK);
export const createGoForwardNavigate = createNavigate(ACTIONS_HISTORY.GO_FORWARD);

export const INITAL_STATE = {};

export const historyReducer = (state = INITAL_STATE, {type, payload}) => {
  if (type === LOCATION)
    return payload;
  return state;
};

export const historyMiddleware = ({history}) => store => {
  history.listen(location => {
    store.dispatch(createLocation(location));
  });

  return next => action => {
    if (action.type === NAVIGATE) {
      const {
        payload: {
          action: historyAction,
          args
        }
      } = action;

      switch (historyAction) {
        case ACTIONS_HISTORY.PUSH:
          history.push(...args);
          break;
        case ACTIONS_HISTORY.REPLACE:
          history.replace(...args);
          break;
        case ACTIONS_HISTORY.GO:
          history.go(...args);
          break;
        case ACTIONS_HISTORY.GO_BACK:
          history.goBack(...args);
          break;
        case ACTIONS_HISTORY.GO_FORWARD:
          history.goForward(...args);
          break;
      }
    }

    return next(action);
  };
};

export const syncStoreWithHistory = (store, history) => {
  const action = createLocation(history.location);
  return store.dispatch(action);
};
