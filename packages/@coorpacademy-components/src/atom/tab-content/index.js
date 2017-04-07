import React from 'react';
import style from './style.css';

const TabContent = props => (
  <div className={style.tabContent}>
    <div className={style.tabContentTitle}>
      {props.translations.titles[props.activeContent]}
    </div>
    <div className={`${style.tabContentDetails} ${props.hideContentBackground ? '' : style.tabContentDetailsBackground}`}>
      {props.children}
    </div>
  </div>
);

export default TabContent;
