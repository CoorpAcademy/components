import React from 'react';
import classnames from 'classnames';
import Header from './header';
import Race from './race';
import style from './style.css';

const RacingInterquestionScreen = props => {
  const {header, race} = props;
  const sectionClassName = subStyle => classnames(style.layoutSection, subStyle);

  return (
    <div className={style.screen}>
      <section className={sectionClassName(style.sectionHeader)}>
        <Header {...header} />
      </section>
      <section className={sectionClassName(style.sectionRace)}>
        <Race {...race} />
      </section>
      <section className={sectionClassName(style.sectionCTA)}>
      </section>
    </div>
  );
};

export default RacingInterquestionScreen;
