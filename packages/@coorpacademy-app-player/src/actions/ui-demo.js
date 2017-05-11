export const UI_UPDATE_PLOP = '@@ui-demo/UPDATE_PLOP';
export const UI_UPDATE_PLUP = '@@ui-demo/UPDATE_PLUP';

export const updatePlop = ({plop}) => (dispatch, {state, params}, store) => {
  return dispatch({
    type: UI_UPDATE_PLOP,
    plop
  });
};

export const updatePlup = ({plup}) => (dispatch, {state, params}, store) => {
  return dispatch({
    type: UI_UPDATE_PLUP,
    plup
  });
};
