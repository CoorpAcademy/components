import React from 'react';
import countBy from 'lodash/fp/countBy';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import {Motion, spring} from 'react-motion';
import Colors from '../common-fixtures/colors';
import Timer from '../timer';
import Team from './team';
import Counter from './counter';
import style from './style.css';

const Counters = ({team, goal, towers, start = false}) => (
  <Motion
    key={new Date().getTime()}
    defaultStyle={{
      marginTop: start ? -1300 : -29
    }}
    style={{
      marginTop: spring(-29)
    }}
  >
    {({marginTop}) => {
      return (
        <div
          className={style.counters}
          style={{
            marginTop: `${marginTop}px`
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
    }}
  </Motion>
);

const GameStatus = ({
  team,
  towers,
  goal,
  cta,
  hideTeams = false,
  gray = false,
  start = false,
  getReadyTime = 0
}) => {
  return (
    <Motion
      defaultStyle={{
        grayValue: 0,
        marginTop: start ? 150 : 0
      }}
      style={{
        grayValue: spring(gray ? 100 : 0),
        marginTop: spring(0)
      }}
    >
      {({grayValue, marginTop}) => {
        console.log('time -> ', getReadyTime);
        return (
          <div
            className={style.gameStatus}
            style={{
              filter: `grayscale(${grayValue})`
            }}
          >
            <div
              className={style.bg}
              style={{
                backgroundColor: team !== null ? Colors[team.num] : '#fff',
                marginTop: `${marginTop}px`
              }}
            >
              <Team {...team} />
              {getReadyTime > 0 && (
                <Timer start={getReadyTime / 1000} className={style.timer} text=" " />
              )}
            </div>
            <Counters team={team} towers={towers} goal={goal} start={start} />
          </div>
        );
      }}
    </Motion>
  );
};

export default GameStatus;
