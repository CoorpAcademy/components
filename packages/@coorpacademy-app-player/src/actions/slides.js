import {RSAA} from 'redux-api-middleware';

export const SLIDE_FETCH_REQUEST = '@@slide/FETCH_REQUEST';
export const SLIDE_FETCH_SUCCESS = '@@slide/FETCH_SUCCESS';
export const SLIDE_FETCH_FAILURE = '@@slide/FETCH_FAILURE';

export const fetchSlide = ({api = ''} = {}, dispatch, getState, id) =>
  dispatch({
    [RSAA]: {
      endpoint: `${api}/api/v1/slides/${id}`,
      method: 'GET',
      types: [
        {type: SLIDE_FETCH_REQUEST, meta: {id}},
        {type: SLIDE_FETCH_SUCCESS, meta: {id}},
        {type: SLIDE_FETCH_FAILURE, meta: {id}}
      ]
    }
  });
