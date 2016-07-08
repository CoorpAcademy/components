import isFunction from 'lodash/fp/isFunction';

const resolve = vTree => {
  if (isFunction(vTree.tagName))
    return resolve(vTree.tagName(
      vTree.properties,
      vTree.children
    ));
  return vTree;
};

export default resolve;
