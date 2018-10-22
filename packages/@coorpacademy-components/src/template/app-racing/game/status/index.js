import React from 'react';
import countBy from 'lodash/fp/countBy';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import {Motion, spring} from 'react-motion';
import Colors from '../common-fixtures/colors';
import Team from './team';
import Counter from './counter';
import style from './style.css';

const Counters = ({team, goal, towers, start = false}) => (
  <div className={style.counters}>
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

const GameStatus = ({team, towers, goal, cta, hideTeams = false, start = false}) => {
  return (
    <Motion
      defaultStyle={{
        marginTop: start ? 150 : 0
      }}
      style={{
        marginTop: spring(0, {stiffness: 120, damping: 11})
      }}
    >
      {({grayValue, marginTop}) => {
        return (
          <div className={style.gameStatus}>
            <div
              className={style.bg}
              style={{
                backgroundColor: team !== null ? Colors[team.num] : '#fff',
                marginTop: `${marginTop}px`
              }}
            >
              <Counters team={team} towers={towers} goal={goal} start={start} />
              <Team {...team} />
            </div>
          </div>
        );
      }}
    </Motion>
  );
};

export default GameStatus;
