import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './car.css';

const COLORS = [
  '#F5C742',
  '#4D4AE8',
  '#45FF7A',
  '#FF4545',
  '#A742F5',
  '#FF7238'
];

const Car = props => {
  const {className, teamIndex, pos} = props;
  const colorStyle = {backgroundColor: COLORS[teamIndex]};
  const transformStyle = {transform: `translateY(${100 * (1 - pos)}%)`};

  return (
    <div className={classnames(style.car, className)} style={transformStyle}  >
      <div className={style.path} style={colorStyle} />
      <div className={style.head} style={colorStyle} />
    </div>
  );
};

Car.propTypes = {
  teamIndex: PropTypes.number.isRequired,
  pos: PropTypes.number.isRequired
};

export default Car;
