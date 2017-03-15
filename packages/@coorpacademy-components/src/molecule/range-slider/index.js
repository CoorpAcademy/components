import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import shallowCompare from '../../util/shallow-compare';
import Handle from '../../atom/handle';
import style from './style.css';

const getOrBlank = getOr('');

const xWithConstraints = ({x, delta, min, max}) => {
  const newX = x + delta;
  if (newX < min) {
    return min;
  }

  if (newX > max) {
    return max;
  }

  return newX;
};

class RangeSlider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ...props
    };

    this.setX = this.setX.bind(this);
    this.handlePanStart = this.handlePanStart.bind(this);
    this.updatePositions = this.updatePositions.bind(this);
  }

  componentDidMount() {
    const max = this.railWidth();
    const x1 = getOr(0, 'handle1.x', this.state);
    const x2 = getOr(max, 'handle2.x', this.state);

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      handle1: {
        x: x1,
        min: 0,
        max: x2
      },
      handle2: {
        x: x2,
        min: x1,
        max
      },
      railWidth: max
    });

    window.addEventListener('resize', this.updatePositions);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePositions);
  }

  updatePositions() {
    this.setState((previousState, currentProps) => {
      const newWidth = this.railWidth();
      const ratio = newWidth / previousState.railWidth;

      return {
        handle1: {
          x: previousState.handle1.x * ratio,
          min: 0,
          max: previousState.handle2.x * ratio
        },
        handle2: {
          x: previousState.handle2.x * ratio,
          min: previousState.handle1.x * ratio,
          max: newWidth
        },
        railWidth: newWidth
      };
    });
  }

  handlePanStart(num) {
    return e => this.setState((previousState, currentProps) =>
      set(
        [`handle${num}`, 'panStart'],
        e.target.offsetLeft,
        previousState
      )
    );
  }

  handlePanEnd(num) {
    const setX = this.setX(num, true);
    return e => {
      setX(e);
    };
  }

  calculateStepX(e, num, steps, previousState, snap) {
    let x = this.extractXFromEvent(num, e);
    const handle = `handle${num}`;
    const width = previousState.railWidth;

    const stepWidth = width / (steps.length - 1);
    let minStep = Math.floor(x / stepWidth);
    let maxStep = Math.ceil(x / stepWidth);

    const left = minStep * stepWidth;
    const right = maxStep * stepWidth;

    const leftIsCloser = x - left < right - x;

    if (snap) {
      x = leftIsCloser ? left : right;
    }

    let step = leftIsCloser ? minStep : maxStep;
    let state = set([handle, 'x'], x, previousState);

    if (snap && this.props.forceRange) {
      const handlesAtSameX = state.handle1.x === state.handle2.x;

      if (handlesAtSameX) {
        if (num === 1) {
          minStep = Math.floor((x - 1) / stepWidth);
          state = set([handle, 'x'], minStep * stepWidth, previousState);
          step = minStep;
        }
        else {
          maxStep = Math.ceil((x + 1) / stepWidth);
          state = set([handle, 'x'], maxStep * stepWidth, previousState);
          step = maxStep;
        }
      }
    }

    state = set([handle, 'step'], step, state);
    return state;
  }

  setCalculatedX(e, num, previousState, steps, snap) {
    if (steps) {
      return this.calculateStepX(e, num, steps, previousState, snap);
    }
    else {
      const x = this.extractXFromEvent(num, e);
      const handle = `handle${num}`;
      return set([handle, 'x'], x, previousState);
    }
  }

  setX(num, snap) {
    const steps = this.props.steps;
    const onChange = this.props.onChange;

    return e => this.setState((previousState, currentProps) => {
      let state = this.setCalculatedX(e, num, previousState, steps, snap);
      state = set(['handle1', 'max'], state.handle2.x, state);
      state = set(['handle2', 'min'], state.handle1.x, state);

      const isMax = state.handle1.x === state.railWidth;
      state = set('isMax', isMax, state);

      if (onChange) {
        onChange(state);
      }

      return state;
    });
  }

  extractXFromEvent(num, e) {
    return xWithConstraints({
      x: this.state[`handle${num}`].panStart,
      delta: e.deltaX,
      min: this.state[`handle${num}`].min,
      max: this.state[`handle${num}`].max || this.state.railWidth
    });
  }

  railWidth() {
    return findDOMNode(this._rail).clientWidth;
  }

  render() {
    const {
      isMax,
      handle1 = this.props.handle1,
      handle2 = this.props.handle2
    } = this.state;

    const x1 = getOr(0, 'x', handle1);
    const x2 = getOr(0, 'x', handle2);

    const {
      steps,
      title,
      labelMin,
      labelMax
    } = this.props;

    return (
      <div className={style.default}>
        <p className={style.title}>{title}</p>
        <div
          className={style.rail} // eslint-disable-next-line no-return-assign
          ref={div => this._rail = div} // eslint-disable-line react/jsx-no-bind
        >
          <div
            className={style.track}
            style={{
              left: `${x1}px`,
              width: `${x2 - x1}px`
            }}
          />
          <Handle
            className={style.handle}
            style={{
              zIndex: isMax ? '1' : '0'
            }}
            axis={'x'}
            x={x1}
            handlePan={this.setX(1)}
            handlePanStart={this.handlePanStart(1)}
            handlePanEnd={this.handlePanEnd(1)}
          />
          <Handle
            className={style.handle}
            axis={'x'}
            x={x2}
            handlePan={this.setX(2)}
            handlePanStart={this.handlePanStart(2)}
            handlePanEnd={this.handlePanEnd(2)}
          />
        </div>
        <span className={style.labelMin}>{labelMin}</span>
        <span className={style.labelMax}>{labelMax}</span>
      </div>
    );
  }
}

RangeSlider.contextTypes = {
  skin: React.PropTypes.object
};

RangeSlider.propTypes = {
  handle1: PropTypes.shape({
    x: PropTypes.number
  }),
  handle2: PropTypes.shape({
    x: PropTypes.number
  }),
  title: PropTypes.string,
  labelMin: PropTypes.string,
  labelMax: PropTypes.string,
  onChange: PropTypes.func,
  steps: PropTypes.array
};

export default RangeSlider;
