const macro = (t, reducer, state, actionTypes) => {
  actionTypes.forEach(type => {
    const action = {
      type
    };
    const message = `${action.type} requires action.meta.id:ProgressionId`;
    t.throws(() => reducer(Object.freeze(state), Object.freeze(action)), message);
  });
};

export default macro;
