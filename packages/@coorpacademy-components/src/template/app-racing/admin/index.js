import React from 'react';
import getOr from 'lodash/fp/getOr';
import Cta from '../../../atom/cta';
import Provider from '../../../atom/provider';
import Range from '../../../atom/range'; // eslint-disable-line no-shadow
import Card from '../../../molecule/card';
import style from './style.css';

const RacingAdmin = (props, context) => {
  const {cta, teamsSlider, playersSlider, goalSlider, selectedCard} = props;
  const nbTeams = getOr(0, 'value', teamsSlider) * 10;
  const nbPlayers = getOr(0, 'value', playersSlider) * 10;
  const goal = getOr(0, 'value', goalSlider) * 20;

  return (
    <div className={style.admin}>
      <div className={style.logo} />
      <section className={style.sliders}>
        <span className={style.description}>{nbTeams} teams</span>
        <div className={style.slider}>
          <Range {...teamsSlider} />
        </div>
        <span className={style.description}>{nbPlayers} players by team</span>
        <div className={style.slider}>
          <Range {...playersSlider} />
        </div>
        <span className={style.description}>
          goal: {goal}
          pts (min 3)
        </span>
        <div className={style.slider}>
          <Range {...goalSlider} />
        </div>
      </section>

      <section className={style.content}>
        <div className={style.card}>
          <Card {...selectedCard} />
        </div>
        <div className={style.button}>
          <Cta {...cta} />
        </div>
      </section>
    </div>
  );
};

RacingAdmin.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default RacingAdmin;
