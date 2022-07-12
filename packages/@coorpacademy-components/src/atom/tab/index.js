import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import style from './style.css';

const Tab = ({onClick, links, title, targetContent}) => {
  const handleTabClick = useMemo(() => () => onClick(targetContent), [onClick, targetContent]);

  return (
    <div data-name="tab" className={style.tab} onClick={handleTabClick}>
      <div className={style.title}>{title}</div>
      <div className={style.link}>
        {map(
          link => (
            <div key={link.title}>{link.title}</div>
          ),
          links
        )}
      </div>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
  targetContent: PropTypes.string
};

export default Tab;
