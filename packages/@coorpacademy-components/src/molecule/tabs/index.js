import React from 'react';
import {convert} from 'css-color-function';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Provider from '../../atom/provider';
import {COLORS} from '../../variables/colors';
import Tag from '../../atom/tag';
import style from './style.css';

const handleTabClick = tab => e => {
  if (tab && typeof tab.onClick === 'function') tab.onClick(e);
};
const handleTabKeyDown = tab => e => {
  if (e.key === 'Enter') handleTabClick(tab)(e);
};
const Tabs = (props, context) => {
  const {items = []} = props;
  const {skin} = context;
  const primaryColor = getOr('#00B0FF', 'common.primary', skin);

  const createTab = (index, tab) => {
    return (
      <div
        key={index}
        className={style.tab}
        role="tab"
        tabIndex={0}
        aria-selected={tab.isActive}
        aria-label={tab['aria-label'] || tab.title}
        onClick={handleTabClick(tab)}
        onKeyDown={handleTabKeyDown(tab)}
        style={{
          '--hover-bg': convert(
            `color(${tab.isActive ? primaryColor : COLORS.cm_grey_500} a(0.15))`
          ),
          '--bg': tab.isActive ? convert(`color(${primaryColor} a(0.07))`) : 'transparent',
          color: tab.isActive ? primaryColor : COLORS.cm_grey_500
        }}
      >
        <span>{tab.title}</span>
        {typeof tab.count === 'number' ? (
          <Tag
            label={tab.count.toString()}
            type="default"
            size="S"
            customStyle={{
              backgroundColor: tab.isActive
                ? convert(`color(${primaryColor} a(0.25))`)
                : COLORS.cm_grey_200,
              color: tab.isActive ? primaryColor : COLORS.cm_grey_500
            }}
          />
        ) : null}
      </div>
    );
  };

  return (
    <div className={style.tabs} role="tablist">
      {items &&
        items.map((tab, index) => {
          return createTab(index, tab);
        })}
    </div>
  );
};

Tabs.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
      'aria-label': PropTypes.string,
      onClick: PropTypes.func,
      isActive: PropTypes.bool
    })
  )
};

export default Tabs;
