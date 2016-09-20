import toPairs from 'lodash/fp/toPairs';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import isArray from 'lodash/fp/isArray';
import noop from 'lodash/fp/noop';

export default ({h}, options) => {
  const buildOptions = map(({value, label, selected}) => (
    <option
      value={value}
      selected={selected}
    >
      {label}
    </option>
  ));

  const buildGroups = pipe(
    toPairs,
    map(([label = '', options = []]) => (
      <optgroup
        label={label}
      >
        {buildOptions(options)}
      </optgroup>
    ))
  );

  return ({options = [], onChange = noop}, children) => (
    <select
      onChange={e => onChange(e.target.value)}
    >
      {
        isArray(options) ?
          buildOptions(options) :
          buildGroups(options)
      }
    </select>
  );
};
