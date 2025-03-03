import React from 'react';
import {map} from 'lodash/fp';
import Chip from '../../atom/chip';
import propTypes, {FilterChipProps} from './prop-types';
import style from './style.css';

const FilterChip = (props: FilterChipProps) => {
  const {options} = props;

  return (
    <div>
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
    </div>
  );
};

FilterChip.propTypes = propTypes;

export default FilterChip;
