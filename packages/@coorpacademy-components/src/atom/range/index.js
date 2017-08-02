import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import set from 'lodash/fp/set';
import clamp from 'lodash/fp/clamp';
import Provider from '../provider';
import Handle from './handle';
import style from './style.css';

const valueOnTrack = (track, x) => {
  const {left, right} = track.getBoundingClientRect();
  return clamp(0, 1, (x - left) / (right - left));
};

// eslint-disable-next-line no-shadow
class Range extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.setRefTrack = this.setRefTrack.bind(this);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
  }

  setRefTrack(track) {
    this.track = track;
  }

  handleMinChange(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.srcEvent.clientX);
    return this.handleChange(newValue, 0);
  }

  handleMaxChange(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.srcEvent.clientX);
    return this.handleChange(newValue, 1);
  }

  handleChange(value, valueIndex) {
    const {multi = false} = this.props;
    const prevValue = multi ? this.props.value : [0, this.props.value];

    const newValue = set(valueIndex, value, prevValue);

    const [minValue, maxValue] = newValue;
    if (minValue > maxValue) return this.triggerChange(prevValue);

    return this.triggerChange(newValue);
  }

  triggerChange(newValues) {
    const {onChange = noop, multi = false} = this.props;

    onChange(multi ? newValues : newValues[1]);
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const {multi = false} = this.props;
    const [left, right] = multi ? this.props.value : [0, this.props.value];
    const x = e.clientX;
    const newValue = valueOnTrack(this.track, x);

    if (!multi) return this.handleChange(newValue, 1);

    if (left === right) {
      const isClickToTheLeft = left - newValue > 0;
      return this.handleChange(newValue, isClickToTheLeft ? 0 : 1);
    }

    const closestHandle = Math.abs(newValue - left) < Math.abs(newValue - right) ? 0 : 1;
    return this.handleChange(newValue, closestHandle);
  }

  renderHandles() {
    const {multi = false} = this.props;
    const [left, right] = multi ? this.props.value : [0, this.props.value];

    return (
      <div>
        {multi
          ? <span className={style.handle} style={{left: `${left * 100}%`}}>
              <Handle axis="x" onPan={this.handleMinChange} onPanEnd={this.handleMinChange} />
            </span>
          : null}
        <span className={style.handle} style={{left: `${right * 100}%`}}>
          <Handle axis="x" onPan={this.handleMaxChange} onPanEnd={this.handleMaxChange} />
        </span>
      </div>
    );
  }

  render() {
    const {skin} = this.context;
    const defaultColor = getOr('#00B0FF', 'common.primary', skin);

    const {multi = false} = this.props;
    const [left, right] = multi ? this.props.value : [0, this.props.value];
    const railWidth = right - left;
    const railLeft = left;
    const railStyle = {
      backgroundColor: defaultColor,
      width: `${railWidth * 100}%`,
      left: `${railLeft * 100}%`
    };

    return (
      <div className={style.containerWrapper} onClick={this.handleClick}>
        <div className={style.container}>
          <div className={style.track} ref={this.setRefTrack} />
          <div className={style.rail} style={railStyle} />
          {this.renderHandles()}
        </div>
      </div>
    );
  }
}

Range.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Range.propTypes = {
  onChange: PropTypes.func,
  multi: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
};

export default Range;
