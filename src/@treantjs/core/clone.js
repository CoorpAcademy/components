import defaultsDeep from 'lodash/fp/defaultsDeep';

import h from './h';

const clone = (child, properties, children) => {
  return h(
    child.tagName,
    defaultsDeep(child.properties, properties),
    children || child.children
  );
};

export default clone;
