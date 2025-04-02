import React, {useCallback, useMemo, useState} from 'react';
import {filter, isEmpty, pipe, size, toString} from 'lodash/fp';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import SearchForm from '../../molecule/search-form';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import propTypes, {FilterCheckboxAndSearchProps} from './props-types';

const CLEAR_BUTTON_STYLE = {fontWeight: 'normal', padding: 0};
const SHOW_BUTTON_STYLE = {
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'Gilroy',
  marginTop: '16px'
};
const CHECKBOX_TITLE_STYLE = {
  marginRight: '16px',
  fontSize: '14px',
  fontFamily: 'Gilroy',
  fontWeight: 'normal'
};
const INITIAL_VISIBLE_OPTIONS = 5;

const FilterCkeckboxAndSearch = (
  props: FilterCheckboxAndSearchProps,
  context: WebContextValues
) => {
  const {title, searchOptions, onClear, options = []} = props;
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
    <div data-testid="filter-checkbox-and-search-container" className={style.container}>
      <div className={style.header} data-testid="filter-checkbox-and-search-header">
        <div
          className={style.titleAndTagWrapper}
          data-testid="filter-checkbox-and-searh-title-and-tag-wrapper"
        >
          <Title title={title} />
          {hasSelectedFilters ? (
            <Tag label={toString(selectedFiltersCount)} type="info" size="S" />
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
            />
          </div>
        ) : null}
      </div>
      {searchOptions ? (
        <div className={style.search}>
          <SearchForm {...searchOptions} />
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
            No results... Try adjusting your search.
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
                title={label}
                onChange={onClick}
                name={label}
                checked={selected}
                customStyle={CHECKBOX_TITLE_STYLE}
              />
              <p className={style.optionCount}>{count}</p>
            </div>
          ))
        )}
      </div>
      {options.length > INITIAL_VISIBLE_OPTIONS ? (
        <div>
          <ButtonLink
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
        </div>
      ) : null}
    </div>
  );
};

FilterCkeckboxAndSearch.propTypes = propTypes;

FilterCkeckboxAndSearch.contextTypes = {
  translate: Provider.childContextTypes.translate
};

export default FilterCkeckboxAndSearch;
