import React, {useCallback, useRef, useEffect} from 'react';
import classNames from 'classnames';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import {QuickFiltersProps} from './types';

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
    const btn = rightBtnRef.current;
    const left = leftBtnRef.current;
    if (!list || !btn || !left) return;

    const update = () => {
      btn.style.visibility =
        list.scrollLeft + list.clientWidth < list.scrollWidth ? 'visible' : 'hidden';
      left.style.visibility = list.scrollLeft > 0 ? 'visible' : 'hidden';
      left.style.display = list.scrollLeft > 0 ? 'flex' : 'none';
    };

    list.addEventListener('scroll', update);
    update();
    return () => list.removeEventListener('scroll', update);
  }, [filterOptions]);
  return (
    <div className={style.filtersMainContainer}>
      <div
        className={style.leftArrowButton}
        data-name="scroll-left-button"
        ref={leftBtnRef}
        style={{visibility: 'hidden'}}
      >
        <ButtonLink
          icon={{position: 'left', faIcon: {name: 'arrow-left', size: 15}}}
          onClick={handleScrollLeft}
          customStyle={{height: '36px'}}
        />
      </div>
      <div className={style.filtersList} ref={filtersListRef} data-name="filters-options-list">
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
                data-name={`filter-${value}-${idx}`}
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
          <div
            className={style.rightArrowButton}
            data-name="scroll-right-button"
            ref={rightBtnRef}
            style={{visibility: 'hidden'}}
          >
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
            />
          </div>
        </div>
      </div>
      {filterButton ? (
        <div className={style.filterButton} data-name="open-filters-modal-button">
          <ButtonLink {...filterButton} />
        </div>
      ) : null}
    </div>
  );
};

export default QuickFilters;
