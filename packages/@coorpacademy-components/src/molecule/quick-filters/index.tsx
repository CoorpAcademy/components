import React, {useCallback, useRef, useEffect} from 'react';
import classNames from 'classnames';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import {QuickFiltersProps, propTypes} from './types';

const SCROLL_RIGHT_SIZE = 120;
const SCROLL_LEFT_SIZE = -120;
export const handleScroll = (direction: number, listRef: React.RefObject<HTMLDivElement>) => {
  if (listRef.current) {
    listRef.current.scrollBy({
      left: direction,
      behavior: 'smooth'
    });
  }
};
const QuickFilters = ({primaryOption, filterOptions, filterButton}: QuickFiltersProps) => {
  const {defaultLabel, defaultIconName, defaultSelected, onDefaultClick} = primaryOption;
  const filtersListRef = React.useRef<HTMLDivElement>(null);
  const rightBtnRef = useRef<HTMLDivElement>(null);
  const leftBtnRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = useCallback(() => {
    handleScroll(SCROLL_RIGHT_SIZE, filtersListRef);
  }, [filtersListRef]);
  const handleScrollLeft = useCallback(() => {
    handleScroll(SCROLL_LEFT_SIZE, filtersListRef);
  }, [filtersListRef]);
  useEffect(() => {
    const list = filtersListRef.current;
    const rightButton = rightBtnRef.current;
    const leftButton = leftBtnRef.current;
    /* istanbul ignore next */ // not testable without complex mocking useRef
    if (!list || !leftButton || !rightButton) return;

    const update = () => {
      rightButton.style.visibility =
        list.scrollLeft + list.clientWidth < list.scrollWidth ? 'visible' : 'hidden';
      leftButton.style.visibility = list.scrollLeft > 0 ? 'visible' : 'hidden';
      leftButton.style.display = list.scrollLeft > 0 ? 'flex' : 'none';
    };

    list.addEventListener('scroll', update);
    update();
    return () => list.removeEventListener('scroll', update);
  }, [filterOptions]);
  return (
    <div className={style.filtersMainContainer}>
      <div className={style.leftArrowButton} ref={leftBtnRef} style={{visibility: 'hidden'}}>
        <ButtonLink
          icon={{position: 'left', faIcon: {name: 'arrow-left', size: 15}}}
          onClick={handleScrollLeft}
          customStyle={{height: '36px'}}
          data-testid="scroll-left-button"
        />
      </div>
      <div className={style.filtersList} ref={filtersListRef} data-testid="filters-options-list">
        <div
          data-testid="all-option"
          className={classNames(style.defaultOption, defaultSelected && style.filterSelected)}
        >
          <FaIcon
            {...{
              iconName: defaultIconName,
              label: defaultLabel,
              selected: defaultSelected,
              onClick: onDefaultClick,
              size: {
                faSize: 20,
                wrapperSize: 20
              },
              iconColor: defaultSelected ? COLORS.cm_grey_700 : COLORS.cm_grey_500
            }}
          />
          <span className={style.filterLabel}>{defaultLabel}</span>
        </div>
        <div className={style.filterSeparator} />
        <div className={style.filtersContainer}>
          {filterOptions.map((filterOption, idx) => {
            const {iconName, label, selected, value} = filterOption;
            return (
              <div
                key={idx}
                className={classNames(style.filterOption, selected && style.filterSelected)}
                data-testid={`filter-${value}-${idx}`}
              >
                <FaIcon
                  {...{
                    iconName,
                    label,
                    iconColor: selected ? COLORS.cm_grey_700 : COLORS.cm_grey_500,
                    size: {
                      faSize: 20,
                      wrapperSize: 20
                    }
                  }}
                />
                <span>{label}</span>
              </div>
            );
          })}
          <div className={style.rightArrowButton} ref={rightBtnRef} style={{visibility: 'hidden'}}>
            <ButtonLink
              icon={{
                position: 'left',
                faIcon: {
                  name: 'arrow-right',
                  size: 15
                }
              }}
              onClick={handleScrollRight}
              customStyle={{height: '36px'}}
              data-testid="scroll-right-button"
            />
          </div>
        </div>
      </div>
      {filterButton ? (
        <div className={style.filterButton}>
          <ButtonLink {...filterButton} data-testid="open-filters-modal-button" />
        </div>
      ) : null}
    </div>
  );
};

QuickFilters.propTypes = propTypes;
export default QuickFilters;
