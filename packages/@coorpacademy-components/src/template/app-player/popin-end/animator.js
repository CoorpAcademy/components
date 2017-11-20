import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import identity from 'lodash/fp/identity';

class Animator extends React.Component {
  state = {
    bumpStars: false,
    bumpRank: false,
    stars: 0,
    rank: 0
  };

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  getTargetedValue = path => {
    const expression = get(path, this.child.props);
    const match = expression && expression.match(/^\+([0-9]+)$/);

    return Number(getOr('0', '1', match));
  };

  formatRank = () =>
    get('summary.header.rank', this.child.props)
      ? set('header.rank', `+${this.state.rank}`)
      : identity;

  formatStars = () =>
    get('summary.header.stars', this.child.props)
      ? set('header.stars', `+${this.state.stars}`)
      : identity;

  startAnimation = () => {
    this.setState({
      startTime: Date.now(),
      intervalId: this.props.startTimer(this.update, 50)
    });
  };

  stopAnimation() {
    this.props.stopTimer(this.state.intervalId);
  }

  get child() {
    return React.Children.only(this.props.children);
  }

  update = () => {
    if (Date.now() - this.state.startTime >= 500) {
      const targetedStars = this.getTargetedValue('summary.header.stars');
      const targetedRank = this.getTargetedValue('summary.header.rank');
      const stars = this.state.stars < targetedStars ? this.state.stars + 1 : targetedStars;
      const rank = this.state.rank < targetedRank ? this.state.rank + 1 : targetedRank;

      this.setState({
        stars,
        rank,
        bumpStars: stars === targetedStars,
        bumpRank: rank === targetedRank
      });
    }
  };

  render() {
    const summary = pipe(
      this.formatStars(this.child.props.summary, this.state),
      this.formatRank(this.child.props.summary, this.state),
      set('header.bumpStars', this.state.bumpStars),
      set('header.bumpRank', this.state.bumpRank)
    )(this.child.props.summary);

    return React.cloneElement(this.child, {summary});
  }
}

Animator.propTypes = {
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired
};

export const DefaultAnimator = props => {
  const timerProps = {
    startTimer: (func, duration) => setInterval(func, duration),
    stopTimer: timerId => clearInterval(timerId)
  };

  return <Animator {...timerProps}>{props.children}</Animator>;
};

export default Animator;
