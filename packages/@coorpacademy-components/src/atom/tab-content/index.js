import React from 'react';
import style from './style.css';

const TabContent = props => {
  const backgroundClassName = props.hideContentBackground ? style.hiddenBackground : style.greyBackground;
  return (
    <div className={style.content}>
      <div className={style.contentTitle}>
        {props.translations.titles[props.activeContent]}
      </div>
      <div className={backgroundClassName}>
        {props.children}
      </div>
    </div>
  );
};

export default TabContent;
