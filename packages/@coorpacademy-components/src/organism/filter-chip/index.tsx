import React from 'react';
import {filter, map, pipe, size, toString} from 'lodash/fp';
import Chip from '../../atom/chip';
import Title from '../../atom/title';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import propTypes, {FilterChipProps} from './prop-types';
import style from './style.css';

const FilterChip = (props: FilterChipProps) => {
  const {options, title, onClear} = props;
  const selectedFiltersCount = pipe(filter({selected: true}), size)(options);
  const hasSelectedFilters = selectedFiltersCount > 0;

  return (
    <>
      <div className={style.header}>
        <div className={style.titleContainer}>
          <Title title={title} />
          {hasSelectedFilters ? (
            <Tag label={toString(selectedFiltersCount)} type="info" size="S" />
          ) : null}
        </div>
        {hasSelectedFilters ? (
          <div className={style.buttonContainer}>
            <ButtonLink
              customStyle={{fontWeight: 'normal', padding: 0}}
              label="Clear"
              type="text"
              data-name="filter-chip-clear-button"
              aria-label="filter chip clear button"
              onClick={onClear}
            />
          </div>
        ) : null}
      </div>
      <div className={style.optionsContainer}>
        {map(({icon, label, onClick, type, selected}) => {
          function handleClick() {
            onClick(type);
          }

          return (
            <Chip
              leftIcon={icon}
              text={label}
              key={label}
              selected={selected}
              onClick={handleClick}
            />
          );
        }, options)}
      </div>
    </>
  );
};

FilterChip.propTypes = propTypes;

export default FilterChip;
