import React, {useMemo, useCallback} from 'react';
import {noop} from 'lodash/fp';
import classnames from 'classnames';
import childPropTypes, {ChildProps} from './child-prop-types';
import transitionPropTypes, {TransitionProps} from './transition-prop-types';

const Child = ({child, onAnimationEnd, className, name}: ChildProps) => {
  const {
    props: {className: propClassName}
  } = child;

  const handlerAnimationEnd = useCallback(() => {
    return onAnimationEnd(name);
  }, [onAnimationEnd, name]);

  return React.cloneElement(child, {
    className: classnames(propClassName, className),
    onTransitionEnd: handlerAnimationEnd,
    onAnimationEnd: handlerAnimationEnd
  });
};

Child.propTypes = childPropTypes;

const Transition = (props: TransitionProps) => {
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

Transition.propTypes = transitionPropTypes;

export default Transition;
