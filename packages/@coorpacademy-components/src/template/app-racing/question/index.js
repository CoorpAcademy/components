import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SlidesPlayer from '../../app-player/player/slides/slides-player';
import Team from '../team';
import TeamAvatar from '../team-avatar';
import style from './style.css';

const GameStatus = ({team, towers, goal}) => (
  <div className={style.gameStatus}>
    <div className={style.teamWrapper}>
      <Team {...team} />
    </div>
    <div className={style.teamsWrapper}>
      {map.convert({cap: false})((tower, index) => {
        const points = 3;
        return <TeamAvatar key={`team-avatar-${index}`} team={index} points={points} goal={goal} />;
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
