import React from 'react';
import {map, size, pipe, filter, flatMap, toString} from 'lodash/fp';
import FilterChip from '../../organism/filter-chip';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import propTypes, {MultiFilterPanelProps, MultiFilterPanelOptionsProps} from './prop-types';
import style from './style.css';

// @ts-expect-error convert is not recognized by the types
const uncappedMap = map.convert({cap: false});

const FilterSeparator = <div className={style.filterSeparator} />;

const buildFilters = (filterOptions: MultiFilterPanelOptionsProps) => {
  const {type, ...options} = filterOptions;
  switch (type) {
    case 'chip':
      return <FilterChip {...options.options} />;
    // case 'checkbox':
    //   // return <FilterCheckbox />;
    //   return null;

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

  const filters = uncappedMap(
    (filterOptions: MultiFilterPanelOptionsProps, i: number) => (
      <div key={i}>
        {buildFilters(filterOptions)}
        {i + 1 < size(options) ? FilterSeparator : null}
      </div>
    ),
    options
  );

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
              customStyle={{fontWeight: 'normal'}}
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
