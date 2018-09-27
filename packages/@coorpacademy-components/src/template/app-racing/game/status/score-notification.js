import React from 'react';
import classnames from 'classnames';
import style from './score-notification.css';

const ScoreNotification = ({positive = true, number = 1}) => {
  const textStyle = positive === true ? style.textCorrect : style.textNotCorrect;

  return (
    <div className={style.notification}>
      <span className={classnames(style.textResult, textStyle)}>
        {`${positive ? '+' : ''}${number}`}
      </span>
    </div>
  );
};

export default ScoreNotification;
