import React, {useCallback} from 'react';
import classNames from 'classnames';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import {QuickFiltersProps} from './types';

const SCROLL_RIGHT_SIZE = 120;
const SCROLL_LEFT_SIZE = -120;
const QuickFilters = ({primaryOption, filterOptions, filterButton}: QuickFiltersProps) => {
  const {defaultLabel, defaultIconName, defaultSelected, onDefaultClick} = primaryOption;
  const showNextFilter = filterOptions.length > 7;
  const filtersListRef = React.useRef<HTMLDivElement>(null);
  const handleScroll = useCallback((direction: number) => {
    if (filtersListRef.current) {
      filtersListRef.current.scrollBy({
        left: direction,
        behavior: 'smooth'
      });
    }
  }, []);
  const handleScrollRight = useCallback(() => {
    handleScroll(SCROLL_RIGHT_SIZE);
  }, [handleScroll]);
  const handleScrollLeft = useCallback(() => {
    handleScroll(SCROLL_LEFT_SIZE);
  }, [handleScroll]);
  return (
    <div className={style.filtersMainContainer}>
      <div className={style.rightArrowButton}>
        <ButtonLink
          icon={{position: 'left', faIcon: {name: 'arrow-left', size: 15}}}
          onClick={handleScrollLeft}
        />
      </div>
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
              size: {
                faSize: 23,
                wrapperSize: 23
              },
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
                icon={{
                  position: 'left',
                  faIcon: {
                    name: 'arrow-right',
                    size: 15
                  }
                }}
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
