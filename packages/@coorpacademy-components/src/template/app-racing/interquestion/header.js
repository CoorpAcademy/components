import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import Provider from '../../../atom/provider';
import style from './header.css';

const formatPoints = points => (points >= 0 ? `+${points}` : `${points}`);

const RacingInterquestionHeader = (props, context) => {
  const {title, points, success, pointsDescription} = props;
  const {skin} = context;
  const positive = get('common.positive', skin);
  const negative = get('common.negative', skin);

  return (
    <div
      className={style.header}
      style={{
        backgroundColor: success ? positive : negative
      }}
    >
      <div className={style.title}>{title}</div>
      <div className={style.subtitle}>
        <span className={style.points}>{formatPoints(points)}</span>
        <span className={style.pointsDescription}>{pointsDescription}</span>
      </div>
    </div>
  );
};

RacingInterquestionHeader.contextTypes = {
  skin: Provider.childContextTypes.skin
};

RacingInterquestionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  success: PropTypes.bool.isRequired,
  pointsDescription: PropTypes.string.isRequired
};

export default RacingInterquestionHeader;
