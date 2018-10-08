import React from 'react';
import {map} from 'lodash/fp';

import isEmpty from 'lodash/fp/isEmpty';
import Provider from '../../../atom/provider';
import colors from '../../app-racing/game/common-fixtures/colors';

import Avatar from '../avatar';

import style from './style.css';

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
          return (
            <div className={style.avatar} key={member.name + member.avatar}>
              {' '}
              <Avatar avatarURL={member.avatar} />{' '}
            </div>
          );
        }, members)}
      </div>
    </div>
  );
};

TeamAvatar.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamAvatar;
