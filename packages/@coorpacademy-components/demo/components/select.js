import Inferno from 'inferno';
import toPairs from 'lodash/fp/toPairs';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import isArray from 'lodash/fp/isArray';
import flatten from 'lodash/fp/flatten';
import noop from 'lodash/fp/noop';

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
    // <optgroup
    //   label={label}
    // >
    //   {buildOptions(options)}
    // </optgroup>
    buildOptions(options)
  )),
  flatten
);

export default ({options = [], onChange = noop}, children) => (
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
