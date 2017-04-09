import React from 'react';
import PropTypes from 'prop-types';
import addClassName from '../../util/add-class-name';
import style from './style.css';

const addBackgroundClass = addClassName(style.background);

const ProgressBar = props => {
  const {
    className,
    value,
    max,
    desc = ''
  } = props;

  const ratio = value / max;
  const percentage = Math.floor(ratio * 100);
  const text = `${percentage}%`;

  return (
    <div {...addBackgroundClass({className})}>
      <div
        className={style.progress}
        style={{
          width: `${percentage}%`
        }}
      />
      <p className={style.texts}>
        <span className={style.description}>{`${value}/${max} ${desc}`}</span>
        <span className={style.percentage}>{text}</span>
      </p>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  desc: PropTypes.string
};

export default ProgressBar;
