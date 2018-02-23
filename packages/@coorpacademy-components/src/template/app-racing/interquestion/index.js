import React from 'react';
import classnames from 'classnames';
import Cta from '../../../atom/cta';
import Header from './header';
import Race from './race';
import style from './style.css';

const RacingInterquestionScreen = props => {
  const {header, race} = props;
  const sectionClassName = subStyle => classnames(style.layoutSection, subStyle);

  return (
    <div className={style.screenWrapper}>
      <div className={style.screen}>
        <section className={sectionClassName(style.sectionHeader)}>
          <Header {...header} />
        </section>
        <section className={sectionClassName(style.sectionBody)}>
          <section className={sectionClassName(style.sectionRace)}>
            <Race {...race} />
          </section>
          <section className={sectionClassName(style.sectionCTA)}>
            <Cta {...props.cta} className={style.cta} />
          </section>
        </section>
      </div>
    </div>
  );
};

export default RacingInterquestionScreen;
