import React from 'react';
import style from './style.css';

const createLayout = Template => {
  return function LayoutPlayer(props) {
    return (
      <div className={style.container}>
        <p>header template freerun</p>
        <div className={style.contentWrapper}>
          <Template {...props} />
        </div>
      </div>
    );
  };
};

export default createLayout;
