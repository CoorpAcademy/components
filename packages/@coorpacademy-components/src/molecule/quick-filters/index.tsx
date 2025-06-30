import React from 'react';
import FaIcon from '../../atom/icon';
import style from './style.css';
import {QuickFiltersProps} from './types';

const QuickFilters = ({primaryOption, filterOptions}: QuickFiltersProps) => {
  const {defaultLabel, defaultIconName, defaultSelected, onDefaultClick} = primaryOption;
  return (
    <div className={style.filtersMainContainer}>
      <div data-name="all-content" className={style.onDefaultOption}>
        <FaIcon
          {...{
            iconName: defaultIconName,
            label: defaultLabel,
            selected: defaultSelected,
            onClick: onDefaultClick
          }}
        />
        <span>{defaultLabel}</span>
      </div>
      <div className={style.filterSeparator} />
      <div className={style.filtersContainer}>
        {filterOptions.map((filterOption, idx) => {
          const {iconName, label} = filterOption;
          return (
            <div key={idx} className={style.filterOption}>
              <FaIcon
                {...{
                  iconName
                }}
              />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickFilters;
