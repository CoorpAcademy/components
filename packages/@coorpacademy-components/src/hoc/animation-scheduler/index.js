import React from 'react';
import PropTypes from 'prop-types';
import {
  assign,
  every,
  getOr,
  get,
  includes,
  isArray,
  isNil,
  isString,
  noop,
  pickBy,
  some,
  negate,
  identity,
  values,
  pipe,
  reduce,
  set
} from 'lodash/fp';
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
  static propTypes = {
    onAnimationEnd: PropTypes.func,
    animated: PropTypes.bool,
    children: PropTypes.node
  };

  static getDerivedStateFromProps(props, state) {
    const {children} = props;
    const {animations} = state;
    return {
      animations: mergeAnimationStates(animations, children)
    };
  }

  constructor(props) {
    super(props);

    const {children} = props;
    this.state = {
      animations: mergeAnimationStates({}, children)
    };
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

export default AnimationScheduler;

export {AnimationAdapter};
