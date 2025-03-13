import React from 'react';
import {map, size, pipe, filter, flatMap, toString} from 'lodash/fp';
import FilterChip from '../../organism/filter-chip';
import FilterCkeckboxAndSearch from '../../organism/filter-checkbox-and-search';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import propTypes, {MultiFilterPanelProps, FilterOptionsProps} from './prop-types';
import style from './style.css';

// @ts-expect-error convert is not recognized by the types
const uncappedMap = map.convert({cap: false});

const CLEAR_ALL_BUTTON_STYLE = {fontWeight: 'normal', padding: 0};
const FilterSeparator = <div className={style.filterSeparator} />;

const buildFilters = (filterOptions: FilterOptionsProps) => {
  const {type, options} = filterOptions;
  switch (type) {
    case 'chip':
      return <FilterChip {...options} />;
    case 'checkbox':
      return <FilterCkeckboxAndSearch {...options} />;
    default:
      return null;
  }
};

const MultiFilterPanel = (props: MultiFilterPanelProps) => {
  const {title, onClearAll, options} = props;
  const allSelectedFilters = pipe(
    map('options'),
    flatMap('options'),
    filter({selected: true}),
    size
  )(options);
  const hasSelectedFilters = allSelectedFilters > 0;

  const filters = uncappedMap((filterOptions: FilterOptionsProps, i: number) => {
    const isLastItem = i + 1 === size(options);

    return (
      <div key={i}>
        {buildFilters(filterOptions)}
        {isLastItem ? null : FilterSeparator}
      </div>
    );
  }, options);

  return (
    <>
      <div className={style.header}>
        <div className={style.titleContainer}>
          <Title title={title} type="form-group" titleSize="standard-light-weight" />
          {hasSelectedFilters ? (
            <Tag label={toString(allSelectedFilters)} type="info" size="S" />
          ) : null}
        </div>
        {hasSelectedFilters ? (
          <div className={style.buttonContainer}>
            <ButtonLink
              customStyle={CLEAR_ALL_BUTTON_STYLE}
              label="Clear all"
              type="text"
              data-name="filters-all-clear-button"
              aria-label="filters all clear button"
              onClick={onClearAll}
            />
          </div>
        ) : null}
      </div>

      {filters}
    </>
  );
};

MultiFilterPanel.propTypes = propTypes;

export default MultiFilterPanel;
