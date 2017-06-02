import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import closestStep from '../../util/closest-step';
import Handle from '../../atom/handle';
import Provider from '../../atom/provider';
import style from './style.css';

const xWithConstraints = ({x, delta, min, max}) => {
  const newX = x + delta;
  if (newX < min) {
    return min;
  }

  if (newX > max) {
    return max;
  }

  return newX;
};

class RangeSlider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      railWidth: 0
    };

    this.setX = this.setX.bind(this);
    this.handlePanStart = this.handlePanStart.bind(this);
    this.updatePositions = this.updatePositions.bind(this);
    this.ref = this.ref.bind(this);
  }

  componentDidMount() {
    const width = this.railWidth();
    this.initHandlesPositions(width);
    window.addEventListener('resize', this.updatePositions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePositions);
  }

  ref(element) {
    this.element = element;
  }

  initHandlesPositions(width) {
    if (width === 0) {
      return;
    }

    const max = width;
    const steps = this.props.steps || [];
    const stepWidth = max / (steps.length - 1);

    const step1 = getOr(0, 'handleMin.step', this.props);
    const step2 = getOr(steps.length - 1, 'handle.step', this.props);

    const x1 = getOr(step1 * stepWidth, 'handleMin.x', this.props);
    const x2 = getOr(step2 * stepWidth, 'handle.x', this.props);

    this.setState({
      handleMin: {
        x: x1,
        min: 0,
        max: x2,
        step: step1
      },
      handleMax: {
        x: x2,
        min: x1,
        max,
        step: step2
      },
      railWidth: max
    });
  }

  updatePositions() {
    const newWidth = this.railWidth();
    this.refreshMinMax(newWidth);
  }

  refreshMinMax(newWidth) {
    this.setState((previousState, currentProps) => {
      const ratio = newWidth / previousState.railWidth;

      return {
        handleMin: {
          x: previousState.handleMin.x * ratio,
          min: 0,
          max: previousState.handleMax.x * ratio
        },
        handleMax: {
          x: previousState.handleMax.x * ratio,
          min: previousState.handleMin.x * ratio,
          max: newWidth
        },
        railWidth: newWidth
      };
    });
  }

  handlePanStart(handle) {
    return e => {
      this.setState((previousState, currentProps) =>
        set([handle, 'panStart'], e.target.offsetLeft, previousState)
      );
    };
  }

  handlePanEnd(handle) {
    const setX = this.setX(handle, true);
    return e => {
      setX(e);
    };
  }

  calculateStepX(e, handle, steps, previousState, snap) {
    const eventX = this.extractXFromEvent(handle, e);
    const width = previousState.railWidth;

    const {x, step} = closestStep({
      eventX,
      width,
      steps,
      snap,
      limit: handle === 'handleMin' ? this.state.handleMax.x : this.state.handleMin.x,
      side: handle === 'handleMin' ? 'left' : 'right',
      forceRange: this.props.forceRange
    });

    let state = set([handle, 'x'], x, previousState);
    state = set([handle, 'step'], step, state);
    return state;
  }

  setCalculatedX(e, handle, previousState, steps, snap) {
    if (steps) {
      return this.calculateStepX(e, handle, steps, previousState, snap);
    } else {
      const x = this.extractXFromEvent(handle, e);
      return set([handle, 'x'], x, previousState);
    }
  }

  setX(handle, snap) {
    const steps = this.props.steps;
    const onDrag = this.props.onDrag;
    const onDragEnd = this.props.onDragEnd;

    return e =>
      this.setState((previousState, currentProps) => {
        let state = this.setCalculatedX(e, handle, previousState, steps, snap);
        state = set(['handleMin', 'max'], state.handleMax.x, state);
        state = set(['handleMax', 'min'], state.handleMin.x, state);

        const isMax = state.handleMin.x === state.railWidth;
        state = set('isMax', isMax, state);
        if (onDrag && !snap) {
          onDrag(state);
        }
        if (onDragEnd && snap) {
          onDragEnd(state);
        }
        return state;
      });
  }

  extractXFromEvent(handle, e) {
    return xWithConstraints({
      x: this.state[handle].panStart,
      delta: e.deltaX,
      min: this.state[handle].min,
      max: this.state[handle].max || this.state.railWidth
    });
  }

  railWidth() {
    return getOr(0, 'clientWidth', this.element);
  }

  render() {
    const {isMax, handleMin = this.props.handleMin, handleMax = this.props.handle} = this.state;
    const {
      bigTitle = false,
      hideTrack = false,
      label,
      labelMax,
      labelMin,
      oneHandle = false,
      title
    } = this.props;

    const x1 = getOr(0, 'x', handleMin);
    const x2 = getOr(0, 'x', handleMax);

    const {skin} = this.context;
    const defaultColor = getOr('#00B0FF', 'common.primary', skin);

    const titleView =
      title &&
      <p
        className={bigTitle ? style.bigTitle : style.title}
        style={{color: bigTitle && defaultColor}}
      >
        {title}
      </p>;

    const trackView =
      !hideTrack &&
      <div
        className={style.track}
        style={{
          left: `${x1}px`,
          width: `${x2 - x1}px`,
          backgroundColor: defaultColor
        }}
      />;

    const handleMinView =
      !oneHandle &&
      <Handle
        className={style.handle}
        style={{
          zIndex: isMax ? '1' : '0',
          boxShadow: `0px 0px 1px 1px ${defaultColor}`
        }}
        axis={'x'}
        x={x1}
        // onClick={() => console.log('onclick')}
        onPan={this.setX('handleMin')}
        onPanStart={this.handlePanStart('handleMin')}
        onPanEnd={this.handlePanEnd('handleMin')}
      />;

    const handleMaxView = (
      <Handle
        className={style.handle}
        axis={'x'}
        x={x2}
        style={{
          boxShadow: `0px 0px 1px 1px ${defaultColor}`
        }}
        onPan={this.setX('handleMax')}
        onPanStart={this.handlePanStart('handleMax')}
        onPanEnd={this.handlePanEnd('handleMax')}
      />
    );

    const labelMinView = labelMin && <span className={style.labelMin}>{labelMin}</span>;
    const labelMaxView = labelMax && <span className={style.labelMax}>{labelMax}</span>;

    return (
      <div className={style.default}>
        <span className={style.titleLabel}>{label}</span>
        {titleView}
        <div className={style.rail} ref={this.ref}>
          {trackView}
          {handleMinView}
          {handleMaxView}
        </div>
        <div className={style.labelsWrapper}>
          {labelMinView}
          {labelMaxView}
        </div>
      </div>
    );
  }
}

RangeSlider.contextTypes = {
  skin: Provider.childContextTypes.skin
};

RangeSlider.propTypes = {
  handleMin: PropTypes.shape({
    x: PropTypes.number
  }),
  handle: PropTypes.shape({
    x: PropTypes.number
  }),
  label: PropTypes.string,
  title: PropTypes.string,
  labelMin: PropTypes.string,
  labelMax: PropTypes.string,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  )
};

export default RangeSlider;
