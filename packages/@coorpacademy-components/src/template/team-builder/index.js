import React from 'react';
import map from 'lodash/fp/map';
import Cta from '../../atom/cta';
import Team from './team';
import style from './style.css';

const TeamBuilder = props => {
  const {teams, cta} = props;

  return (
    <div className={style.teamBuilder}>
      <div className={style.teams}>{map(team => <Team key={team.name} {...team} />, teams)}</div>
      <Cta {...cta} />
    </div>
  );
};

export default TeamBuilder;
