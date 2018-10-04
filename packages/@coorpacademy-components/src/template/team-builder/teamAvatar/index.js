import React from 'react';
import {map} from 'lodash/fp';

import isEmpty from 'lodash/fp/isEmpty';
import Provider from '../../../atom/provider';
import colors from '../../app-racing/game/common-fixtures/colors';

import style from './style.css';

const Avatar = ({url}) => (
  <div
    className={style.avatar}
    style={{
      backgroundImage: `url(${url})`
    }}
  />
);

const TeamAvatar = (props, context) => {
  const {name, members, number} = props;
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
        {map(member => {
          if (isEmpty(member)) return null;
          return <Avatar key={member.name + member.avatar} url={member.avatar} />;
        }, members)}
      </div>
    </div>
  );
};

TeamAvatar.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamAvatar;
