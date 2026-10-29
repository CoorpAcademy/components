import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {sumBy, times} from 'lodash/fp';
import Title from '../../atom/title';
import style from './style.css';

const numberRequiredWithoutSegments = (props, propName, ...args) => {
  const validator =
    props.segments !== undefined && props.segments !== null
      ? PropTypes.number
      : PropTypes.number.isRequired;
  return validator(props, propName, ...args);
};

const ProgressBar = props => {
  const {
    className,
    value,
    max,
    desc = '',
    steps = 0,
    style: propsStyle,
    displayInfo = true,
    segments,
    title,
    subtitle,
    ariaLabel
  } = props;

  if (segments !== undefined && segments !== null) {
    const total = sumBy('value', segments);
    return (
      <div className={classnames(style.segmented, className)}>
        {title || subtitle ? (
          <div>
            {title ? <Title type="form-group" titleSize="medium" title={title} /> : null}
            {subtitle ? <p className={style.segmentedSubtitle}>{subtitle}</p> : null}
          </div>
        ) : null}
        <div
          className={style.segmentedBar}
          data-name="progress-bar-segmented-bar"
          role="img"
          aria-label={ariaLabel}
        >
          {segments
            .filter(segment => segment.value > 0)
            .map((segment, index) => (
              <div
                key={index}
                className={style.segment}
                data-name="progress-bar-segment"
                aria-hidden="true"
                style={{width: `${(segment.value / total) * 100}%`, backgroundColor: segment.color}}
              />
            ))}
        </div>
        <ul className={style.segmentedLegend}>
          {segments.map((segment, index) => (
            <li key={index} className={style.legendItem} data-name="progress-bar-legend-item">
              <span
                className={style.legendSwatch}
                data-name="progress-bar-legend-swatch"
                aria-hidden="true"
                style={{backgroundColor: segment.color}}
              />
              {segment.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const ratio = value / max;
  const percentage = Math.floor(ratio * 100);
  const text = `${percentage}%`;
  const stepList = times(index => <div className={style.step} key={index} />, steps);
  return (
    <div
      className={classnames(style.background, className)}
      data-name="progress-bar-wrapper"
      data-content={`${text}`}
    >
      <div
        className={style.progress}
        style={{
          ...propsStyle,
          width: `${ratio * 100}%`
        }}
      />
      {displayInfo ? (
        <p className={style.texts}>
          <span className={style.description}>{`${value}/${max} ${desc}`}</span>
          <span className={style.percentage}>{text}</span>
        </p>
      ) : null}
      <div className={style.steps}>{stepList}</div>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  value: numberRequiredWithoutSegments,
  max: numberRequiredWithoutSegments,
  desc: PropTypes.string,
  steps: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  displayInfo: PropTypes.bool,
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ariaLabel: PropTypes.string
};

export default ProgressBar;
