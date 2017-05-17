import {RSAA} from 'redux-api-middleware';

export const PROGRESSION_FETCH_REQUEST = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE = '@@progression/FETCH_FAILURE';

export const fetchProgression = id => (dispatch, getState, {api}) =>
  dispatch({
    [RSAA]: {
      endpoint: `${api}/api/v2/progressions/${id}`,
      method: 'GET',
      headers: state => ({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
      types: [
        {type: PROGRESSION_FETCH_REQUEST, meta: {id}},
        {type: PROGRESSION_FETCH_SUCCESS, meta: {id}},
        {type: PROGRESSION_FETCH_FAILURE, meta: {id}}
      ]
    }
  });

export const ANSWER_CREATE_REQUEST = '@@answer/CREATE_REQUEST';
export const ANSWER_CREATE_SUCCESS = '@@answer/CREATE_SUCCESS';
export const ANSWER_CREATE_FAILURE = '@@answer/CREATE_FAILURE';

export const createAnswer = (id, body) => (dispatch, getState, {api}) =>
  dispatch({
    [RSAA]: {
      endpoint: `${api}/api/v2/progressions/${id}/answers`,
      method: 'POST',
      headers: state => ({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }),
      body,
      types: [
        {type: ANSWER_CREATE_REQUEST, meta: {id}},
        {type: ANSWER_CREATE_SUCCESS, meta: {id}},
        {type: ANSWER_CREATE_FAILURE, meta: {id}}
      ]
    }
  });
