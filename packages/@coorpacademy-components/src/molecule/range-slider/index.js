import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import getOr from 'lodash/fp/getOr';
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
    const x1 = this.state.x1 || 0;
    const x2 = this.state.x2 || this.railWidth();

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      x1,
      x2,
      minx1: 0,
      minx2: x1,
      maxx1: x2,
      maxx2: this.railWidth()
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handlePanStart(handle) {
    return e => this.setState({
      [`panStart${handle}`]: e.target.offsetLeft
    });
  }

  setX(handle, snap) {
    return e => {
      const _x = this.extractXFromEvent(handle, e);
      const x = snap ? this.snap(_x) : _x;

      this.setState({
        [handle]: x
      });

      this.setState({
        maxx1: this.state.x2,
        minx2: this.state.x1
      });

      this.setState({
        isMax: this.state.x1 === this.railWidth()
      });
    };
  }

  extractXFromEvent(handle, e) {
    return coordinate({
      start: this.state[`panStart${handle}`],
      delta: e.deltaX,
      min: this.state[`min${handle}`],
      max: this.state[`max${handle}`] || this.railWidth()
    });
  }

  railWidth() {
    return findDOMNode(this._rail).clientWidth;
  }

  snap(x) {
    if (!this.props.steps)
      return x;

    const width = this.railWidth();
    const step = width / (this.props.steps.length - 1);
    const min = Math.floor(x / step) * step;
    const max = Math.ceil(x / step) * step;

    const closest = x - min < max - x ? min : max;
    return closest;
  }

  render() {
    const {
      isMax,
      x1,
      x2
    } = this.state;

    return (
      <div className={style.default}>
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
            className={style.handle1}
            style={{
              zIndex: isMax ? '1' : '0'
            }}
            axis={'x'}
            x={x1}
            handlePan={this.setX('x1')}
            handlePanStart={this.handlePanStart('x1')}
            handlePanEnd={this.setX('x1', true)}
          />
          <Handle
            className={style.handle2}
            axis={'x'}
            x={x2}
            handlePan={this.setX('x2')}
            handlePanStart={this.handlePanStart('x2')}
            handlePanEnd={this.setX('x2', true)}
          />
        </div>
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
