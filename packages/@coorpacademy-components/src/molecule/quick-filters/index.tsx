import React from 'react';
import classNames from 'classnames';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import {QuickFiltersProps} from './types';

const QuickFilters = ({primaryOption, filterOptions, filterButton}: QuickFiltersProps) => {
  const {defaultLabel, defaultIconName, defaultSelected, onDefaultClick} = primaryOption;
  return (
    <div className={style.filtersMainContainer}>
      <div
        data-name="all-content"
        className={classNames(style.defaultOption, defaultSelected && style.filterSelected)}
      >
        <FaIcon
          {...{
            iconName: defaultIconName,
            label: defaultLabel,
            selected: defaultSelected,
            onClick: onDefaultClick,
            iconColor: defaultSelected ? COLORS.cm_grey_700 : COLORS.cm_grey_500
          }}
        />
        <span className={style.filterLabel}>{defaultLabel}</span>
      </div>
      <div className={style.filterSeparator} />
      <div className={style.filtersContainer}>
        {filterOptions.map((filterOption, idx) => {
          const {iconName, label, selected} = filterOption;
          return (
            <div
              key={idx}
              className={classNames(style.filterOption, selected && style.filterSelected)}
            >
              <FaIcon
                {...{
                  iconName,
                  label,
                  iconColor: selected ? COLORS.cm_grey_700 : COLORS.cm_grey_500
                }}
              />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
      {filterButton ? (
        <div className={style.filterButton}>
          <ButtonLink {...filterButton} />
        </div>
      ) : null}
    </div>
  );
};

export default QuickFilters;
