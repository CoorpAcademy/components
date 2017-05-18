export const SLIDE_FETCH_REQUEST = '@@slide/FETCH_REQUEST';
export const SLIDE_FETCH_SUCCESS = '@@slide/FETCH_SUCCESS';
export const SLIDE_FETCH_FAILURE = '@@slide/FETCH_FAILURE';

export const fetchSlide = id => (dispatch, getState, {api}) => {};
// dispatch({
//   [RSAA]: {
//     endpoint: `${api}/api/v1/slides/${id}`,
//     method: 'GET',
//     headers: state => ({
//       'Content-Type': 'application/json',
//       'X-Requested-With': 'XMLHttpRequest'
//     }),
//     types: [
//       {type: SLIDE_FETCH_REQUEST, meta: {id}},
//       {type: SLIDE_FETCH_SUCCESS, meta: {id}},
//       {type: SLIDE_FETCH_FAILURE, meta: {id}}
//     ]
//   }
// });
