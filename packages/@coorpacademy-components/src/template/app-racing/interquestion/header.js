import React from 'react';
import PropTypes from 'prop-types';
import style from './header.css';

const formatPoints = points => points >= 0 ? `+${points}` : `-${points}`;

const RacingInterquestionHeader = props => {
  const {title, points, success, pointsDescription} = props;

  return (
    <div className={style.header}>
      <div className={style.title}>{title}</div>
      <div className={style.subtitle}>
        <span className={style.points}>{formatPoints(points)}</span>
        <span className={style.pointsDescription}>{pointsDescription}</span>
      </div>
    </div>
  )
};

RacingInterquestionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  success: PropTypes.bool.isRequired,
  pointsDescription: PropTypes.string.isRequired
}

export default RacingInterquestionHeader;
