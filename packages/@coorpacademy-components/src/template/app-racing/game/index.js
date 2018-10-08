import get from 'lodash/fp/get';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Motion, spring} from 'react-motion';
import SlidesPlayer from '../../app-player/player/slides/slides-player';
import Cta from '../../../atom/cta';
import animation from '../../../atom/css-animations/fade-out.css';
import TeamList from '../../team-builder/motionned-team';
import GameStatus from './status';
import Team from './status/team';
import Race from './race';
import Timer from './timer';
import style from './style.css';

const TopScreen = props => {
  const position = props.view === 'race' ? -100 : 0;
  const options = {stiffness: 120, damping: 22};
  const slide = props.slide !== null && (
    <div className={style.slideWrapper}>
      <SlidesPlayer questionBackgroundColor="#ffffffdb" {...props.slide} />
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
  const _title = victors.length > 0 ? (get('success', info) ? 'You win' : 'You lose') : '';
  const popin = victors.length > 0 && (
    <div className={style.answerPopin}>
      <span>{_title}</span>
      <TeamList members={victors} isMyTeam />
    </div>
  );

  const message = get('message', info) && (
    <div className={classnames(style.message, animation.fadeOut)}>
      <span>{get('message', info)}</span>
    </div>
  );

  return (
    <div className={style.game}>
      <TopScreen {...props} />
      <GameStatus team={team} goal={goal} towers={towers} cta={cta} start={start} />
      {popin}
      {message}
      {(start || getReadyTime > 0) && (
        <Timer className={style.timer} start={3} delay={1000} text={start ? 'Start!' : null} />
      )}
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
