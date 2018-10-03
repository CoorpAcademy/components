import React from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import Provider from '../../atom/provider';
import colors from '../app-racing/game/common-fixtures/colors';
import Member from './member';
import style from './team.css';

const Team = (props, context) => {
  const {skin} = context;
  const {name, members, number} = props;
  const primary = get('racing.primary', skin);

  console.log(number);

  return (
    <div className={style.team}>
      <header
        style={{
          backgroundColor: colors[number]
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
