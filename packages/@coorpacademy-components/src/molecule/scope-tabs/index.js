import React, {PropTypes} from 'react';
import set from 'lodash/fp/set';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import identity from 'lodash/fp/identity';
import ModuleBubble from '../../molecule/module-bubble';
import style from './style.css';

const ScopeTabs = props => {
  const {
    onClick,
    selected = 0,
    levels
  } = props;
  const hideLabel = true;

  return (
    <ul className={style.tabs}>
      {levels.map((level, index) => {
        const handleClick = () => onClick(index);
        return (
          <li
            key={index}
            onClick={handleClick}
            className={selected === index ? style.currentTab : style.tab}
          >
            <div className={style.module}>
              <ModuleBubble
                hideLabel
                module={level}
                onClick={onClick}
              />
            </div>
            <div className={style.name}>{level.name}</div>
          </li>
        );
      })}
    </ul>
  );
};

ScopeTabs.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.func
};

ScopeTabs.propTypes = {
  selected: PropTypes.number,
  onClick: PropTypes.func,
  levels: PropTypes.arrayOf(PropTypes.object)
};

export default ScopeTabs;
