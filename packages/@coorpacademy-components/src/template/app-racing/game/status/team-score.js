import React from 'react';
import classnames from 'classnames';
import BLOCKS from '../common-fixtures/blocks';
import style from './team-score.css';
// import ScoreNotification from './score-notification';

const TeamScore = ({team, isMyTeam, points, goal, nbToNotify = 0}) => {
  // const notification =
  //   nbToNotify !== 0 ? (
  //     <ScoreNotification key={nbToNotify} positive={nbToNotify > 0} number={nbToNotify} />
  //   ) : null;

  return (
    <div className={classnames(style.teamAvatar, isMyTeam ? style.myTeam : null)}>
      <img src={BLOCKS[team]} className={style.blockAvatar} />
      <span>
        {points} / {goal}
      </span>
    </div>
  );
};

export default TeamScore;
