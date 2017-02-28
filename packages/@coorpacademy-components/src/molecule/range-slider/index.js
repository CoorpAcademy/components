import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import shallowCompare from '../../util/shallow-compare';
import Handle from '../../atom/handle';
import style from './style.css';

const getOrBlank = getOr('');

const coordinate = ({start, delta, min, max}) => {
  let result = start + delta;
  if (result < min) {
    result = min;
  }

  if (result > max) {
    result = max;
  }

  return result;
};

const snap = (x, steps, width) => {
  if (!steps)
    return {x, undefined};

  const step = width / (steps.length - 1);
  const min = Math.floor(x / step) * step;
  const max = Math.ceil(x / step) * step;

  const closest = x - min < max - x ? min : max;

  return {
    x: closest,
    step: Math.floor(x / step)
  };
};

class RangeSlider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ...props
    };

    this.setX = this.setX.bind(this);
    this.handlePanStart = this.handlePanStart.bind(this);
  }

  componentDidMount() {
    const x1 = getOr(0, 'handle1.x', this.state);
    const x2 = getOr(this.railWidth(), 'handle2.x', this.state);

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
        max: this.railWidth()
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
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
    const setX = this.setX(num, this.props.steps);
    return e => {
      setX(e);
      this.props.onChange && this.props.onChange(this.state);
    };
  }

  setX(num, steps) {
    return e => this.setState((previousState, currentProps) => {
      const _x = this.extractXFromEvent(num, e);
      const {x, step} = snap(_x, steps, this.railWidth());

      let state = set([`handle${num}`, 'x'], x, previousState);
      state = set([`handle${num}`, 'step'], step, state);
      state = set(['handle1', 'max'], state.handle2.x, state);
      state = set(['handle2', 'min'], state.handle1.x, state);

      const isMax = state.handle1.x === this.railWidth();
      state = set('isMax', isMax, state);

      return state;
    });
  }

  extractXFromEvent(num, e) {
    return coordinate({
      start: this.state[`handle${num}`].panStart,
      delta: e.deltaX,
      min: this.state[`handle${num}`].min,
      max: this.state[`handle${num}`].max || this.railWidth()
    });
  }

  railWidth() {
    return findDOMNode(this._rail).clientWidth;
  }

  render() {
    const {
      isMax,
      handle1 = {},
      handle2 = {}
    } = this.state;

    const x1 = handle1.x;
    const x2 = handle2.x;

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
  x1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  steps: PropTypes.array
};

export default RangeSlider;
