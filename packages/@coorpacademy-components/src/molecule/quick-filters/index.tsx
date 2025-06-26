import React from 'react';
import FaIcon from '../../atom/icon';
import style from './style.css';
import {QuickFiltersProps} from './types';

const QuickFilters = ({filterOptions}: QuickFiltersProps) => {
  // eslint-disable-next-line no-console
  console.log('QuickFilters component rendered with options:', filterOptions);
  return (
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
  );
};

export default QuickFilters;
