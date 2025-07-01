import React, {useCallback} from 'react';
import classNames from 'classnames';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import {QuickFiltersProps} from './types';

const QuickFilters = ({primaryOption, filterOptions, filterButton}: QuickFiltersProps) => {
  const {defaultLabel, defaultIconName, defaultSelected, onDefaultClick} = primaryOption;
  const showNextFilter = filterOptions.length > 7;
  const filtersListRef = React.useRef<HTMLDivElement>(null);
  const handleScrollRight = useCallback(() => {
    if (filtersListRef.current) {
      filtersListRef.current.scrollBy({
        left: 120,
        behavior: 'smooth'
      });
    }
  }, []);
  return (
    <div className={style.filtersMainContainer}>
      {/* <div>
        <ButtonLink icon={{position: 'left', faIcon: {name: 'arrow-left'}}} />
      </div> */}
      <div className={style.filtersList} ref={filtersListRef}>
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
          {showNextFilter ? (
            <div className={style.rightArrowButton}>
              <ButtonLink
                icon={{position: 'left', faIcon: {name: 'arrow-right'}}}
                onClick={handleScrollRight}
              />
            </div>
          ) : null}
        </div>
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
