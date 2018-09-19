import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SlidesPlayer from '../../app-player/player/slides/slides-player';
import Team from '../team';
import TeamScore from '../team-score';
import style from './style.css';

const GameStatus = ({team, towers, goal}) => (
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
  </div>
);

const Question = props => (
  <div className={style.wrapper}>
    <SlidesPlayer questionBackgroundColor="transparent" {...props.slide} />
    <GameStatus team={props.team} goal={props.race.goal} towers={props.race.towers} />
  </div>
);

Question.propTypes = {
  player: PropTypes.shape(SlidesPlayer.propTypes)
};

export default Question;
