import React, {useCallback, useRef, useEffect} from 'react';
import classNames from 'classnames';
import {get} from 'lodash/fp';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import {ButtonLinkProps} from '../../atom/button-link/types';
import {WebContextValues} from '../../atom/provider/web-context';
import Provider, {GetSkinFromContext} from '../../atom/provider';
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

const getFilterButton = (
  filterButtonProps: ButtonLinkProps | undefined,
  primarySkinColor: string
) => {
  if (!filterButtonProps) return null;
  const {tag, ...rest} = filterButtonProps;
  return (
    <div
      className={style.filterButtonWrapper}
      style={{borderColor: tag?.label ? primarySkinColor : 'transparent'}}
    >
      <div className={style.filterButton}>
        <ButtonLink
          {...rest}
          icon={{
            position: 'left',
            faIcon: {
              name: 'sliders',
              size: 14,
              color: tag ? COLORS.cm_grey_700 : COLORS.neutral_500
            }
          }}
          tag={
            tag
              ? {
                  label: tag.label,
                  customStyle: {backgroundColor: primarySkinColor, color: '#FFFFFF'}
                }
              : undefined
          }
          className={style.filterButton}
          data-testid="open-filters-modal-button"
          customStyle={{borderRadius: '12px'}}
        />
      </div>
    </div>
  );
};

const QuickFilters = (
  {
    primaryOption,
    filterOptions,
    filterButton,
    nextFilterAriaLabel,
    previousFilterAriaLabel,
    filterOptionsAriaLabel
  }: QuickFiltersProps,
  context: WebContextValues
) => {
  const skin = GetSkinFromContext(context);
  const primarySkinColor = get('common.primary', skin);
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
    <div className={style.filtersMainContainer} data-name="search">
      <div className={style.leftArrowButton} ref={leftBtnRef} style={{visibility: 'hidden'}}>
        <ButtonLink
          icon={{position: 'left', faIcon: {name: 'arrow-left', size: 15}}}
          onClick={handleScrollLeft}
          className={style.leftArrowButton}
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
            aria-label={defaultAriaLabel}
          />
          <span className={style.filterLabel}>{defaultLabel}</span>
          <div className={style.bar} style={{background: primarySkinColor}} />
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
                style={{borderBottomColor: primarySkinColor}}
                onClick={onClick}
              >
                <FaIcon
                  iconName={iconName}
                  size={{faSize: 20, wrapperSize: 20}}
                  aria-label={ariaLabel}
                />
                <span>{label}</span>
                <div className={style.bar} style={{background: primarySkinColor}} />
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
              className={style.rightArrowButton}
              onClick={handleScrollRight}
              customStyle={{height: '36px'}}
              data-testid="scroll-right-button"
              aria-label={nextFilterAriaLabel}
            />
          </div>
        </div>
      </div>
      {getFilterButton(filterButton, primarySkinColor)}
    </div>
  );
};

QuickFilters.propTypes = propTypes;
QuickFilters.contextTypes = {
  skin: Provider.childContextTypes.skin
};
export default QuickFilters;
