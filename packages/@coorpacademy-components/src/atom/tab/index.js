import React from 'react';
import style from './style.css';

const Tab = props => {
  const handleTabClick = () => props.onTabClick(props.targetContent);
  return (
    <div
      className={style.tab}
      onClick={handleTabClick}
    >
      <div className={style.tabTitle}>
        {props.title}
      </div>
      <div className={style.tabLink}>
        {props.links.map(link => (
          <div
            className={style.tabLinkTitle}
            key={link.title}
          >
            {link.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
