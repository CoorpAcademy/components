import {RSAA} from 'redux-api-middleware';

export const CREATE_THREAD_REQUEST = '@@thread/CREATE_REQUEST';
export const CREATE_THREAD_SUCCESS = '@@thread/CREATE_SUCCESS';
export const CREATE_THREAD_FAILURE = '@@thread/CREATE_FAILURE';

export const createThreadAction = thread => (dispatch, getState, {api, channel}) => {
  const endpoint = `${api}/forums`;
  const meta = {channel};
  return dispatch({
    [RSAA]: {
      endpoint,
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(thread),
      types: [
        {
          type: CREATE_THREAD_REQUEST,
          meta
        },
        {
          type: CREATE_THREAD_SUCCESS,
          meta,
          payload: (action, state, res) => res.json()
        },
        {
          type: CREATE_THREAD_FAILURE,
          meta
        }
      ]
    }
  });
};
