import {constant, isUndefined, identity, pipe, set} from 'lodash/fp';

const setMeta = meta => (isUndefined(meta) ? identity : set('meta', meta));

const reduxTask =
  ({bailout = constant(false), meta, task, types}) =>
  async (dispatch, getState, options) => {
    const [REQUEST, SUCCESS, FAILURE] = types;

    const request = await pipe(
      setMeta(meta),
      dispatch
    )({
      type: REQUEST
    });

    if (bailout(getState())) {
      return request;
    }

    try {
      const data = await Promise.resolve().then(() => task(dispatch, getState, options));
      return pipe(
        setMeta(meta),
        dispatch
      )({
        type: SUCCESS,
        payload: data
      });
    } catch (err) {
      return pipe(
        setMeta(meta),
        dispatch
      )({
        type: FAILURE,
        error: true,
        payload: err
      });
    }
  };

export default reduxTask;
