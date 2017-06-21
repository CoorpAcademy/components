import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import {createElement} from 'react';

const identityStateToProps = (options, dispatch) => identity;

const createView = (options, dispatch, template, mapper = identityStateToProps) => {
  const stateToProps = mapper(options, dispatch);
  return pipe(stateToProps, props => createElement(template, props));
};

export default createView;
