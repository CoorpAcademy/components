import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import style from './style.css';

const Tab = (props, context) => {
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
        {map(link => (
          <div
            key={link.title}
          >
            {link.title}
          </div>
        ), props.links)}
      </div>
    </div>
  );
};

Tab.contextTypes = {
  translate: PropTypes.func
};

Tab.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

export default Tab;
