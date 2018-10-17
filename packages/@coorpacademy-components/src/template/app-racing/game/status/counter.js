import React from 'react';
import Colors from '../common-fixtures/colors';
import style from './counter.css';
// import ScoreNotification from './score-notification';

const Counter = ({team, isMyTeam, points, goal, nbToNotify = 0}) => {
  // const notification =
  //   nbToNotify !== 0 ? (
  //     <ScoreNotification key={nbToNotify} positive={nbToNotify > 0} number={nbToNotify} />
  //   ) : null;

  return (
    <div
      className={style.counter}
      style={{
        backgroundColor: Colors[team]
      }}
    >
      {/* {notification} */}
      <span className={isMyTeam ? style.textMyTeam : null}>
        {points} / {goal}
      </span>
    </div>
  );
};

export default Counter;
