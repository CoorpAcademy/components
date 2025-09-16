import React, {useCallback, useMemo, useState} from 'react';
import {filter, getOr, isEmpty, pipe, size, toString} from 'lodash/fp';
import {convert} from 'css-color-function';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import {COLORS} from '../../variables/colors';
import Search from '../../atom/input-search';
import style from './style.css';
import propTypes, {FilterCheckboxAndSearchProps} from './props-types';

const CLEAR_BUTTON_STYLE = {fontWeight: 'normal', padding: 0};
const SHOW_BUTTON_STYLE = {
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'Gilroy',
  padding: '0'
};
const CHECKBOX_TITLE_STYLE = {
  marginRight: '16px',
  fontSize: '14px',
  fontFamily: 'Gilroy',
  fontWeight: 'normal'
};
const INITIAL_VISIBLE_OPTIONS = 5;

const FilterCheckboxAndSearch = (
  props: FilterCheckboxAndSearchProps,
  context: WebContextValues
) => {
  const {skin} = context;
  const primaryColor = getOr(COLORS.cm_primary_blue, 'common.primary', skin);
  const {id, title, titleAriaLabel, searchOptions, onClear, options, emptySearchResult} = props;
  const translate = GetTranslateFromContext(context);
  const [showMore, setShowMore] = useState(false);
  const selectedFiltersCount = pipe(filter({selected: true}), size)(options);
  const hasSelectedFilters = selectedFiltersCount > 0;

  const handleShowMore = useCallback(() => {
    setShowMore(!showMore);
  }, [showMore]);

  const visibleOptions = useMemo(() => {
    return showMore ? options : options.slice(0, INITIAL_VISIBLE_OPTIONS);
  }, [options, showMore]);

  return (
    <div
      data-name={id}
      data-testid="filter-checkbox-and-search-container"
      className={style.container}
    >
      <div className={style.header} data-testid="filter-checkbox-and-search-header">
        <div
          className={style.titleAndTagWrapper}
          data-testid="filter-checkbox-and-searh-title-and-tag-wrapper"
        >
          <Title title={title} ariaLabel={titleAriaLabel} />
          {hasSelectedFilters ? (
            <Tag
              label={toString(selectedFiltersCount)}
              type="info"
              size="S"
              customStyle={{
                color: primaryColor,
                backgroundColor: convert(`color(${primaryColor} lightness(92%))`)
              }}
            />
          ) : null}
        </div>
        {hasSelectedFilters ? (
          <div className={style.clearButtonContainer}>
            <ButtonLink
              label={translate('clear')}
              type="text"
              data-testid="filter-checkbox-and-search-clear-button"
              onClick={onClear}
              customStyle={CLEAR_BUTTON_STYLE}
              hoverColor={COLORS.cm_grey_700}
            />
          </div>
        ) : null}
      </div>
      {searchOptions ? (
        <div className={style.search}>
          <Search {...searchOptions} />
        </div>
      ) : null}
      <div
        data-testid="filter-checkbox-and-search-options-container"
        className={style.optionsContainer}
      >
        {isEmpty(visibleOptions) ? (
          <p
            className={style.emptySearchResult}
            data-testid="filter-checkbox-and-search-empty-message"
          >
            {emptySearchResult}
          </p>
        ) : (
          visibleOptions.map(({value, label, selected, count, onClick}, index) => (
            <div
              key={value}
              className={style.optionRow}
              data-testid={`filter-checkbox-and-search-option-row-${index}`}
            >
              <CheckboxWithTitle
                key={value}
                value={value}
                title={label}
                onChange={onClick}
                name={label}
                checked={selected}
                customStyle={CHECKBOX_TITLE_STYLE}
              />
              <p data-name={'counter'} className={style.optionCount}>
                {count}
              </p>
            </div>
          ))
        )}
      </div>
      {size(options) > INITIAL_VISIBLE_OPTIONS ? (
        <ButtonLink
          data-name={'show-more-button'}
          label={showMore ? translate('Show less') : translate('Show more')}
          type="text"
          icon={{
            position: 'right',
            faIcon: {
              name: showMore ? 'chevron-up' : 'chevron-down',
              size: 16,
              color: COLORS.cm_grey_500
            }
          }}
          customStyle={SHOW_BUTTON_STYLE}
          onClick={handleShowMore}
          data-testid="filter-checkbox-and-search-show-button"
        />
      ) : null}
    </div>
  );
};

FilterCheckboxAndSearch.propTypes = propTypes;

FilterCheckboxAndSearch.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

export default FilterCheckboxAndSearch;
