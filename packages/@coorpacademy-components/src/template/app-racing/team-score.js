import React from 'react';
import classnames from 'classnames';
import style from './team-score.css';
import BLOCKS from './blocks';

const TeamScore = ({team, isMyTeam, points, goal}) => (
  <div className={classnames(style.teamAvatar, isMyTeam ? style.myTeam : null)}>
    <img src={BLOCKS[team]} className={style.blockAvatar} />
    <span>
      {points} / {goal}
    </span>
  </div>
);

export default TeamScore;
