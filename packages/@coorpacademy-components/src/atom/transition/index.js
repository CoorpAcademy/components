import React from 'react';

const Transition = props => {
  const {children, animated, triggerClassName, onAnimationEnd, transitionProperty} = props;
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    className: animated && triggerClassName,
    onTransitionEnd: ({propertyName}) =>
      animated && onAnimationEnd && propertyName === transitionProperty && onAnimationEnd()
  });
};

export default Transition;
