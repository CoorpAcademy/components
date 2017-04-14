import React, {PropTypes} from 'react';
import style from './style.css';

const Tab = props => {
  const handleTabClick = () => props.onClick(props.targetContent);
  return (
    <div
      className={style.tab}
      onClick={handleTabClick}
    >
      <div className={style.title}>
        {props.title}
      </div>
      <div className={style.link}>
        {props.links.map(link => (
          <div
            className={style.linkTitle}
            key={link.title}
          >
            {link.title}
          </div>
        ))}
      </div>
    </div>
  );
};

Tab.PropTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
  targetContent: PropTypes.string,
  onClick: PropTypes.func
};

export default Tab;
