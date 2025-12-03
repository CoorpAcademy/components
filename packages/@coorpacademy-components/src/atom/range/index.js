import React from 'react';
import PropTypes from 'prop-types';
import {noop, set, clamp, getOr} from 'lodash/fp';
import Provider from '../provider';
import Handle from './handle';
import style from './style.css';

const valueOnTrack = (track, x) => {
  const {left, right} = track.getBoundingClientRect();
  return clamp(0, 1, (x - left) / (right - left));
};

const extractStateFromProps = props => {
  const {multi = false, value = multi ? [0, 1] : 0, min = 0, max = 1} = props;

  const toNormalized = actualValue => (actualValue - min) / (max - min);

  let normalizedValue;
  if (multi) {
    normalizedValue = Array.isArray(value)
      ? value.map(toNormalized)
      : [toNormalized(0), toNormalized(value)];
  } else {
    normalizedValue = toNormalized(value);
  }

  return {
    multi,
    value: multi ? normalizedValue : [0, normalizedValue]
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
    onHandleMaxChangeEnd,
    HammerForTestingMin,
    HammerForTestingMax
  } = props;

  return (
    <div data-testid="handles">
      {multi ? (
        <span
          className={pending ? style.handle : style.animatedHandle}
          style={{left: `${left * 100}%`}}
        >
          <Handle
            axis="x"
            onPan={onHandleMinChange}
            onPanEnd={onHandleMinChangeEnd}
            HammerForTesting={HammerForTestingMin}
          />
        </span>
      ) : null}
      <span
        className={pending ? style.handle : style.animatedHandle}
        style={{left: `${right * 100}%`}}
      >
        <Handle
          axis="x"
          onPan={onHandleMaxChange}
          onPanEnd={onHandleMaxChangeEnd}
          HammerForTesting={HammerForTestingMax}
        />
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
  onHandleMaxChangeEnd: PropTypes.func,
  HammerForTestingMin: Handle.propTypes.HammerForTesting,
  HammerForTestingMax: Handle.propTypes.HammerForTesting
};

class Range extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    onChangeEnd: PropTypes.func,
    multi: PropTypes.bool,
    theme: PropTypes.oneOf(['default', 'mooc']),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    minLabel: PropTypes.string,
    maxLabel: PropTypes.string,
    minValueLabel: PropTypes.string,
    maxValueLabel: PropTypes.string,
    HammerForTestingMin: RenderHandles.propTypes.HammerForTestingMin,
    HammerForTestingMax: RenderHandles.propTypes.HammerForTestingMax
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

  normalizedToActual(normalizedValue) {
    const {min = 0, max = 1} = this.props;
    return min + normalizedValue * (max - min);
  }

  roundToStep(value) {
    const {step} = this.props;
    const precision = 10;
    if (!step) {
      return Number(value.toFixed(precision));
    } else {
      return Number((Math.round(value / step) * step).toFixed(precision));
    }
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
    const actualValues = newValues.map(val => this.roundToStep(this.normalizedToActual(val)));
    return handle(multi ? actualValues : actualValues[1]);
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const {
      value: [left, right],
      multi
    } = this.state;
    const newValue = valueOnTrack(this.track, e.clientX);

    if (!multi) return this.handleChange(newValue, 1, false);

    if (left === right) {
      const isClickToTheLeft = left - newValue > 0;
      return this.handleChange(newValue, isClickToTheLeft ? 0 : 1, false);
    }

    const closestHandle = Math.abs(newValue - left) < Math.abs(newValue - right) ? 0 : 1;
    return this.handleChange(newValue, closestHandle, false);
  }

  render() {
    const {
      multi = false,
      value: [left, right],
      pending
    } = this.state;
    const {
      theme = 'default',
      minLabel = 'Min',
      maxLabel = 'Max',
      min,
      max,
      minValueLabel,
      maxValueLabel,
      HammerForTestingMin,
      HammerForTestingMax
    } = this.props;

    const railWidth = right - left;
    const railLeft = left;

    const {skin} = this.context;
    const primaryColor = getOr('#00B0FF', 'common.primary', skin);
    const railStyle =
      theme === 'mooc'
        ? {
            backgroundColor: primaryColor,
            width: `${railWidth * 100}%`,
            left: `${railLeft * 100}%`
          }
        : {
            width: `${railWidth * 100}%`,
            left: `${railLeft * 100}%`
          };

    const minActualValue = this.roundToStep(this.normalizedToActual(left));
    const maxActualValue = this.roundToStep(this.normalizedToActual(right));

    const sliderComponent = (
      <div className={style.container}>
        <div
          data-testid="track"
          className={style.track}
          data-name="sliderTrack"
          ref={this.setRefTrack}
        />
        <div className={pending ? style.rail : style.animatedRail} style={railStyle} />
        <RenderHandles
          HammerForTestingMin={HammerForTestingMin}
          HammerForTestingMax={HammerForTestingMax}
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
    );

    if (theme === 'mooc') {
      return (
        <div data-testid="slider" className={style.containerWrapper}>
          <div onClick={this.handleClick}>{sliderComponent}</div>
          <div className={style.inputsRow}>
            {multi ? (
              <div className={style.moocInput} data-testid="min-value">
                <span className={style.inputHint}>{minLabel}</span>
                <span className={style.inputValue}>
                  {minActualValue === min && !!minValueLabel ? minValueLabel : minActualValue}
                </span>
              </div>
            ) : null}
            <div className={style.moocInput} data-testid="max-value">
              <span className={style.inputHint}>{maxLabel}</span>
              <span className={style.inputValue}>
                {maxActualValue === max && !!maxValueLabel ? maxValueLabel : maxActualValue}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div data-testid="slider" className={style.containerWrapper} onClick={this.handleClick}>
        {sliderComponent}
      </div>
    );
  }
}

export default Range;
