import get from 'lodash/fp/get';
import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';
import SlidesPlayer from '../../app-player/player/slides/slides-player';
import Cta from '../../../atom/cta';
import TeamList from '../../team-builder/motionned-team';
import GameStatus from './status';
import Team from './status/team';
import Race from './race';
import Timer from './timer';
import style from './style.css';

const TopScreen = props => {
  const position = props.view === 'question' ? 0 : -100;
  const options = {stiffness: 120, damping: 22};
  const slide = props.slide !== null && (
    <div className={style.slideWrapper}>
      <SlidesPlayer questionBackgroundColor="#ffffffdb" {...props.slide} />
    </div>
  );

  return (
    <Motion
      defaultStyle={{
        y: 0
      }}
      style={{
        y: spring(position, options)
      }}
    >
      {({y, blurValue, grayValue}) => {
        return (
          <div className={style.topScreen}>
            <div className={style.towers}>
              <Race
                towers={props.towers}
                goal={props.goal}
                blurType={props.blurType}
                myTeam={props.team}
              />
            </div>
            <div
              className={style.slide}
              style={{
                top: `${y}%`
              }}
            >
              {slide}
            </div>
          </div>
        );
      }}
    </Motion>
  );
};

const Game = props => {
  const {
    grayBottom = false,
    start = false,
    team,
    goal,
    towers,
    cta,
    info = {},
    victors = [],
    getReadyTime = 0
  } = props;

  const popin = victors.length > 0 && (
    <div className={style.answerPopin}>
      <span>Game Over!</span>
      <TeamList members={victors} isMyTeam />
    </div>
  );

  const message = get('message', info) && (
    <div className={style.message}>
      <span>{get('message', info)}</span>
    </div>
  );

  return (
    <div className={style.game}>
      <TopScreen {...props} />
      <GameStatus
        gray={grayBottom}
        team={team}
        goal={goal}
        towers={towers}
        cta={cta}
        start={start}
        getReadyTime={getReadyTime}
      />
      {popin}
      {message}
      {start && <Timer className={style.timer} start={3} delay={1000} />}
    </div>
  );
};

Game.propTypes = {
  view: PropTypes.oneOf(['question', 'race']),
  getReadyTime: PropTypes.number,
  start: PropTypes.bool,
  blurType: PropTypes.oneOf(['all', 'all-but-mine']),
  grayBottom: PropTypes.bool,
  slide: PropTypes.shape(SlidesPlayer.propTypes),
  towers: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(['placed', 'removed', 'new', 'lost', 'bad', 'good', 'drop']))
  ),
  victors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      isMe: PropTypes.bool,
      team: PropTypes.number
    })
  ),
  cta: PropTypes.shape(Cta.propTypes),
  goal: PropTypes.number,
  team: PropTypes.shape(Team.propTypes),
  info: PropTypes.shape({
    success: PropTypes.bool,
    message: PropTypes.string
  })
};

export default Game;
