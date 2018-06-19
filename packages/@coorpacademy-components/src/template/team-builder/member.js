import React from 'react';
import style from './member.css';

const Member = props => {
  const {name} = props;

  return (
    <div className={style.member}>
      <h1>{name}</h1>
    </div>
  );
};

export default Member;
