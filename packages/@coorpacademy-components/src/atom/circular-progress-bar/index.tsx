import React from 'react';
import {LearningPriorityCardPropTypes, CircularProgressBarPropTypes} from './types';
import style from './style.css';

const CircularProgressBar = ({
  label,
  progression,
  size,
  strokeWidth
}: LearningPriorityCardPropTypes) => {
  const center = size / 2;
  const radius = center - strokeWidth;
  const length = Math.ceil(2 * Math.PI * radius);
  const offset = Math.ceil(length * ((100 - progression) / 100));

  return (
    <div className={style.container}>
      <svg className={style.main} width={size} height={size}>
        <circle
          className={style.circle}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={3}
          fill="transparent"
        />
        <circle cx={center} cy={center} r={radius - (20 / radius) * 100} fill="#fafafa" />
        <circle
          className={style.progressionCircle}
          cx={center}
          cy={center}
          r={radius}
          stroke="#2CAF6C"
          strokeWidth={strokeWidth}
          strokeDasharray={length}
          strokeDashoffset={offset}
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
      <div className={style.infos}>
        <span className={style.progression}>{progression}%</span>
        <span className={style.label}>{label}</span>
      </div>
    </div>
  );
};

CircularProgressBar.propTypes = CircularProgressBarPropTypes;

export default CircularProgressBar;
