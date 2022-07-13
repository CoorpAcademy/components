export const START_APP = '@@navigation/START_APP';

export type StartApp = {
  type: '@@ui/START_APP';
  payload: AppOptions;
};


export const startApp =
  (options: AppOptions): StartApp =>
  (dispatch, getState, {services}) => {
    dispatch({
      type: START_APP
    });
  };
