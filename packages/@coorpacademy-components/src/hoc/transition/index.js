import React, {useMemo} from 'react';
import {noop} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Child = ({child, onAnimationEnd, className, name}) => {
  const {
    props: {className: propClassName}
  } = child;

  const handlerAnimationEnd = useMemo(
    () => () => {
      return onAnimationEnd(name);
    },
    [onAnimationEnd, name]
  );

  return React.cloneElement(child, {
    className: classnames(propClassName, className),
    onTransitionEnd: handlerAnimationEnd,
    onAnimationEnd: handlerAnimationEnd
  });
};

const Transition = props => {
  const {name, children, className, animated, onAnimationEnd = noop} = props;

  const animatedChildren = useMemo(
    () =>
      React.Children.map(children, child => (
        <Child child={child} onAnimationEnd={onAnimationEnd} className={className} name={name} />
      )),
    [children, className, name, onAnimationEnd]
  );

  return animated ? animatedChildren : children;
};

Transition.propTypes = {
  name: PropTypes.string.isRequired,
  onAnimationEnd: PropTypes.func,
  animated: PropTypes.bool
};

export default Transition;
