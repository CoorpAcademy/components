import pipe from 'lodash/fp/pipe';
import {createElement} from 'react';

const createView = (template, mapper) => (options, store) =>
  pipe(mapper(options, store), props => createElement(template, props));

export default createView;
