import React from 'react';
import Colors from '../common-fixtures/colors';
import style from './counter.css';
// import ScoreNotification from './score-notification';

const BASES = [
  'https://user-images.githubusercontent.com/910636/46875057-01990d00-ce3b-11e8-9ebc-4544a86b18d6.png'
];

const Counter = ({team, isMyTeam, points, goal, nbToNotify = 0}) => {
  // const notification =
  //   nbToNotify !== 0 ? (
  //     <ScoreNotification key={nbToNotify} positive={nbToNotify > 0} number={nbToNotify} />
  //   ) : null;

  return (
    <div
      className={style.counter}
      style={{
        backgroundImage: `url('${BASES[0]}')`,
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
