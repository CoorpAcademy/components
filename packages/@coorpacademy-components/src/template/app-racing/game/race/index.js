import React from 'react';
import Towers from './towers';
import style from './style.css';

const Race = ({myTeam, towers, goal, blurType}) => (
  <div className={style.sectionRace}>
    <Towers myTeam={myTeam} towers={towers} goal={goal} blurType={blurType} />
  </div>
);

export default Race;
