import React from 'react';
import style from './style.css';
import propTypes from './prop-types';

const ReviewBackground = props => {
  const {'aria-label': ariaLabel} = props;
  return (
    <div className={style.mainContainer} aria-label={ariaLabel} tabIndex={-1}>
      <div className={style.container} tabIndex={-1}>
        <span className={style.interrogationLeft} tabIndex={-1}>
          ?
        </span>
        <span className={style.interrogationRight} tabIndex={-1}>
          ?
        </span>
        <div className={style.recYellow} tabIndex={-1} />
        <div className={style.recRed} tabIndex={-1} />
        <div className={style.recBlue} tabIndex={-1} />
        <div className={style.recGreen} tabIndex={-1} />
        <div className={style.recGreenLight} tabIndex={-1} />
      </div>
    </div>
  );
};

ReviewBackground.propTypes = propTypes;

export default ReviewBackground;
