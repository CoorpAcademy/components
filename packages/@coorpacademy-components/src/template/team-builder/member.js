import React from 'react';
import style from './member.css';
import Avatar from './avatar';
import colors from '../app-racing/game/common-fixtures/colors';



const Member = props => {
  const {name, isMe, initial, number} = props;
  console.log('number', number);

  return (
    <div className={style.member}>
      <div className={style.avatar}>
        {' '}
         <Avatar key={name} color={colors[number]} initial={initial} />{' '}
      </div>
      <h1
        style={{
          fontWeight: isMe ? '800' : '200'
        }}
      >
        {name}
      </h1>
    </div>
  );
};

export default Member;
