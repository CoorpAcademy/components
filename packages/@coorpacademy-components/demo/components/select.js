import React from 'react';
import toPairs from 'lodash/fp/toPairs';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import isArray from 'lodash/fp/isArray';
import flatten from 'lodash/fp/flatten';
import noop from 'lodash/fp/noop';

const buildOption = ({value, label, selected}, index) => (
  <option
    key={index}
    value={value}
    selected={selected}
  >
    {label}
  </option>
);

const buildGroups = pipe(
  toPairs,
  map(([label = '', options = []]) => (
    <optgroup
      key={label}
      label={label}
    >
      {options.map(buildOption)}
    </optgroup>
  )),
  flatten
);

const Select = ({options = [], onChange = noop}) => {
  const changeHandler = e => onChange(e.target.value);

  return (
    <select
      onChange={changeHandler}
    >
      {
        isArray(options) ?
          options.map(buildOption) :
          buildGroups(options)
      }
    </select>
  );
};

export default Select;
