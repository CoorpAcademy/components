import constant from 'lodash/fp/constant';
import isUndefined from 'lodash/fp/isUndefined';
import identity from 'lodash/fp/identity';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';

const setMeta = meta => (isUndefined(meta) ? identity : set('meta', meta));

export default ({bailout = constant(false), meta, task, types}) => async (
  dispatch,
  getState,
  options
) => {
  const [REQUEST, SUCCESS, FAILURE] = types;

  const request = await pipe(setMeta(meta), dispatch)({
    type: REQUEST
  });

  if (bailout(getState())) {
    return request;
  }

  try {
    const data = await Promise.resolve(task(dispatch, getState, options));
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
