import React from 'react';
import PropTypes from 'prop-types';
import assign from 'lodash/fp/assign';
import every from 'lodash/fp/every';
import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';
import includes from 'lodash/fp/includes';
import isArray from 'lodash/fp/isArray';
import isNil from 'lodash/fp/isNil';
import isString from 'lodash/fp/isString';
import noop from 'lodash/fp/noop';
import pickBy from 'lodash/fp/pickBy';
import some from 'lodash/fp/some';
import negate from 'lodash/fp/negate';
import identity from 'lodash/fp/identity';
import values from 'lodash/fp/values';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import Animation from '../animation';
import Transition from '../transition';

const AnimationAdapter = ({animated, onAnimationEnd = noop, name, children}) => {
  return React.Children.map(children, child =>
    React.cloneElement(child, {
      animated,
      onAnimationEnd: () => onAnimationEnd(name)
    })
  );
};

AnimationAdapter.propTypes = {
  name: PropTypes.string.isRequired,
  onAnimationEnd: PropTypes.func,
  animated: PropTypes.bool
};

const pickByWithKey = pickBy.convert({cap: true});

const walker = (type, handler) => children => {
  return React.Children.map(children, (child, index) => {
    if (isNil(child) || isString(child)) return child;
    const newChild = child.type === type ? handler(child) : child;
    if (React.Children.count(newChild.props.children) === 0) return newChild;
    return React.cloneElement(newChild, {}, walker(type, handler)(newChild.props.children));
  });
};

const reduceChildren = fun => acc => children => {
  let newAcc = acc;
  React.Children.map(children, child => {
    newAcc = fun(newAcc, child);
    return child;
  });
  return newAcc;
};

const getAnimationNames = reduceChildren((acc, child) => {
  if (isString(child)) return acc;

  const {
    type,
    props: {children}
  } = child;
  if (Animation !== type && Transition !== type && AnimationAdapter !== type)
    return [...acc, ...getAnimationNames(children)];

  const {
    props: {name}
  } = child;
  return [name, ...acc, ...getAnimationNames(children)];
})([]);

const mergeAnimationStates = (animations, children) => {
  const names = getAnimationNames(children);

  return pipe(
    pickByWithKey((value, key) => includes(key, names)),
    assign(reduce((acc, name) => set(name, false, acc), {}, names))
  )(animations);
};

class AnimationScheduler extends React.Component {
  state = {
    animations: mergeAnimationStates({}, this.props.children)
  };

  componentWillReceiveProps(nextProps) {
    this.setState(state => ({
      animations: mergeAnimationStates(state.animations, nextProps.children)
    }));
  }

  isAnimated(after) {
    if (isNil(after)) return true;

    const {animations} = this.state;

    const isAnimated = every(
      name => getOr(false, name, animations),
      isArray(after) ? after : [after]
    );

    return isAnimated;
  }

  handlerAnimationEnd(name) {
    this.setState(set(['animations', name], true), () => {
      const hasPendingAnimation = pipe(
        get('state.animations'),
        values,
        some(negate(identity))
      )(this);
      const {onAnimationEnd = noop} = this.props;
      if (!hasPendingAnimation) return onAnimationEnd();
    });
  }

  processAnimation(child) {
    const {animated: parentAnimated} = this.props;
    const {animated, onAnimationEnd = noop, after} = child.props;

    return React.cloneElement(child, {
      animated: parentAnimated ? this.isAnimated(after) || animated : animated,
      onAnimationEnd: name => {
        this.handlerAnimationEnd(name);
        return onAnimationEnd(name);
      }
    });
  }

  render() {
    const {children} = this.props;
    return pipe(
      walker(Animation, this.processAnimation.bind(this)),
      walker(Transition, this.processAnimation.bind(this)),
      walker(AnimationAdapter, this.processAnimation.bind(this))
    )(children);
  }
}

AnimationScheduler.propTypes = {
  onAnimationEnd: PropTypes.func,
  animated: PropTypes.bool
};

export default AnimationScheduler;

export {AnimationAdapter};
