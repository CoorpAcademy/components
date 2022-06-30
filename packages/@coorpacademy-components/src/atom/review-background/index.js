import React from 'react';
import style from './style.css';
import propTypes from './prop-types';

const ReviewBackground = props => {
  const {'aria-label': ariaLabel} = props;
  return (
    <div className={style.mainContainer} aria-label={ariaLabel}>
      <div className={style.container}>
        <span className={style.interrogationLeft}>?</span>
        <span className={style.interrogationRight}>?</span>
        <div className={style.recYellow} />
        <div className={style.recRed} />
        <div className={style.recBlue} />
        <div className={style.recGreen} />
        <div className={style.recGreenLight} />
      </div>
    </div>
  );
};

ReviewBackground.propTypes = propTypes;

export default ReviewBackground;
