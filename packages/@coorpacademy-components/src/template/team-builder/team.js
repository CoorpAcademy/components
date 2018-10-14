import React from 'react';
import map from 'lodash/fp/map';
import isEmpty from 'lodash/fp/isEmpty';
import Provider from '../../atom/provider';
import colors from '../app-racing/game/common-fixtures/colors';
import Member from './member';
import style from './team.css';

const Team = (props, context) => {
  const {name, members, numberSlotTaken, number} = props;
  return (
    <div className={style.team}>
      <header
        style={{
          backgroundColor: colors[number]
        }}
      >
        <h1> You've joined : {name}  :  {numberSlotTaken}  /  {members.length} </h1>
      </header>
      <div className={style.members}>
        {map(member => {
          if (isEmpty(member)) return null;
          return <Member key={member.name} color={colors[number]} {...member} />;
        }, members)}
      </div>
    </div>
  );
};

Team.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Team;
