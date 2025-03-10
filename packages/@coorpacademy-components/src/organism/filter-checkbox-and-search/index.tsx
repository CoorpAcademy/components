import React, {useCallback, useState} from 'react';
import {filter, pipe, size, toString} from 'lodash/fp';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import SearchForm from '../../molecule/search-form';
import CmCheckboxWithText from '../../molecule/cm-checkbox-with-text';
import style from './style.css';
import propTypes, {FilterCheckboxAndSearchProps} from './props-types';

const clearButtonStyle = {fontWeight: 'normal', position: 'absolute', right: 0};
const showButtonStyle = {
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'Gilroy',
  marginTop: '16px'
};
const INITIAL_VISIBLE_OPTIONS = 5;

const FilterCkeckboxAndSearch = (props: FilterCheckboxAndSearchProps) => {
  const {title, placeholder, withSearch, onClearFilters, options} = props;
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
    <div className={style.container} data-testid="filter-checkbox-and-search-container">
      <div className={style.header} data-testid="header">
        <div className={style.titleAndTagWrapper} data-testid="title-and-tag-wrapper">
          <Title title={title} />
          {hasSelectedFilters ? (
            <Tag label={toString(selectedFiltersCount)} type="info" size="S" />
          ) : null}
        </div>
        {hasSelectedFilters ? (
          <div className={style.clearButtonContainer}>
            <ButtonLink
              label="Clear"
              type="text"
              data-testid="clear-button-link"
              onClick={onClearFilters}
              customStyle={clearButtonStyle}
            />
          </div>
        ) : null}
      </div>
      {withSearch ? (
        <div className={style.search} data-testid="search-container">
          <SearchForm
            search={{
              placeholder,
              value: searchValue,
              onChange: onSearchChange
            }}
          />
        </div>
      ) : null}
      <div data-testid="options-container" className={style.optionsContainer}>
        {visibleOptions.map(option => (
          <div key={option.value} className={style.optionRow}>
            <CmCheckboxWithText
              {...option}
              key={option.value}
              title={option.label}
              onChange={onSearchChange}
              name={option.label}
              checked={option.selected}
            />
            <p className={style.optionCount}>{option.count}</p>
          </div>
        ))}
      </div>
      {options.length > INITIAL_VISIBLE_OPTIONS ? (
        <div>
          <ButtonLink
            label={showMore ? 'Show less' : 'Show more'}
            type="text"
            icon={
              showMore
                ? {position: 'right', type: 'chevron-up'}
                : {position: 'right', type: 'chevron-down'}
            }
            customStyle={showButtonStyle}
            onClick={handleShowMore}
          />
        </div>
      ) : null}
    </div>
  );
};
FilterCkeckboxAndSearch.propTypes = propTypes;

export default FilterCkeckboxAndSearch;
