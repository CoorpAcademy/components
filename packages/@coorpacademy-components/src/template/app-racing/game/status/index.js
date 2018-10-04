import React from 'react';
import countBy from 'lodash/fp/countBy';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import {Motion, spring} from 'react-motion';
import Colors from '../common-fixtures/colors';
import Team from './team';
import Counter from './counter';
import style from './style.css';

const Counters = ({team, goal, towers, bottom}) => (
  <div
    className={style.counters}
    style={{
      bottom: `${bottom}px`
    }}
  >
    {map.convert({cap: false})((tower, index) => {
      const count = countBy(identity, tower);
      const newPoints = (count.new || 0) - (count.lost || 0) - (count.bad || 0);
      const points = (count.placed || 0) + (count.new || 0) + (count.good || 0);
      const isMyTeam = index === team.num;
      return (
        <Counter
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
);

const GameStatus = ({team, towers, goal, cta, hideTeams = false, gray = false, start = false}) => {
  return (
    <Motion
      defaultStyle={{
        grayValue: 0
      }}
      style={{
        grayValue: spring(gray ? 100 : 0)
      }}
    >
      {({grayValue}) => {
        return (
          <div
            className={style.gameStatus}
            style={{
              backgroundColor: team !== null ? Colors[team.num] : '#fff',
              filter: `grayscale(${grayValue})`
            }}
          >
            <div className={style.bg} />
            <Counters team={team} towers={towers} goal={goal} />
            <Team {...team} />
          </div>
        );
      }}
    </Motion>
  );
};

export default GameStatus;
