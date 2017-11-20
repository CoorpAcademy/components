import React from 'react';
import PropTypes from 'prop-types';

export const AnimationFrameType = PropTypes.shape({
  dt: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
});

class AnimationLoop extends React.Component {
  state = {
    dt: 0,
    frameIndex: 0,
    lastFrameTime: null,
    timerId: null
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.state.timerId);
  }

  start() {
    this.setState({
      frameIndex: 0,
      lastFrameTime: Date.now(),
      timerId: requestAnimationFrame(this.step)
    });
  }

  step = () => {
    const now = Date.now();
    const dt = now - this.state.lastFrameTime;
    const isNewFrame = dt >= this.props.period;

    this.setState({
      dt: isNewFrame ? dt : this.state.dt,
      lastFrameTime: isNewFrame ? now : this.state.lastFrameTime,
      frameIndex: isNewFrame ? this.state.frameIndex + 1 : this.state.frameIndex,
      timerId: requestAnimationFrame(this.step)
    });
  };

  render() {
    const child = React.Children.only(this.props.children);
    const {dt, frameIndex: index} = this.state;

    return React.cloneElement(child, {frame: {dt, index}});
  }
}

AnimationLoop.propTypes = {
  period: PropTypes.number.isRequired
};

export default AnimationLoop;
