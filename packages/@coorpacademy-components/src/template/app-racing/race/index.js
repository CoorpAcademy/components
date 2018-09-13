import React from 'react';
import classnames from 'classnames';
import Cta from '../../../atom/cta';
import Team from '../team';
import Towers from './towers';
import style from './style.css';

const Race = props => {
  const {info, race, cta, team} = props;
  const sectionClassName = subStyle => classnames(style.layoutSection, subStyle);

  const message = info.title && <p className={style.message}>{info.title}</p>;
  const gameOver = info.gameOver && <p className={style.gameOver}>Game Over!</p>;

  const button = cta ? <Cta {...cta} /> : null;

  return (
    <div className={style.screenWrapper}>
      <div className={style.screen}>
        <section className={sectionClassName(style.sectionBody)}>
          <section className={sectionClassName(style.sectionRace)}>
            <Towers {...race} />
          </section>
          <section className={sectionClassName(style.sectionCTA)}>
            <Team {...team} />
            {button}
          </section>
        </section>
        <p className={style.message}>{info.title}</p>
        {message}
        {gameOver}
      </div>
    </div>
  );
};

export default Race;
