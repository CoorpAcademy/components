import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import addClassName from '../../util/add-class-name';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

const Hammer = (typeof window !== 'undefined') ? require('hammerjs') : undefined;

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

/*
  x,
  y,
  axis: x|y default:both
  minX,
  maxX,
  minY,
  maxY,
  onDrag
 */
class Handle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.props,
      panStartX: 0,
      panStartY: 0,
      axis: props.axis || 'both'
    };

    this.handlePanStart = this.handlePanStart.bind(this);
    this.handlePan = this.handlePan.bind(this);
  }

  componentDidMount() {
    if (Hammer) {
      this.hammer = new Hammer(findDOMNode(this));
      this.hammer.on('panstart', this.handlePanStart);

      if (this.onX()) {
        this.hammer.on('panleft panright', this.handlePan);
      }

      if (this.onY()) {
        this.hammer.on('panup pandown', this.handlePan);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  componentWillUnmount() {
    if (this.hammer) {
      this.hammer.stop();
      this.hammer.destroy();
    }
    this.hammer = null;
  }

  onX() {
    return this.state.axis === 'x' || this.state.axis === 'both';
  }

  onY() {
    return this.state.axis === 'y' || this.state.axis === 'both';
  }

  extractXFromEvent(e) {
    return coordinate({
      start: this.state.panStartX,
      delta: this.onX() ? e.deltaX : 0,
      min: this.state.minX,
      max: this.state.maxX
    });
  }

  extractYFromEvent(e) {
    return coordinate({
      start: this.state.panStartY,
      delta: this.onY() ? e.deltaY : 0,
      min: this.state.minY,
      max: this.state.maxY
    });
  }

  handlePanStart(e) {
    this.setState({
      panStartX: e.target.offsetLeft,
      panStartY: e.target.offsetTop
    });
  }

  handlePan(e) {
    const coordinates = {
      x: this.extractXFromEvent(e),
      y: this.extractYFromEvent(e)
    };

    this.setState(coordinates);
    this.state.onDrag && this.state.onDrag(coordinates);
  }

  render() {
    const {
      x,
      y
    } = this.state;

    return (
      <div
        {...addClassName(`${style.default}`)({
          className: this.props.className
        })}
        style={{
          left: `${x}px`,
          top: `${y}px`
        }}
      />
    );
  }
}

Handle.propTypes = {
  onChange: PropTypes.func
};

export default Handle;
