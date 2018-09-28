import React from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import Provider from '../../atom/provider';
import Member from './member';
import style from './team.css';

const BLOCKS = [
  'https://user-images.githubusercontent.com/910636/41063327-a380f744-69d8-11e8-85da-a6f6f3d81a17.png',
  'https://user-images.githubusercontent.com/910636/41063878-3c07c3ac-69da-11e8-967e-bf62657d57b3.png',
  'https://user-images.githubusercontent.com/910636/41063879-3c37737c-69da-11e8-8f89-c5ecd5de9534.png',
  'https://user-images.githubusercontent.com/910636/41063880-3c680cf8-69da-11e8-9d96-3bb6701ef9cf.png',
  'https://user-images.githubusercontent.com/910636/41063881-3c957008-69da-11e8-83e4-374509a9c5ed.png'
];

const Team = (props, context) => {
  const {skin} = context;
  const {name, members, num} = props;
  const primary = get('racing.primary', skin);

  return (
    <div className={style.team}>
      <header
        style={{
          backgroundColor: primary
        }}
      >
        <img src={BLOCKS[num]} className={style.block} />
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
