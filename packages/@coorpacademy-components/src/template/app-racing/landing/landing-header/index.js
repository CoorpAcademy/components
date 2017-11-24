import React from 'react';
import identity from 'lodash/fp/identity';
import Avatar, {SIZE_BIG, SHAPE_OVAL} from '../../../../atom/avatar';
import style from './style.css';

const fakeAppTranslate = identity;

const LandingHeader = props => {
  const {team} = props;

  return (
    <div className={style.header}>
      <Avatar image={team.image} size={SIZE_BIG} shape={SHAPE_OVAL} color={team.color} />
      <div className={style.joined}>{fakeAppTranslate('You venez de rejoindre l\'équipe')}</div>
      <div className={style.name} style={{color: team.color}}>{team.name}</div>
    </div>
  );
};


export default LandingHeader;
