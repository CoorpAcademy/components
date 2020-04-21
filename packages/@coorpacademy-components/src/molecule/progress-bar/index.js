import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {times} from 'lodash/fp';
import style from './style.css';

const ProgressBar = props => {
  const {className, value, max, desc = '', steps = 0} = props;

  const ratio = value / max;
  const percentage = Math.floor(ratio * 100);
  const text = `${percentage}%`;
  const stepList = times(index => <div className={style.step} key={index} />, steps);
  return (
    <div className={classnames(style.background, className)}>
      <div
        className={style.progress}
        style={{
          ...props.style,
          width: `${ratio * 100}%`
        }}
      />
      <p className={style.texts}>
        <span className={style.description}>{`${value}/${max} ${desc}`}</span>
        <span className={style.percentage}>{text}</span>
      </p>
      <div className={style.steps}>{stepList}</div>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  desc: PropTypes.string,
  steps: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default ProgressBar;
