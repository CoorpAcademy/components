import React from 'react';
import PropTypes from 'prop-types';
import min from 'lodash/fp/min';
import noop from 'lodash/fp/noop';
import bezier from 'cubic-bezier';

const EPSILON = 1000;
export const LINEAR = bezier(0, 0, 1, 1, EPSILON);
export const EASE_IN_QUAD = bezier(0.55, 0.08, 0.68, 0.53, EPSILON);
export const EASE_IN_CUBIC = bezier(0.55, 0.05, 0.67, 0.19, EPSILON);
export const EASE_IN_QUART = bezier(0.89, 0.03, 0.68, 0.22, EPSILON);
export const EASE_IN_QUINT = bezier(0.75, 0.05, 0.85, 0.06, EPSILON);
export const EASE_IN_SINE = bezier(0.47, 0.0, 0.74, 0.71, EPSILON);
export const EASE_IN_EXPO = bezier(0.95, 0.05, 0.79, 0.03, EPSILON);
export const EASE_IN_CIRC = bezier(0.6, 0.04, 0.98, 0.33, EPSILON);
export const EASE_IN_BACK = bezier(0.6, -0.28, 0.73, 0.04, EPSILON);
export const EASE_OUT_QUAD = bezier(0.25, 0.46, 0.45, 0.94, EPSILON);
export const EASE_OUT_CUBIC = bezier(0.21, 0.61, 0.35, 1, EPSILON);
export const EASE_OUT_QUART = bezier(0.16, 0.84, 0.44, 1, EPSILON);
export const EASE_OUT_QUINT = bezier(0.23, 1, 0.32, 1, EPSILON);
export const EASE_OUT_SINE = bezier(0.39, 0.57, 0.56, 1, EPSILON);
export const EASE_OUT_EXPO = bezier(0.19, 1, 0.22, 1, EPSILON);
export const EASE_OUT_CIRC = bezier(0.07, 0.82, 0.16, 1, EPSILON);
export const EASE_OUT_BACK = bezier(0.17, 0.88, 0.32, 1.27, EPSILON);
export const EASE_IN_OUT_QUAD = bezier(0.45, 0.03, 0.51, 0.95, EPSILON);
export const EASE_IN_OUT_CUBIC = bezier(0.64, 0.04, 0.35, 1, EPSILON);
export const EASE_IN_OUT_QUART = bezier(0.77, 0, 0.17, 1, EPSILON);
export const EASE_IN_OUT_QUINT = bezier(0.86, 0, 0.07, 1, EPSILON);
export const EASE_IN_OUT_SINE = bezier(0.44, 0.05, 0.55, 0.95, EPSILON);
export const EASE_IN_OUT_EXPO = bezier(1, 0, 0, 1, EPSILON);
export const EASE_IN_OUT_CIRC = bezier(0.78, 0.13, 0.15, 0.86, EPSILON);
export const EASE_IN_OUT_BACK = bezier(0.68, -0.55, 0.26, 1.55, EPSILON);
export const SWIFT_OUT = bezier(0.55, 0, 0.1, 1, EPSILON);
export const BOUNCE = bezier(0.65, 1.95, 0.03, 0.3, EPSILON);

class Animation extends React.Component {
  state = {
    progress: 0
  };

  componentDidMount() {
    const {animated = false} = this.props;
    if (animated) this.startAnimation();
  }

  componentWillReceiveProps(nextProps) {
    const {animated: nextAnimated = false} = nextProps;
    const {animated: prevAnimated = false} = this.props;

    if (nextAnimated === prevAnimated) return;

    if (nextAnimated) this.startAnimation();
    else this.stopAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  requestID = null;

  startAnimation() {
    const {requestID} = this;

    if (requestID) cancelAnimationFrame(requestID);
    this.requestID = requestAnimationFrame(this.tick.bind(this));
  }

  stopAnimation() {
    const {requestID} = this;
    if (!requestID) return;

    cancelAnimationFrame(requestID);
    this.requestID = null;

    this.setState(() => ({
      lastTimestamp: null,
      requestID: null
    }));
  }

  tick(timestamp) {
    this.setState(
      prevState => {
        const {lastTimestamp} = prevState;
        if (!lastTimestamp)
          return {
            lastTimestamp: timestamp
          };

        const deltaDuration = timestamp - lastTimestamp;
        return {
          progress: min([prevState.progress + this.getProgress(deltaDuration), 1]),
          lastTimestamp: timestamp
        };
      },
      () => {
        const {progress} = this.state;
        if (progress < 1) return this.startAnimation();

        const {onAnimationEnd = noop, name} = this.props;
        onAnimationEnd(name);
      }
    );
  }

  getProgress(deltaDuration) {
    const {duration} = this.props;
    return deltaDuration / duration;
  }

  render() {
    const {bezier: fnBezier, children} = this.props;
    const {progress} = this.state;

    const value = fnBezier(progress);
    return children(value);
  }
}

Animation.propTypes = {
  name: PropTypes.string.isRequired,
  bezier: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  onAnimationEnd: PropTypes.func,
  animated: PropTypes.bool
};

export default Animation;
