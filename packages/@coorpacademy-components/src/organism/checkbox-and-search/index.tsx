import React, {useCallback, useState} from 'react';
import {filter, pipe, size, toString} from 'lodash/fp';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import SearchForm from '../../molecule/search-form';
import CmCheckboxWithText from '../../molecule/cm-checkbox-with-text';
import style from './style.css';
import propTypes, {FilterCheckboxAndSearchProps} from './props-types';

const buttonStyle = {fontWeight: 'normal', position: 'absolute', right: 0};

const FilterCkeckboxAndSearch = (props: FilterCheckboxAndSearchProps) => {
  const {title, placeholder, withSearch, onClearFilters, options} = props;
  const [searchValue, setSearchValue] = useState('');
  const onSearchChange = useCallback(value => {
    setSearchValue(value);
  }, []);
  const selectedFiltersCount = pipe(filter({selected: true}), size)(options);
  const hasSelectedFilters = selectedFiltersCount > 0;
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
              customStyle={buttonStyle}
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
        {options.map(option => (
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
    </div>
  );
};
FilterCkeckboxAndSearch.propTypes = propTypes;

export default FilterCkeckboxAndSearch;
