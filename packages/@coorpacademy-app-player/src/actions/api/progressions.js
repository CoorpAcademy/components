import {getProgression} from '../../utils/state-extract';

export const PROGRESSION_FETCH_REQUEST = '@@progression/FETCH_REQUEST';
export const PROGRESSION_FETCH_SUCCESS = '@@progression/FETCH_SUCCESS';
export const PROGRESSION_FETCH_FAILURE = '@@progression/FETCH_FAILURE';

const buildAction = ({bailout, meta, handler, types}) => async (dispatch, getState) => {
  const [REQUEST, SUCCESS, FAILURE] = types;

  const request = await dispatch({
    type: REQUEST,
    meta
  });

  if (bailout && bailout(getState())) {
    return request;
  }

  try {
    const data = await Promise.resolve(handler());
    return dispatch({
      type: SUCCESS,
      meta,
      payload: data
    });
  } catch (err) {
    return dispatch({
      type: FAILURE,
      meta,
      error: true,
      payload: err
    });
  }
};

export const fetchProgression = id => (dispatch, getState, {services}) => {
  const {Progressions} = services;
  return dispatch(
    buildAction({
      types: [PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS, PROGRESSION_FETCH_FAILURE],
      handler: () => Progressions.findById(id),
      meta: {id},
      bailout: getProgression(id)
    })
  );
};
