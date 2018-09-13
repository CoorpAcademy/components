import React from 'react';
import style from './team-avatar.css';
import BLOCKS from './blocks';

const TeamAvatar = ({team, points, goal}) => (
  <div className={style.teamAvatar}>
    <img src={BLOCKS[team]} className={style.blockAvatar} />
    <span>
      {points} / {goal}
    </span>
  </div>
);

export default TeamAvatar;
