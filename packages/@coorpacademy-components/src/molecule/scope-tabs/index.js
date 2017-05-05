import React from 'react';
import PropTypes from 'prop-types';
import has from 'lodash/fp/has';
import getOr from 'lodash/fp/getOr';
import ModuleBubble from '../../molecule/module-bubble';
import style from './style.css';

const ScopeTabs = (props, context) => {
  const {skin} = context;

  const {onClick, selected = 0, levels} = props;
  const hideLabel = true;

  const primary = getOr('#00B0FF', ['common', 'primary'], skin);

  return (
    <ul className={style.tabs}>
      {levels &&
        levels.map((level, index) => {
          const handleClick = () => onClick(index);
          const isSelected = selected === index;
          const tabSkin = isSelected
            ? {
                background: primary,
                border: `1px solid ${primary}`
              }
            : {
                color: primary
              };

          const last = index === levels.length - 1;

          const arrow = isSelected && !last
            ? <span
                className={style.arrow}
                style={{
                  borderColor: `transparent transparent transparent ${primary}`
                }}
              />
            : null;

          const bubble = has('status', level)
            ? <div className={style.module}>
                <ModuleBubble hideLabel={hideLabel} module={level} onClick={handleClick} />
              </div>
            : null;

          return (
            <li
              key={index}
              onClick={handleClick}
              className={isSelected ? style.currentTab : style.defaultTab}
              style={tabSkin}
            >
              {bubble}
              <div className={style.name}>{level.name}</div>
              {arrow}
            </li>
          );
        })}
    </ul>
  );
};

ScopeTabs.contextTypes = {
  skin: PropTypes.object
};

ScopeTabs.propTypes = {
  selected: PropTypes.number,
  onClick: PropTypes.func,
  levels: PropTypes.arrayOf(PropTypes.object)
};

export default ScopeTabs;
