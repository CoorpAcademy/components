import React from 'react';

import style from './style.css';



const Avatar = ({color, initial}) => (
    <div
      className={style.avatar}
      style={{
        backgroundColor: `${color}`}}
    >
      <div className={style.initial}>
        {initial}
      </div>
    </div>
);

export default Avatar;
