import React from 'react';
import noop from 'lodash/fp/noop';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Transition = props => {
  const {name, children, className, animated, onAnimationEnd = noop} = props;

  if (!animated) return children;

  return React.Children.map(children, child => {
    const {props: {className: propClassName}} = child;

    const handlerAnimationEnd = () => {
      onAnimationEnd(name);
    };

    return React.cloneElement(child, {
      className: classnames(propClassName, className),
      onTransitionEnd: handlerAnimationEnd,
      onAnimationEnd: handlerAnimationEnd
    });
  });
};

Transition.propTypes = {
  name: PropTypes.string,
  onAnimationEnd: PropTypes.func.optional,
  animated: PropTypes.bool.optional
};

export default Transition;
