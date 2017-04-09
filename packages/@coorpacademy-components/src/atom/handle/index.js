import React from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import addClassName from '../../util/add-class-name';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

const Hammer = (typeof window !== 'undefined') ? require('hammerjs') : undefined;

class Handle extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (Hammer) {
      this.hammer = new Hammer(findDOMNode(this));
      this.hammer.on('panstart', this.props.handlePanStart);
      this.hammer.on('panend', this.props.handlePanEnd);

      if (this.onX()) {
        this.hammer.on('panleft panright', this.props.handlePan);
      }

      if (this.onY()) {
        this.hammer.on('panup pandown', this.props.handlePan);
      }
    }
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
    return this.props.axis === 'x' || this.props.axis === 'both';
  }

  onY() {
    return this.props.axis === 'y' || this.props.axis === 'both';
  }

  render() {
    const {
      x,
      y
    } = this.props;

    return (
      <div
        {...addClassName(`${style.default}`)({
          className: this.props.className
        })}
        style={{
          ...this.props.style,
          left: `${x}px`,
          top: `${y}px`
        }}
      />
    );
  }
}

Handle.defaultProps = {
  axis: 'both'
};

Handle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  axis: PropTypes.oneOf(['x', 'y', 'both']),
  style: PropTypes.object,
  handlePan: PropTypes.func,
  handlePanStart: PropTypes.func,
  handlePanEnd: PropTypes.func
};

export default Handle;
