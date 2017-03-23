import React from 'react';
import toPairs from 'lodash/fp/toPairs';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import isArray from 'lodash/fp/isArray';
import flatten from 'lodash/fp/flatten';
import noop from 'lodash/fp/noop';

const buildOption = ({value, label}, index) => (
  <option
    key={index}
    value={value}
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

  const selected = get('value', find({selected: true}, options));

  return (
    <select
      onChange={changeHandler}
      value={selected}
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
