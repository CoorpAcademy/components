import React from 'react';
import PropTypes from 'prop-types';
import {has} from 'lodash/fp';
import classnames from 'classnames';
import ModuleBubble from '../module-bubble';
import style from './style.css';

const ScopeTabs = (props, context) => {
  const {onClick, selected = 0, levels} = props;

  return (
    <ul data-name="scopeTabs" className={style.tabs}>
      {levels &&
        levels.map((level, index) => {
          const handleClick = () => onClick(index);
          const isSelected = selected === index;
          const bubble = has('status', level) ? (
            <div className={style.module}>
              <ModuleBubble {...level} onClick={handleClick} />
            </div>
          ) : null;

          return (
            <li
              data-name="scopeTab"
              data-index={index}
              key={index}
              onClick={handleClick}
              className={classnames(style.defaultTab, isSelected ? style.currentTab : null)}
            >
              {bubble}
              <div className={style.name}>{level.name}</div>
            </li>
          );
        })}
    </ul>
  );
};

ScopeTabs.propTypes = {
  selected: PropTypes.number,
  onClick: PropTypes.func,
  levels: PropTypes.arrayOf(PropTypes.object)
};

export default ScopeTabs;
