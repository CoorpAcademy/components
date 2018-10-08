import React from 'react';

import style from './style.css';

const Avatar = ({avatarURL}) => (
  <div
    className={style.avatar}
    style={{
      backgroundImage: `url(${avatarURL})`
    }}
  />
);

export default Avatar;
