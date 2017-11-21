import React from 'react';
import PropTypes from 'prop-types';

export const AnimationPropType = PropTypes.shape({
  time: PropTypes.number.isRequired
});

class AnimationLoop extends React.Component {
  state = {
    startTime: null,
    timerId: null
  };

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.state.timerId);
  }

  start = () =>
    this.setState({
      startTime: Date.now(),
      timerId: requestAnimationFrame(this.step)
    });

  step = () =>
    this.setState({
      timerId: requestAnimationFrame(this.step)
    });

  render() {
    const child = React.Children.only(this.props.children);
    const animation = {time: Date.now() - this.state.startTime};

    return React.cloneElement(child, {animation});
  }
}

export default AnimationLoop;
