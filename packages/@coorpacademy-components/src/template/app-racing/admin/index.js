import React from 'react';
import Cta from '../../../atom/cta';
import Provider from '../../../atom/provider';
import Range from '../../../atom/range'; // eslint-disable-line no-shadow
import Card from '../../../molecule/card';
import SearchForm from '../../../molecule/search-form';
import CardsGrid from '../../../organism/cards-grid';
import style from './style.css';

const RacingAdmin = (props, context) => {
  const {cta, teamsSlider, playersSlider, searchForm, selectedCard, cards} = props;
  const nbTeams = teamsSlider.value * 10;
  const nbPlayers = playersSlider.value * 10;

  return (
    <div className={style.admin}>
      <p className={style.title}>Create a Race</p>

      <section className={style.sliders}>
        <span className={style.description}>{nbTeams} teams</span>
        <div className={style.slider}>
          <Range {...teamsSlider} />
        </div>
        <span className={style.description}>{nbPlayers} players by team</span>
        <div className={style.slider}>
          <Range {...playersSlider} />
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

      <section className={style.catalog}>
        <p className={style.description}>Pick a content below:</p>
        <div className={style.search}>
          <SearchForm {...searchForm} />
        </div>

        <div className={style.cards}>
          <CardsGrid {...cards} />
        </div>
      </section>
    </div>
  );
};

RacingAdmin.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default RacingAdmin;
