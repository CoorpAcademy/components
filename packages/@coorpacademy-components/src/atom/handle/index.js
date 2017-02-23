import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

const Hammer = (typeof window !== 'undefined') ? require('hammerjs') : undefined;

class Handle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      x: 0,
      y: 0,
      panStartX: 0,
      panStartY: 0
    };

    this.handlePanStart = this.handlePanStart.bind(this);
    this.handlePan = this.handlePan.bind(this);
  }

  componentDidMount() {
    if (Hammer) {
      this.hammer = new Hammer(findDOMNode(this));
      this.hammer.on('panstart', this.handlePanStart);
      this.hammer.on('panleft panright panup pandown', this.handlePan);
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handlePanStart(e) {
    this.setState({
      panStartX: e.target.offsetLeft,
      panStartY: e.target.offsetTop
    });
  }

  handlePan(e) {
    this.setState({
      x: this.state.panStartX + e.deltaX,
      y: this.state.panStartY + e.deltaY
    });
  }

  render() {
    const {
      x,
      y
    } = this.state;

    return (
      <div
        className={style.default}
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
