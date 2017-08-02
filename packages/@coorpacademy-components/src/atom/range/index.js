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

    const {multi, value} = props;
    this.state = {
      pending: false,
      value : multi ? value : [0, value]
    };

    this.handleClick = this.handleClick.bind(this);
    this.setRefTrack = this.setRefTrack.bind(this);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
    this.handleMinChangeEnd = this.handleMinChangeEnd.bind(this);
    this.handleMaxChangeEnd = this.handleMaxChangeEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {value = [0, 1], multi = false} = nextProps;
    const {pending} = this.state;

    if (pending) return;

    this.setState(() => ({
      multi,
      value : multi ? value : [0, value]
    }));
  }

  setRefTrack(track) {
    this.track = track;
  }

  handleMinChange(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.srcEvent.clientX);
    return this.handleChange(newValue, 0, true);
  }

  handleMaxChange(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.srcEvent.clientX);
    return this.handleChange(newValue, 1, true);
  }

  handleMinChangeEnd(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.srcEvent.clientX);
    return this.handleChange(newValue, 0, false);
  }

  handleMaxChangeEnd(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.srcEvent.clientX);
    return this.handleChange(newValue, 1, false);
  }

  handleChange(value, valueIndex, pending) {
    const prevValue = this.state.value;

    const newValue = set(valueIndex, value, prevValue);

    const [minValue, maxValue] = newValue;

    const nextValue = (minValue > maxValue) ? prevValue: newValue;

    return this.setState(() => {
      this.triggerChange(nextValue);
      return {
        pending,
        value: nextValue
      };
    });
  }

  triggerChange(newValues) {
    const {onChange = noop, multi = false} = this.props;

    onChange(multi ? newValues : newValues[1]);
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const {value: [left, right], multi} = this.state;
    const x = e.clientX;
    const newValue = valueOnTrack(this.track, x);

    if (!multi) return this.handleChange(newValue, 1, false);

    if (left === right) {
      const isClickToTheLeft = left - newValue > 0;
      return this.handleChange(newValue, isClickToTheLeft ? 0 : 1, false);
    }

    const closestHandle = Math.abs(newValue - left) < Math.abs(newValue - right) ? 0 : 1;
    return this.handleChange(newValue, closestHandle, false);
  }

  renderHandles() {
    const {value: [left, right], multi, pending} = this.state;

    return (
      <div>
        {multi
          ? <span className={pending ? style.handle : style.animatedHandle} style={{left: `${left * 100}%`}}>
              <Handle axis="x" onPan={this.handleMinChange} onPanEnd={this.handleMinChangeEnd} />
            </span>
          : null}
        <span className={pending ? style.handle : style.animatedHandle} style={{left: `${right * 100}%`}}>
          <Handle axis="x" onPan={this.handleMaxChange} onPanEnd={this.handleMaxChangeEnd} />
        </span>
      </div>
    );
  }

  render() {
    const {skin} = this.context;
    const defaultColor = getOr('#00B0FF', 'common.primary', skin);

    const {value: [left, right], multi, pending} = this.state;
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
          <div className={pending ? style.rail : style.animatedRail} style={railStyle} />
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
