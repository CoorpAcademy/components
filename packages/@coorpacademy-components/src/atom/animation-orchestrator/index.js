import React from 'react';
import PropTypes from 'prop-types';
import every from 'lodash/fp/every';
import getOr from 'lodash/fp/getOr';
import isNil from 'lodash/fp/isNil';
import noop from 'lodash/fp/noop';
import isArray from 'lodash/fp/isArray';
import Animation from '../animation';

const walker = (children, type, handler) => {
  return React.Children.map(children, child => {
    const newChild = type === child.type ? handler(child) || child : child;
    if (React.Children.count(newChild.props.children) === 0) return newChild;
    return React.cloneElement(newChild, {}, walker(newChild.props.children, type, handler));
  });
};

class AnimationOrchestrator extends React.Component {
  isAnimated(after) {
    if (isNil(after)) return true;

    const isAnimated = every(
      name => getOr(false, name, this.state),
      isArray(after) ? after : [after]
    );

    return isAnimated;
  }

  render() {
    const {children, animated: parentAnimated} = this.props;
    return walker(children, Animation, child => {
      const {animated, onAnimationEnd = noop, after} = child.props;
      return React.cloneElement(child, {
        animated: parentAnimated ? this.isAnimated(after) || animated : animated,
        onAnimationEnd: name => {
          this.setState(() => {
            return {
              [name]: true
            };
          });
          return onAnimationEnd(name);
        }
      });
    });
  }
}

Animation.propTypes = {
  name: PropTypes.string.optional,
  onAnimationEnd: PropTypes.func.optional,
  animated: PropTypes.bool.optional
};

export default AnimationOrchestrator;
