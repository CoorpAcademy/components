import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import {createElement} from 'react';

const identityStateToProps = (options, dispatch) => identity;

const createView = (template, mapper = identityStateToProps) => (options, store) =>
  pipe(mapper(options, store), props => createElement(template, props));

export default createView;
