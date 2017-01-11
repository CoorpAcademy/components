import shallowEqual from 'fbjs/lib/shallowEqual';

/**
 * Does a shallow comparison for props, state and context
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 * from https://github.com/facebook/react/blob/master/src/addons/shallowCompare.js
 */
const shallowCompare = (instance, nextProps, nextState, nextContext) => {
  return (
    !shallowEqual(instance.props, nextProps) ||
    !shallowEqual(instance.state, nextState) ||
    (instance.context && !shallowEqual(instance.context, nextContext))
  );
};

export default shallowCompare;
