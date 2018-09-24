import React from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import Cta from '../../../../atom/cta';
import animation from '../../../../atom/css-animations/fade-in.css';
import Team from './team';
import TeamScore from './team-score';
import style from './style.css';

const Button = cta => {
  if (!cta) return null;

  return <Cta className={classnames(style.button, animation.fadeIn)} {...cta} />;
};

const GameStatus = ({team, towers, goal, cta}) => (
  <div className={style.gameStatus}>
    <Team {...team} />
    <div className={style.scoresWrapper}>
      {map.convert({cap: false})((tower, index) => {
        const points = 3;
        const isMyTeam = index === team.num;
        return (
          <TeamScore
            key={`team-avatar-${index}`}
            team={index}
            points={points}
            goal={goal}
            isMyTeam={isMyTeam}
          />
        );
      }, towers)}
    </div>
    <Button cta={cta} />
  </div>
);

export default GameStatus;
