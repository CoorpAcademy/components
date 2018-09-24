import React from 'react';
import map from 'lodash/fp/map';
import classnames from 'classnames';
import {Motion, spring} from 'react-motion';
import Cta from '../../../../atom/cta';
import animation from '../../../../atom/css-animations/fade-in.css';
import Team from './team';
import TeamScore from './team-score';
import style from './style.css';

const Button = ({cta}) => {
  if (!cta) return null;
  return (
    <div className={style.buttonWrapper}>
      <Cta className={classnames(style.button, animation.fadeIn)} {...cta} />
    </div>
  );
};

const Teams = ({team, goal, towers, bottom}) => (
  <div
    className={style.scoresWrapper}
    style={{
      bottom: `${bottom}px`
    }}
  >
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
);

const GameStatus = ({team, towers, goal, cta, hideTeams = false}) => {
  const position = hideTeams ? -100 : 0;
  const options = {stiffness: 500, damping: 30};

  return (
    <div className={style.gameStatus}>
      <Team {...team} />
      <Motion
        defaultStyle={{y: -100}}
        style={{
          y: spring(position, options)
        }}
      >
        {({y}) => {
          return <Teams team={team} towers={towers} goal={goal} bottom={y} />;
        }}
      </Motion>
      <Button cta={cta} />
    </div>
  );
};

export default GameStatus;
