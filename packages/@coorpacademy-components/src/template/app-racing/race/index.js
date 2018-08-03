import React from 'react';
import map from 'lodash/fp/map';
import isNull from 'lodash/fp/isNull';
import classnames from 'classnames';
import Cta from '../../../atom/cta';
import animation from '../../../atom/css-animations/fade-in.css';
import Towers from './towers';
import style from './style.css';

const Player = ({name, avatar, borderStyle}) => (
  <div
    title={name}
    className={classnames(style.avatar, borderStyle, animation.fadeIn)}
    key={name}
    style={{
      backgroundImage: `url(${avatar})`
    }}
  />
);

const Team = _team => (
  <div className={style.team}>
    <div className={style.answered}>
      {map(({name, avatar, isCorrect}) => {
        if (isNull(isCorrect)) {
          return null;
        }

        const borderStyle = isCorrect === true ? style.correct : style.notCorrect;

        return <Player name={name} avatar={avatar} borderStyle={borderStyle} />;
      }, _team)}
    </div>

    <div className={style.waiting}>
      {map(({name, avatar, isCorrect}) => {
        if (!isNull(isCorrect)) {
          return null;
        }

        return <Player name={name} avatar={avatar} borderStyle={style.noAnswer} />;
      }, _team)}
    </div>
  </div>
);

const Race = props => {
  const {info, race, cta, team} = props;
  const sectionClassName = subStyle => classnames(style.layoutSection, subStyle);

  const message = info.title && <p className={style.message}>{info.title}</p>;
  const gameOver = info.gameOver && <p className={style.gameOver}>Game Over!</p>;

  return (
    <div className={style.screenWrapper}>
      <div className={style.screen}>
        <section className={sectionClassName(style.sectionBody)}>
          <section className={sectionClassName(style.sectionRace)}>
            <Towers {...race} />
          </section>
          <section className={sectionClassName(style.sectionCTA)}>
            <Team {...team} />
            <Cta {...cta} />
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
