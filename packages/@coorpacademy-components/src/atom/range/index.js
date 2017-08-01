import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import Provider from '../provider';
import Handle from './handle';
import style from './style.css';

const inRange = (min, max) => pipe(p => Math.max(min, p), p => Math.min(max, p));

class Range extends React.Component {
  constructor(props, context) {
    super(props, context);

    const {multi = false, value = [0, 1]} = props;

    this.state = {value: multi ? value : [0, value]};

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
    this.handleChange(e, 0);
  }

  handleMaxChange(e) {
    this.handleChange(e, 1);
  }

  handleChange(changeEvent, valueIndex) {
    const {srcEvent: {x: handleX}} = changeEvent;
    const {left, right} = this.track.getBoundingClientRect();
    const value = inRange(0, 1)((handleX - left) / (right - left));

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
      <div className={style.default}>
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
