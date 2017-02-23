import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import getOr from 'lodash/fp/getOr';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

const getOrBlank = getOr('');

const offsetXYFromParent = ({clientX, clientY}, offsetParent) => {
  const isBody = offsetParent === offsetParent.ownerDocument.body;
  const offsetParentRect = isBody ? {left: 0, top: 0} : offsetParent.getBoundingClientRect();

  const x = clientX + offsetParent.scrollLeft - offsetParentRect.left;
  const y = clientY + offsetParent.scrollTop - offsetParentRect.top;

  return {x, y};
};

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

  handleDrag1(e, coreData) {
    const node = findDOMNode(this);
    const offsetParent = this.props.offsetParent || node.offsetParent || node.ownerDocument.body;
    const {x, y} = offsetXYFromParent(e, offsetParent);

    this.setState({
      x1: x
    });
  }

  handleDrag2(e, coreData) {
    console.log('drag2', {e, coreData});
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
          />
          <div
            className={style.handle1}
            onDrag={this.handleDrag1}
            style={{
              left: `${x1}px`
            }}
          />
          <div
            className={style.handle2}
            onDragStart={this.handleDrag2}
            style={{
              left: `${x2}px`
            }}
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
