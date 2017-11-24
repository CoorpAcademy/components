import React from 'react';

const Transition = props => {
  const {children} = props;
  return React.Children.only(children);
};

export default Transition;
