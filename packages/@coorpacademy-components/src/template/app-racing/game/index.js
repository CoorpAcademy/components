import React from 'react';
import PropTypes from 'prop-types';
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
const View = props => {
  const {view} = props;
  if (view === 'question') {
    return <SlidesPlayer questionBackgroundColor="transparent" {...props.slide} />;
  }
  if (view === 'race') {
    return <Race {...props} />;
  }
};

const Game = props => (
  <div className={style.game}>
    <View {...props} />
    <GameStatus team={props.team} goal={props.goal} towers={props.towers} />
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
