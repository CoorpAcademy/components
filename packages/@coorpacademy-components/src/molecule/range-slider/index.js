import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import getOr from 'lodash/fp/getOr';
import shallowCompare from '../../util/shallow-compare';
import Handle from '../../atom/handle';
import style from './style.css';

const getOrBlank = getOr('');

class RangeSlider extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      x1: 0,
      x2: 100
    };

    this.handleDrag1 = this.handleDrag1.bind(this);
    this.handleDrag2 = this.handleDrag2.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleDrag1(coordinates) {
    this.setState({
      x1: coordinates.x
    });
  }

  handleDrag2(coordinates) {
    this.setState({
      x2: coordinates.x
    });
  }

  render() {
    const {
      x1,
      x2
    } = this.state;

    return (
      <div className={style.default}>
        <div className={style.rail}>
          <div
            className={style.track}
            style={{
              left: `${x1}px`,
              width: `${x2 - x1}px`
            }}
          />
          <Handle
            className={style.handle1}
            axis={'x'}
            minX={0}
            maxX={x2}
            x={x1}
            onDrag={this.handleDrag1}
          />
          <Handle
            className={style.handle2}
            axis={'x'}
            minX={x1}
            maxX={300}
            x={x2}
            onDrag={this.handleDrag2}
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
  onChange: PropTypes.func
};

export default RangeSlider;
