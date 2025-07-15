import React, {useCallback, useRef, useEffect} from 'react';
import classNames from 'classnames';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import {ButtonLinkProps} from '../../atom/button-link/types';
import style from './style.css';
import {QuickFiltersProps, propTypes} from './types';

const SCROLL_RIGHT_SIZE = 380;
const SCROLL_LEFT_SIZE = -380;
export const handleScroll = (direction: number, listRef: React.RefObject<HTMLDivElement>) => {
  if (listRef.current) {
    listRef.current.scrollBy({
      left: direction,
      behavior: 'smooth'
    });
  }
};

const getFilterButton = (filterButtonProps: ButtonLinkProps | undefined) => {
  if (!filterButtonProps) return null;
  const {tag} = filterButtonProps;
  return (
    <div className={tag ? style.filterButtonWrapper : ''}>
      <div className={style.filterButton}>
        <ButtonLink
          {...filterButtonProps}
          icon={{
            position: 'left',
            faIcon: {
              name: 'sliders',
              size: 14,
              color: tag ? COLORS.cm_grey_700 : COLORS.neutral_500
            }
          }}
          data-testid="open-filters-modal-button"
          customStyle={{borderRadius: '12px'}}
        />
      </div>
    </div>
  );
};

const QuickFilters = ({
  primaryOption,
  filterOptions,
  filterButton,
  nextFilterAriaLabel,
  previousFilterAriaLabel,
  filterOptionsAriaLabel
}: QuickFiltersProps) => {
  const {defaultLabel, defaultIconName, defaultSelected, defaultAriaLabel, onDefaultClick} =
    primaryOption;
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
      const rightArrowWidth = rightButton.offsetWidth;
      rightButton.style.visibility =
        list.scrollLeft + list.clientWidth < list.scrollWidth - rightArrowWidth
          ? 'visible'
          : 'hidden';
      leftButton.style.visibility = list.scrollLeft > 0 ? 'visible' : 'hidden';
      leftButton.style.display = list.scrollLeft > 0 ? 'flex' : 'none';
    };

    list.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    update();
    return () => {
      list.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [filterOptions]);

  return (
    <div className={style.filtersMainContainer}>
      <div className={style.leftArrowButton} ref={leftBtnRef} style={{visibility: 'hidden'}}>
        <ButtonLink
          icon={{position: 'left', faIcon: {name: 'arrow-left', size: 15}}}
          onClick={handleScrollLeft}
          customStyle={{height: '36px'}}
          data-testid="scroll-left-button"
          aria-label={previousFilterAriaLabel}
        />
      </div>
      <div
        className={style.filtersList}
        ref={filtersListRef}
        data-testid="filters-options-list"
        aria-label={filterOptionsAriaLabel}
      >
        <div
          data-testid="all-option"
          className={classNames(style.defaultOption, defaultSelected && style.filterSelected)}
          onClick={onDefaultClick}
        >
          <FaIcon
            iconName={defaultIconName}
            size={{faSize: 20, wrapperSize: 20}}
            iconColor={defaultSelected ? COLORS.cm_grey_700 : COLORS.neutral_500}
            aria-label={defaultAriaLabel}
          />
          <span className={style.filterLabel}>{defaultLabel}</span>
        </div>
        <div className={style.filterSeparator} />
        <div className={style.filtersContainer}>
          {filterOptions.map((filterOption, idx) => {
            const {iconName, label, selected, value, onClick, ariaLabel} = filterOption;
            return (
              <div
                key={idx}
                className={classNames(style.filterOption, selected && style.filterSelected)}
                data-testid={`filter-${value}-${idx}`}
                onClick={onClick}
              >
                <FaIcon
                  iconName={iconName}
                  iconColor={selected ? COLORS.cm_grey_700 : COLORS.neutral_500}
                  size={{faSize: 20, wrapperSize: 20}}
                  aria-label={ariaLabel}
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
              aria-label={nextFilterAriaLabel}
            />
          </div>
        </div>
      </div>
      {getFilterButton(filterButton)}
    </div>
  );
};

QuickFilters.propTypes = propTypes;
export default QuickFilters;
