import React from 'react';
import {noop} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Transition = props => {
  const {name, children, className, animated, onAnimationEnd = noop} = props;

  if (!animated) return children;

  return React.Children.map(children, child => {
    const {
      props: {className: propClassName}
    } = child;

    const handlerAnimationEnd = () => {
      return onAnimationEnd(name);
    };

    return React.cloneElement(child, {
      className: classnames(propClassName, className),
      onTransitionEnd: handlerAnimationEnd,
      onAnimationEnd: handlerAnimationEnd
    });
  });
};

Transition.propTypes = {
  name: PropTypes.string.isRequired,
  onAnimationEnd: PropTypes.func,
  animated: PropTypes.bool
};

export default Transition;
