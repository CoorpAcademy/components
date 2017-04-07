import React from 'react';
import style from './style.css';

const Tab = props => (
  <div
    className={style.tab}
    onClick={() => props.onTabClick(props.targetContent)}
  >
    <div className={style.tabTitle}>
      {props.title}
    </div>
    <div className={style.tabLink}>
      {props.links.map(link => (
        <div className={style.tabLinkTitle}>
          {link.title}
        </div>
      ))}
    </div>
  </div>
);

export default Tab;
