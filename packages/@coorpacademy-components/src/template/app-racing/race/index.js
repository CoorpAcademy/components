import React from 'react';
import classnames from 'classnames';
import Cta from '../../../atom/cta';
import Team from '../team';
import animation from '../../../atom/css-animations/fade-in.css';
import Towers from './towers';
import style from './style.css';

const Race = props => {
  const {info, race, cta, team} = props;

  const message = info.title && <p className={style.message}>{info.title}</p>;
  const gameOver = info.gameOver && <p className={style.gameOver}>Game Over!</p>;

  const button = cta ? (
    <Cta className={classnames(style.button, animation.fadeIn)} {...cta} />
  ) : null;

  return (
    <div className={style.screenWrapper}>
      <div className={style.screen}>
        <div className={style.sectionBody}>
          <div className={style.sectionRace}>
            <Towers {...race} />
          </div>
          <div className={style.sectionTeam}>
            <Team {...team} type="race" />
            <div className={style.buttonWrapper}>{button}</div>
          </div>
        </div>
        <p className={style.message}>{info.title}</p>
        {message}
        {gameOver}
      </div>
    </div>
  );
};

export default Race;
