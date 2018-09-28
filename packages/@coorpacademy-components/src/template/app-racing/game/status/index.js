import React from 'react';
import countBy from 'lodash/fp/countBy';
import identity from 'lodash/fp/identity';
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
  <div className={style.scoresPositioner}>
    <div
      className={style.scores}
      style={{
        bottom: `${bottom}px`
      }}
    >
      {map.convert({cap: false})((tower, index) => {
        const count = countBy(identity, tower);
        const newPoints = (count.new || 0) - (count.lost || 0);
        const points = (count.placed || 0) + (count.new || 0);
        const isMyTeam = index === team.num;
        return (
          <TeamScore
            key={`team-avatar-${index}`}
            team={index}
            points={points}
            goal={goal}
            nbToNotify={newPoints}
            isMyTeam={isMyTeam}
          />
        );
      }, towers)}
    </div>
  </div>
);

const GameStatus = ({
  team,
  towers,
  goal,
  cta,
  hideTeams = false,
  popUpMaxHeight = 200,
  gray = false
}) => {
  const options = {stiffness: 120, damping: 22};

  return (
    <Motion
      defaultStyle={{
        r: 14,
        g: 58,
        b: 61
      }}
      style={{
        r: spring(gray ? 158 : 14, options),
        g: spring(gray ? 158 : 58, options),
        b: spring(gray ? 158 : 61, options)
      }}
    >
      {({r, g, b}) => {
        const position = hideTeams ? -100 : 0;
        return (
          <div
            className={style.gameStatus}
            style={{
              background: `rgba(${r}, ${g}, ${b}, 0.88)`
            }}
          >
            <Team {...team} popUpMaxHeight={popUpMaxHeight} />
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
      }}
    </Motion>
  );
};

export default GameStatus;
