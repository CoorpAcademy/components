import curry from 'lodash/fp/curry';
import {RSAA} from 'redux-api-middleware';

export const DISCUSSION_FETCH_REQUEST = '@@discussion/FETCH_REQUEST';
export const DISCUSSION_FETCH_SUCCESS = '@@discussion/FETCH_SUCCESS';
export const DISCUSSION_FETCH_FAILURE = '@@discussion/FETCH_FAILURE';

export const fetchDiscussionAction = curry(({api, channel}, dispatch) => {
  const endpoint = `${api}/forums/${encodeURIComponent(channel)}/discussions`;
  const meta = {channel};

  return dispatch({
    [RSAA]: {
      endpoint,
      method: 'GET',
      credentials: 'include',
      types: [
        {
          type: DISCUSSION_FETCH_REQUEST,
          meta
        },
        {
          type: DISCUSSION_FETCH_SUCCESS,
          meta,
          payload: (action, state, res) => res.json()
        },
        {
          type: DISCUSSION_FETCH_FAILURE,
          meta
        }
      ]
    }
  });
});
