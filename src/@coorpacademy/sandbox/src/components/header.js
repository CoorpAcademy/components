import fromPairs from 'lodash/fp/fromPairs';
import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import noop from 'lodash/fp/noop';
import pipe from 'lodash/fp/pipe';
import toPairs from 'lodash/fp/toPairs';
import Route from 'path-match';

import createSelect from './select';

import componentList from '../components';

const route = Route();

import {border} from './style.css';

export default (treant, options) => {
  const {h} = treant;
  const Select = createSelect(treant);

  return (props, children) => {
    const {
      onSelectComponent = noop
    } = props;
    const pathname = get('location.pathname', props);

    const {
      folder,
      component,
      fixture
    } = extractFromPath(pathname);

    const componentSelected = get(`${folder}.${component}.factory`, componentList);
    const fixtureSelected = get(`${folder}.${component}.fixtures.${fixture}`, componentList);

    const options = pipe(
      toPairs,
      map(([folderName, folder]) => ([
        folderName,
        pipe(
          toPairs,
          map(([componentName, {factory}]) => ({
            value: `/${folderName}/${componentName}`,
            selected: factory === componentSelected,
            label: componentName
          }))
        )(folder)
      ])),
      fromPairs
    )(componentList);

    return (
      <div
        className={border}
      >
        <Select
          options={options}
          onChange={value => onSelectComponent(value)}
        />
      </div>
    );
  };
};

const getFirstKey = pipe(keys, head);

const extractFromPath = pathname => {
  const params = route('/:folder/:component/:fixture')(pathname) ||
    route('/:folder/:component')(pathname) || route('/:folder')(pathname) || {};

  let {
    folder,
    component,
    fixture
  } = params;

  const folders = componentList;
  if (!folder)
    folder = getFirstKey(folders);

  const components = get(folder, folders);
  if (!component)
    component = getFirstKey(components);

  const fixtures = get(`${component}.fixtures`, components);
  if (!fixture)
    fixture = getFirstKey(fixtures);

  return {
    folder,
    component,
    fixture
  };
};
