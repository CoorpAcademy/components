import get from 'lodash/fp/get';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Motion, spring} from 'react-motion';
import Snow from 'react-snow-effect';
import SlidesPlayer from '../../app-player/player/slides';
import Cta from '../../../atom/cta';
import animation from '../../../atom/css-animations/fade-out.css';
import TeamList from '../../team-builder/motionned-team';
import GameStatus from './status';
import Team from './status/team';
import Race from './race';
import Timer from './timer';
import style from './style.css';

const BACKGROUNDS = [
  'https://user-images.githubusercontent.com/910636/50009756-06ec1280-ffb8-11e8-8301-55e2e5437ca6.jpg'
];

// const BACKGROUNDS = [
//   'https://user-images.githubusercontent.com/13415878/47143117-c0827c00-d2c4-11e8-9a06-3ebdc45431d4.jpg',
//   'https://user-images.githubusercontent.com/13415878/47143118-c0827c00-d2c4-11e8-9dcf-649d04f52a55.jpg',
//   'https://user-images.githubusercontent.com/13415878/47145025-10fbd880-d2c9-11e8-85df-0ec1cac8dc59.jpg'
// ];

const TopScreen = props => {
  const position = props.view === 'race' ? -100 : 0;
  const options = {stiffness: 120, damping: 22};
  const slide = props.slide !== null && (
    <div className={style.slideWrapper}>
      <SlidesPlayer {...props.slide} />
    </div>
  );

  return (
    <Motion
      defaultStyle={{
        y: -100
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
  const {start = false, team, goal, towers, cta, info = {}, victors = [], getReadyTime = 0} = props;

  // eslint-disable-next-line no-nested-ternary
  const popin = victors && (
    <div className={style.answerPopin}>
      <span className={victors.isVictory ? style.win : style.lose}>{victors.message}</span>
      <TeamList {...victors} title="Winners" />
    </div>
  );

  const message = get('message', info) && (
    <div className={classnames(style.message, animation.fadeOut)}>
      <span>{get('message', info)}</span>
    </div>
  );

  return (
    <div
      className={style.game}
      style={{
        backgroundImage: `url('${BACKGROUNDS[goal % BACKGROUNDS.length]}')`
      }}
    >
      <TopScreen {...props} />
      <GameStatus team={team} goal={goal} towers={towers} cta={cta} start={start} />
      {popin}
      {message}
      {(start || getReadyTime > 0) && (
        <Timer className={style.timer} start={3} delay={1000} text={start ? 'Start!' : null} />
      )}
      <Snow />
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
