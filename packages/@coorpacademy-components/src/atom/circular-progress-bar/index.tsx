import React, {useMemo} from 'react';
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
  strokeWidth,
  'aria-label': ariaLabel,
  'data-name': dataName
}: LearningPriorityCardPropTypes) => {
  const {center, radius, length, offset} = useMemo(() => {
    const center_ = size / 2;
    const radius_ = center_ - strokeWidth;
    const length_ = Math.ceil(2 * Math.PI * radius_);
    const offset_ = Math.ceil(length_ * ((100 - progression) / 100));

    return {center: center_, radius: radius_, length: length_, offset: offset_};
  }, [size, strokeWidth, progression]);

  return (
    <div className={style.container} aria-label={ariaLabel} data-name={dataName}>
      <svg className={style.svg} width={size} height={size}>
        <ProgressionGradient />
        <circle
          className={style.mainCircle}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={3}
          fill="transparent"
        />
        <circle cx={center} cy={center} r={radius - (10 / radius) * 100} fill="#fafafa" />
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
