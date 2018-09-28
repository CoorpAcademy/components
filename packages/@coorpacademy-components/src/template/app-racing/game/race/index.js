import React from 'react';
import Towers from './towers';
import style from './style.css';

const Race = ({towers, goal}) => (
  <div className={style.sectionRace}>
    <Towers towers={towers} goal={goal} />
  </div>
);

export default Race;
