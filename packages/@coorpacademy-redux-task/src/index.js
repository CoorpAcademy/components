import constant from 'lodash/fp/constant';
import isUndefined from 'lodash/fp/isUndefined';
import identity from 'lodash/fp/identity';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';

const setMeta = meta => (isUndefined(meta) ? identity : set('meta', meta));

const reduxTask = ({bailout = constant(false), meta, task, types}) => async (
  dispatch,
  getState,
  options
) => {
  let REQUEST, SUCCESS, FAILURE;

  if (types.length === 3) {
    [REQUEST, SUCCESS, FAILURE] = types;

    await pipe(setMeta(meta), dispatch)({
      type: REQUEST
    });
  } else {
    [SUCCESS, FAILURE] = types;
  }

  if (bailout(getState())) {
    return true;
  }

  try {
    const data = await Promise.resolve().then(() => task(dispatch, getState, options));
    return pipe(setMeta(meta), dispatch)({
      type: SUCCESS,
      payload: data
    });
  } catch (err) {
    return pipe(setMeta(meta), dispatch)({
      type: FAILURE,
      error: true,
      payload: err
    });
  }
};

export default reduxTask;
