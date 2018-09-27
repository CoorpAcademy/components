import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';
import SlidesPlayer from '../../app-player/player/slides/slides-player';
import Cta from '../../../atom/cta';
import GameStatus from './status';
import Team from './status/team';
import Race from './race';
import style from './style.css';
import messagesStyle from './messages.css';

const Messages = ({info}) => {
  if (!info) return null;

  const message = info.title && <p className={messagesStyle.message}>{info.title}</p>;
  const gameOver = info.gameOver && <p className={messagesStyle.gameOver}>Game Over!</p>;

  return (
    <div>
      {message}
      {gameOver}
    </div>
  );
};

const TopScreen = props => {
  const position = props.view === 'race' ? -100 : 0;
  const options = {stiffness: 500, damping: 30};

  return (
    <div className={style.topScreen}>
      <Motion
        defaultStyle={{x: 0}}
        style={{
          x: spring(position, options)
        }}
      >
        {({x}) => {
          return (
            <div
              className={style.movingView}
              style={{
                left: `${x}%`
              }}
            >
              <div className={style.movingViewPart}>
                <SlidesPlayer questionBackgroundColor="transparent" {...props.slide} />
              </div>
              <div className={style.movingViewPart}>
                <Race {...props} />
              </div>
            </div>
          );
        }}
      </Motion>
    </div>
  );
};

const Game = props => (
  <div className={style.game}>
    <TopScreen {...props} />
    <GameStatus
      team={props.team}
      goal={props.goal}
      towers={props.towers}
      cta={props.cta}
      hideTeams={props.view === 'race'}
    />
    <Messages info={props.info} />
  </div>
);

Game.propTypes = {
  view: PropTypes.oneOf(['question', 'race']),
  slide: PropTypes.shape(SlidesPlayer.propTypes),
  towers: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(['placed', 'removed', 'new', 'lost']))
  ),
  cta: PropTypes.shape(Cta.propTypes),
  goal: PropTypes.number,
  team: PropTypes.shape(Team.propTypes),
  info: PropTypes.shape({
    title: PropTypes.string,
    success: PropTypes.bool,
    gameOver: PropTypes.bool
  })
};

export default Game;
