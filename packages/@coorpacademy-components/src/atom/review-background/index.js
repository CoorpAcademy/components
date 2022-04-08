import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

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

ReviewBackground.propTypes = {'aria-label': PropTypes.string};

export default ReviewBackground;
