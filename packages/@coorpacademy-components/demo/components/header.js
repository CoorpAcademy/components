import React from 'react';
import fromPairs from 'lodash/fp/fromPairs';
import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import noop from 'lodash/fp/noop';
import pipe from 'lodash/fp/pipe';
import toPairs from 'lodash/fp/toPairs';
import Route from 'path-match';
import Select from './select';
import {header} from './style.css';

const route = Route();

const getFirstKey = pipe(keys, head);

const extractFromPath = (pathname, componentMap, fixturesMap) => {
  const params = route('/:folder/:component/:fixture')(pathname) ||
    route('/:folder/:component')(pathname) || route('/:folder')(pathname) || {};

  let {
    folder,
    component,
    fixture
  } = params;

  const folders = fixturesMap;
  if (!folder)
    folder = getFirstKey(folders);

  const components = get(folder, folders);
  if (!component)
    component = getFirstKey(components);

  const fixtures = get(`${component}`, components);
  if (!fixture)
    fixture = getFirstKey(fixtures);

  return {
    folder,
    component,
    fixture
  };
};

const Header = ({children, ...props}) => {
  const {
    onSelectComponent = noop,
    onSelectFixture = noop,
    components,
    fixtures,
    location: {pathname = ''} = {}
  } = props;

  const {
    folder,
    component,
    fixture
  } = extractFromPath(pathname, components, fixtures);

  const ComponentSelected = get([folder, component], components);
  const fixtureSelected = get([folder, component, fixture], fixtures);

  const componentOptions = pipe(
    toPairs,
    map(([folderName, _folder]) => ([
      folderName,
      pipe(
        toPairs,
        map(([componentName, factory]) => ({
          value: `/${folderName}/${componentName}`,
          selected: factory === ComponentSelected,
          label: componentName
        }))
      )(_folder)
    ])),
    fromPairs
  )(components);

  const fixtureOptions = pipe(
    get([folder, component]),
    toPairs,
    map(([_name, _fixture]) => ({
      value: `/${folder}/${component}/${_name}`,
      selected: _fixture === fixtureSelected,
      label: _name
    }))
  )(fixtures);

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
        <ComponentSelected {...fixtureSelected.props}>
          {fixtureSelected.children}
        </ComponentSelected>
      </div>
    </div>
  );
};

export default Header;
