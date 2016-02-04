import React, { createElement } from 'react';

export default {
  h: createElement,
  map: (children, fun) => React.Children.map(React.Children.only(children), fun)[0],
  clone: React.cloneElement
};
