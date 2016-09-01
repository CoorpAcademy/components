import isFunction from 'lodash/fp/isFunction';

const resolve = vTree => {
  if (isFunction(vTree.tagName)) {
    if (process.env.NODE_ENV !== 'production' && vTree.tagName.validate) {
      vTree.tagName.validate(
        vTree.properties,
        vTree.children
      );
    }

    return resolve(vTree.tagName(
      vTree.properties,
      vTree.children
    ));
  }

  return vTree;
};

export default resolve;
