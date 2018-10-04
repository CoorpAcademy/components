import React from 'react';
import style from './member.css';

const Member = props => {
  const {avatar, name, isMe} = props;

  return (
    <div className={style.member}>
      <div
        className={style.avatar}
        style={{
          backgroundImage: `url(${avatar})`
        }}
      />
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
