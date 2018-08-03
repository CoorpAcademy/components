import React from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import Provider from '../../atom/provider';
import Member from './member';
import style from './team.css';

const Team = (props, context) => {
  const {skin} = context;
  const {name, members} = props;
  const primary = get('racing.primary', skin);

  return (
    <div className={style.team}>
      <header
        style={{
          backgroundColor: primary
        }}
      >
        <h1>{name}</h1>
      </header>
      <div className={style.members}>
        {map(member => <Member key={member.name} {...member} />, members)}
      </div>
    </div>
  );
};

Team.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Team;
