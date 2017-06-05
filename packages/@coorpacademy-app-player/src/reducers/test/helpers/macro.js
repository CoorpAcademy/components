export default (t, reducer, state, action, expected) => {
  t.deepEqual(reducer(Object.freeze(state), Object.freeze(action)), Object.freeze(expected));
};
