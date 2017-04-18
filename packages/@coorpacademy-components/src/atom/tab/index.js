import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import style from './style.css';

const Tab = (props, context) => {
  const { translate } = context;
  const handleTabClick = () => props.onClick(props.targetContent);

  return (
    <div
      className={style.tab}
      onClick={handleTabClick}
    >
      <div className={style.title}>
        {translate(props.title)}
      </div>
      <div className={style.link}>
        {map(link => (
          <div
            className={style.linkTitle}
            key={link.title}
          >
            {translate(link.title)}
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
  links: PropTypes.array
};

export default Tab;
