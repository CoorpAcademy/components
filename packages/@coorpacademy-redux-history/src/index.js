import get from 'lodash/fp/get';
export const NAVIGATE = '@@history/NAVIGATE';

const INITAL_STATE = {
  pathname: ''
};

export const historyReducer = (state = INITAL_STATE, action) => {
  if (action.type === NAVIGATE)
    return {
      ...state,
      ...action.payload
    };
  return state;
};

export const navigate = location => {
  return {
    type: NAVIGATE,
    payload: location
  };
};

export const connectHistory = (history, store, locationPath = 'route') => {
  const getLocation = get(locationPath);
  const onHistoryChange = nextLocation => {
    const location = getLocation(store.getState());

    if (location.key !== nextLocation.key)
      store.dispatch(navigate(nextLocation));
  };

  let unsubscribeHistory = history.listen(onHistoryChange);

  const unsubscribeStore = store.subscribe(() => {
    const location = getLocation(store.getState());
    const currentLocation = history.getCurrentLocation();

    if (location.key !== currentLocation.key) {
      const method = location.action === 'REPLACE' ? 'replace' : 'push';
      unsubscribeHistory();
      history[method](location);
      unsubscribeHistory = history.listen(onHistoryChange);
    }
  });

  return () => {
    unsubscribeHistory();
    unsubscribeStore();
  };
};
