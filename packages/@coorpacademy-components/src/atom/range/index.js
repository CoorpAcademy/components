import React from 'react';
import PropTypes from 'prop-types';
import {getOr, noop, set, clamp} from 'lodash/fp';
import Provider from '../provider';
import Handle from './handle';
import style from './style.css';

const valueOnTrack = (track, x) => {
  const {left, right} = track.getBoundingClientRect();
  return clamp(0, 1, (x - left) / (right - left));
};

const extractStateFromProps = props => {
  const {multi = false, value = multi ? [0, 1] : 0} = props;
  return {
    multi,
    value: multi ? value : [0, value]
  };
};

const RenderHandles = props => {
  const {
    left,
    right,
    multi = false,
    pending,
    onHandleMinChange,
    onHandleMinChangeEnd,
    onHandleMaxChange,
    onHandleMaxChangeEnd
  } = props;

  return (
    <div>
      {multi ? (
        <span
          className={pending ? style.handle : style.animatedHandle}
          style={{left: `${left * 100}%`}}
        >
          <Handle axis="x" onPan={onHandleMinChange} onPanEnd={onHandleMinChangeEnd} />
        </span>
      ) : null}
      <span
        className={pending ? style.handle : style.animatedHandle}
        style={{left: `${right * 100}%`}}
      >
        <Handle axis="x" onPan={onHandleMaxChange} onPanEnd={onHandleMaxChangeEnd} />
      </span>
    </div>
  );
};

RenderHandles.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
  multi: PropTypes.bool,
  pending: PropTypes.bool,
  onHandleMinChange: PropTypes.func,
  onHandleMinChangeEnd: PropTypes.func,
  onHandleMaxChange: PropTypes.func,
  onHandleMaxChangeEnd: PropTypes.func
};

class Range extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onChangeEnd: PropTypes.func,
    multi: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  static getDerivedStateFromProps(props, state) {
    const {pending} = state;

    if (pending) return null;

    return extractStateFromProps(props);
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...extractStateFromProps(props),
      pending: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.setRefTrack = this.setRefTrack.bind(this);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
    this.handleMinChangeEnd = this.handleMinChangeEnd.bind(this);
    this.handleMaxChangeEnd = this.handleMaxChangeEnd.bind(this);
  }

  setRefTrack(track) {
    this.track = track;
  }

  handleMinChange(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.center.x);
    return this.handleChange(newValue, 0, true);
  }

  handleMaxChange(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.center.x);
    return this.handleChange(newValue, 1, true);
  }

  handleMinChangeEnd(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.center.x);
    return this.handleChange(newValue, 0, false);
  }

  handleMaxChangeEnd(e) {
    e.srcEvent.stopPropagation();
    e.srcEvent.preventDefault();
    const newValue = valueOnTrack(this.track, e.center.x);
    return this.handleChange(newValue, 1, false);
  }

  handleChange(value, valueIndex, pending) {
    const {value: prevValue} = this.state;

    const newValue = set(valueIndex, value, prevValue);

    const [minValue, maxValue] = newValue;

    const nextValue = minValue > maxValue ? prevValue : newValue;

    this.triggerChange(nextValue, pending);
    return this.setState({
      pending,
      value: pending ? nextValue : extractStateFromProps(this.props).value
    });
  }

  triggerChange(newValues, pending) {
    const {onChange = noop, onChangeEnd = onChange, multi = false} = this.props;

    const handle = pending ? onChange : onChangeEnd;

    return handle(multi ? newValues : newValues[1]);
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const {
      value: [left, right],
      multi
    } = this.state;
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

  render() {
    const {skin} = this.context;
    const defaultColor = getOr('#00B0FF', 'common.primary', skin);

    const {
      multi = false,
      value: [left, right],
      pending
    } = this.state;
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
          <div className={style.track} data-name="sliderTrack" ref={this.setRefTrack} />
          <div className={pending ? style.rail : style.animatedRail} style={railStyle} />
          <RenderHandles
            left={left}
            right={right}
            pending={pending}
            multi={multi}
            onHandleMinChange={this.handleMinChange}
            onHandleMinChangeEnd={this.handleMinChangeEnd}
            onHandleMaxChange={this.handleMaxChange}
            onHandleMaxChangeEnd={this.handleMaxChangeEnd}
          />
        </div>
      </div>
    );
  }
}

export default Range;
