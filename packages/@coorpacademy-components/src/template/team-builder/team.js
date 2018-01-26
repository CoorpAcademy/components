import React from 'react';
import map from 'lodash/fp/map';
import Member from './member';
import style from './team.css';

const Team = props => {
  const {name, members} = props;

  return (
    <div className={style.team}>
      <header>
        <h1>{name}</h1>
      </header>
      <div className={style.members}>
        {map(member => <Member key={member.name} {...member} />, members)}
      </div>
    </div>
  );
};

export default Team;
