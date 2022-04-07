import React from 'react';
import style from './style.css';

const ReviewBackground = () => {
  return (
    <div className={style.mainContainer}>
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

export default ReviewBackground;
