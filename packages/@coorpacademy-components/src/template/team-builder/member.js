import React from 'react';
import style from './member.css';
import Avatar from './avatar';

const Member = props => {
  const {name, isMe} = props;

  return (
    <div className={style.member}>
      <div className={style.avatar}>
        <Avatar key={name + props.color} {...props} />
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
