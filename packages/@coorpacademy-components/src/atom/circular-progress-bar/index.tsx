import React from 'react';
import {LearningPriorityCardPropTypes, CircularProgressBarPropTypes} from './types';
import style from './style.css';

const ProgressionGradient = () => (
  <defs>
    <linearGradient
      id="gradient-stroke-progression"
      x1="81"
      y1="0"
      x2="81"
      y2="162"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#35CC7F" />
      <stop offset="1" stopColor="#55F2A7" />
    </linearGradient>
  </defs>
);

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
        <ProgressionGradient />
        <circle
          className={style.circle}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={3}
          fill="transparent"
        />
        <circle cx={center} cy={center} r={radius - (15 / radius) * 100} fill="#fafafa" />
        <circle
          className={style.progressionCircle}
          cx={center}
          cy={center}
          r={radius}
          stroke={`url(#gradient-stroke-progression)`}
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
