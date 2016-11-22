import get from 'lodash/fp/get';

const INITAL_STATE = {
  pathname: ''
};

export const NAVIGATE = '@@history/NAVIGATE';

export const historyReducer = (state = INITAL_STATE, action) => {
  if (action.type === NAVIGATE)
    return {
      ...state,
      ...action.payload
    };
  return state;
};

export const navigate = payload => {
  return {
    type: NAVIGATE,
    payload
  };
};

export const connectHistory = (_history, store, locationPath = 'route') => {
  const getLocation = get(locationPath);
  const onHistoryChange = nextLocation => {
    const _location = getLocation(store.getState());

    if (_location.key !== nextLocation.key)
      store.dispatch(navigate(nextLocation));
  };

  let unsubscribeHistory = _history.listen(onHistoryChange);

  const unsubscribeStore = store.subscribe(() => {
    const currentLocationFromState = getLocation(store.getState());
    const currentLocationFromHistory = _history.location;

    if (currentLocationFromState.key !== currentLocationFromHistory.key) {
      const method = currentLocationFromState.action === 'REPLACE' ? 'replace' : 'push';
      unsubscribeHistory();
      _history[method](currentLocationFromState);
      unsubscribeHistory = _history.listen(onHistoryChange);
    }
  });

  return () => {
    unsubscribeHistory();
    unsubscribeStore();
  };
};
