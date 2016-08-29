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

import {header} from './style.css';

export default (treant, options) => {
  const {h} = treant;
  const Select = createSelect(treant);

  return (props, children) => {
    const {
      onSelectComponent = noop,
      onSelectFixture = noop
    } = props;
    const pathname = get('state.route.pathname', props);

    const {
      folder,
      component,
      fixture
    } = extractFromPath(pathname);

    const componentSelected = get(`${folder}.${component}`, componentList);
    const factorySelected = get('factory', componentSelected);
    const fixtureSelected = get(`fixtures.${fixture}`, componentSelected);
    const componentOptions = pipe(
      toPairs,
      map(([folderName, folder]) => ([
        folderName,
        pipe(
          toPairs,
          map(([componentName, {factory}]) => ({
            value: `/${folderName}/${componentName}`,
            selected: factory === factorySelected,
            label: componentName
          }))
        )(folder)
      ])),
      fromPairs
    )(componentList);

    const fixtureOptions = pipe(
      get('fixtures'),
      toPairs,
      map(([name, fixture]) => ({
        value: `/${folder}/${component}/${name}`,
        selected: fixture === fixtureSelected,
        label: name
      }))
    )(componentSelected);

    return (
      <div>
        <div
          className={header}
        >
          <Select
            options={componentOptions}
            onChange={value => onSelectComponent(value)}
          />
          <Select
            options={fixtureOptions}
            onChange={value => onSelectFixture(value)}
          />
        </div>
        <div>
          {
            buildComponent(treant, options)(factorySelected, fixtureSelected)
          }
        </div>
      </div>
    );
  };
};

const buildComponent = (treant, options) => (factory, {props, children} = {}) => {
  const {h} = treant;
  const Component = factory(treant, options);
  return (
    <Component {...props}>
      {map(
        child => child(treant, options),
        children
      )}
    </Component>
  );
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
