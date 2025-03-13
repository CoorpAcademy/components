import React, {useCallback, useState} from 'react';
import {filter, pipe, size, toString} from 'lodash/fp';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import SearchForm from '../../molecule/search-form';

import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import {COLORS} from '../../variables/colors';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
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
  fontWeight: 'normal',
  fontSize: '14px',
  border: 'none',
  fontFamily: 'Gilroy'
};

const INITIAL_VISIBLE_OPTIONS = 5;

const FilterCkeckboxAndSearch = (
  props: FilterCheckboxAndSearchProps,
  context: WebContextValues
) => {
  const {title, placeholder, withSearch, onClear, options} = props;
  const translate = GetTranslateFromContext(context);
  const [searchValue, setSearchValue] = useState('');
  const onSearchChange = useCallback(value => {
    setSearchValue(value);
  }, []);
  const [showMore, setShowMore] = useState(false);
  const selectedFiltersCount = pipe(filter({selected: true}), size)(options);
  const hasSelectedFilters = selectedFiltersCount > 0;
  const handleShowMore = useCallback(() => {
    setShowMore(!showMore);
  }, [showMore]);
  const visibleOptions = showMore ? options : options.slice(0, INITIAL_VISIBLE_OPTIONS);
  return (
    <div data-testid="filter-checkbox-search-container">
      <div className={style.header} data-testid="filter-checkbox-search-header">
        <div className={style.titleAndTagWrapper} data-testid="title-and-tag-wrapper">
          <Title title={title} />
          {hasSelectedFilters ? (
            <Tag label={toString(selectedFiltersCount)} type="info" size="S" />
          ) : null}
        </div>
        {hasSelectedFilters ? (
          <div className={style.clearButtonContainer}>
            <ButtonLink
              label={'Clear'}
              type="text"
              data-testid="clear-button-link"
              onClick={onClear}
              customStyle={CLEAR_BUTTON_STYLE}
            />
          </div>
        ) : null}
      </div>
      {withSearch ? (
        <div className={style.search} data-testid="filter-checkbox-search-container">
          <SearchForm
            search={{
              placeholder,
              value: searchValue,
              onChange: onSearchChange
            }}
          />
        </div>
      ) : null}
      <div data-testid="filter-checkbox-options-container" className={style.optionsContainer}>
        {visibleOptions.map(({label, value, selected, count, onClick}) => {
          const [customIcon, customColor] = selected
            ? ['check', COLORS.white]
            : ['square', COLORS.white];
          return (
            <div key={value} className={style.optionRow}>
              <CheckboxWithTitle
                title={label}
                name={value}
                checked={selected}
                icon={{s
                  iconName: customIcon,
                  iconColor: customColor,
                  preset: 's'
                }}
                onChange={onClick}
                customStyle={CHECKBOX_TITLE_STYLE}
              />
              <p className={style.optionCount}>{count}</p>
            </div>
          );
        })}
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
            data-testid="show-more-button"
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
