import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {has, noop, omit} from 'lodash/fp';
import classnames from 'classnames';
import ModuleBubble from '../module-bubble';
import style from './style.css';

const Tab = ({index, selected, onClick = noop, level}) => {
  const handleClick = useMemo(() => () => onClick(index), [onClick, index]);
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
};

Tab.propTypes = {
  selected: PropTypes.number,
  index: PropTypes.number,
  onClick: PropTypes.func,
  level: PropTypes.shape(omit('onClick', ModuleBubble.propTypes))
};

const ScopeTabs = (props, context) => {
  const {onClick, selected = 0, levels = []} = props;

  return (
    <nav>
      <ul data-name="scopeTabs" className={style.tabs}>
        {levels.map((level, index) => (
          <Tab key={index} index={index} level={level} onClick={onClick} selected={selected} />
        ))}
      </ul>
    </nav>
  );
};

ScopeTabs.propTypes = {
  selected: PropTypes.number,
  onClick: PropTypes.func,
  levels: PropTypes.arrayOf(PropTypes.object)
};

export default ScopeTabs;
