import React, {PropTypes} from 'react';
import style from './style.css';

const ScopeTabs = props => {
  const {onClick, selected = 0, levels = []} = props;

  return (
    <ul className={style.tabs}>
      {levels.map((level, index) => (
        <li
          key={index}
          onClick={() => onClick(index)}
          className={selected === index ? style.currentTab : style.tab}
        >
          {level}
        </li>
      ))}
    </ul>
  );
};

ScopeTabs.propTypes = {
  selected: PropTypes.number,
  onClick: PropTypes.func,
  levels: PropTypes.arrayOf(PropTypes.string)
};

export default ScopeTabs;
