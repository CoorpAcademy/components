import React from 'react';
import classnames from 'classnames';
import Cta from '../../../atom/cta';
import Towers from './towers';
import style from './style.css';

const Race = props => {
  const {header, race} = props;
  const sectionClassName = subStyle => classnames(style.layoutSection, subStyle);

  return (
    <div className={style.screenWrapper}>
      <div className={style.screen}>
        <section className={sectionClassName(style.sectionBody)}>
          <section className={sectionClassName(style.sectionRace)}>
            <Towers {...race} />
          </section>
          <section className={sectionClassName(style.sectionCTA)}>
            <Cta {...props.cta} />
          </section>
        </section>
        <p className={style.message}>{header.title}</p>
      </div>
    </div>
  );
};

export default Race;
