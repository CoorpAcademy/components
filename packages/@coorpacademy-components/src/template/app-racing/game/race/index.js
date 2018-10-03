import React from 'react';
import Towers from './towers';
import style from './style.css';

const Race = ({myTeam, towers, goal, highlight}) => (
  <div className={style.sectionRace}>
    <Towers myTeam={myTeam} towers={towers} goal={goal} highlight={highlight} />
  </div>
);

export default Race;
