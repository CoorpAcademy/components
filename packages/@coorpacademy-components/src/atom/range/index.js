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

    const {multi = false, value = [0, 1]} = props;

    this.state = {value: multi ? value : [0, value]};

    this.handleOnClick = this.handleOnClick.bind(this);
    this.setRefTrack = this.setRefTrack.bind(this);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {value, multi = false} = nextProps;

    const nextValue = multi ? value : [0, value];

    this.setState(() => ({
      multi,
      value: nextValue
    }));
  }

  setRefTrack(track) {
    this.track = track;
  }

  handleMinChange(e) {
    const newValue = valueOnTrack(this.track, e.srcEvent.x);
    this.handleChange(newValue, 0);
  }

  handleMaxChange(e) {
    const newValue = valueOnTrack(this.track, e.srcEvent.x);
    this.handleChange(newValue, 1);
  }

  handleChange(value, valueIndex) {
    const newValue = set(valueIndex, value, this.state.value);

    const [minValue, maxValue] = newValue;
    if (minValue > maxValue) return;

    this.onChange(newValue);
  }

  onChange(newValues) {
    const {onChange = noop, multi = false} = this.props;

    onChange(multi ? newValues : newValues[1]);
    this.setState(() => {
      return {value: newValues};
    });
  }

  handleOnClick(e) {
    const {multi = false} = this.props;
    const x = e.clientX;
    const [left, right] = this.state.value;
    const newValue = valueOnTrack(this.track, x);

    if (!multi) {
      this.handleChange(newValue, 1);
    } else {
      const closestHandle = Math.abs(newValue - left) < Math.abs(newValue - right) ? 0 : 1;
      this.handleChange(newValue, closestHandle);
    }
  }

  renderHandles() {
    const {multi = false} = this.props;
    const {value: [minValue, maxValue]} = this.state;

    return (
      <div>
        {multi
          ? <span className={style.handle} style={{left: `${minValue * 100}%`}}>
              <Handle axis="x" onPan={this.handleMinChange} onPanEnd={this.handleMinChange} />
            </span>
          : null}
        <span className={style.handle} style={{left: `${maxValue * 100}%`}}>
          <Handle axis="x" onPan={this.handleMaxChange} onPanEnd={this.handleMaxChange} />
        </span>
      </div>
    );
  }

  render() {
    const {skin} = this.context;

    const defaultColor = getOr('#00B0FF', 'common.primary', skin);

    const {value: [minValue, maxValue]} = this.state;
    const railWidth = maxValue - minValue;
    const railLeft = minValue;
    const railStyle = {
      backgroundColor: defaultColor,
      width: `${railWidth * 100}%`,
      left: `${railLeft * 100}%`
    };

    return (
      <div className={style.containerWrapper} onClick={this.handleOnClick}>
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
