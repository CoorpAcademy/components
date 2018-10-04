import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';
import SlidesPlayer from '../../app-player/player/slides/slides-player';
import Cta from '../../../atom/cta';
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
      <SlidesPlayer questionBackgroundColor="transparent" {...props.slide} />
    </div>
  );

  return (
    <Motion
      defaultStyle={{
        x: 0
      }}
      style={{
        x: spring(position, options)
      }}
    >
      {({x, blurValue, grayValue}) => {
        return (
          <div className={style.topScreen}>
            <div
              className={style.movingView}
              style={{
                left: `${x}%`
              }}
            >
              <div className={style.slide}>{slide}</div>
              <div className={style.towers}>
                <Race
                  towers={props.towers}
                  goal={props.goal}
                  highlight={props.highlight}
                  myTeam={props.team}
                />
              </div>
            </div>
          </div>
        );
      }}
    </Motion>
  );
};
const Game = props => {
  const {blur: gray, start, team, goal, towers, cta, info, view} = props;

  // finalement pas utilisé pour la reponse, tu peux peut etre reprendre ca pour gameOver @Bertrand
  const popin = view === 'show-answer' && (
    <div className={style.answerPopin}>
      <span>{info.success ? 'good' : 'bad'}</span>
    </div>
  );

  return (
    <div className={style.game}>
      <TopScreen {...props} />
      <GameStatus gray={gray} team={team} goal={goal} towers={towers} cta={cta} start={start} />
      {popin}
      {start && <Timer />}
    </div>
  );
};

Game.propTypes = {
  view: PropTypes.oneOf(['question', 'race']),
  start: PropTypes.bool,
  blur: PropTypes.bool,
  highlight: PropTypes.bool,
  slide: PropTypes.shape(SlidesPlayer.propTypes),
  towers: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(['placed', 'removed', 'new', 'lost', 'bad', 'good', 'drop']))
  ),
  cta: PropTypes.shape(Cta.propTypes),
  goal: PropTypes.number,
  team: PropTypes.shape(Team.propTypes),
  info: PropTypes.shape({
    success: PropTypes.bool,
    gameOver: PropTypes.bool
  })
};

export default Game;
