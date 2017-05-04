import isEqual from 'lodash/fp/isEqual'

/**
 * Does a shallow comparison for props, state and context
 * See also https://facebook.github.io/react/docs/shallow-compare.html
 * from https://github.com/facebook/react/blob/master/src/addons/shallowCompare.js
 */
const shallowCompare = (instance, nextProps, nextState, nextContext) => {
  return (
    !isEqual(instance.props, nextProps) ||
    !isEqual(instance.state, nextState) ||
    !isEqual(instance.context, nextContext)
  );
};

export default shallowCompare;
