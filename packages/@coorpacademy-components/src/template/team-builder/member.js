import React from 'react';
import style from './member.css';

const Member = props => {
  const {avatar, name} = props;

  return (
    <div className={style.member}>
      <h1>{name}</h1>
      <div
        className={style.avatar}
        style={{
          backgroundImage: `url(${avatar})`
        }}
      />
    </div>
  );
};

export default Member;
