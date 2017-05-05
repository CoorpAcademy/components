import get from 'lodash/fp/get';
import some from 'lodash/fp/some';
import identity from 'lodash/fp/identity';
import isEmpty from 'lodash/fp/isEmpty';
import flatMap from 'lodash/fp/flatMap';
import set from 'lodash/fp/set';
import negate from 'lodash/fp/negate';
import reduce from 'lodash/fp/reduce';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import pickBy from 'lodash/fp/pickBy';
import pipe from 'lodash/fp/pipe';
import values from 'lodash/fp/values';
import map from 'lodash/fp/map';
import mapValues from 'lodash/fp/mapValues';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import components from './list-components';
import fixtures from './list-fixtures';

const mapObject = mapValues.convert({cap: false});

const containsComponent = Component => vTree => {
  return some(vNode => {
    if (get('type', vNode) === Component) return true;
    return containsComponent(Component)(vNode);
  }, React.Children.toArray(get('props.children', vTree)));
};

const getChildren = Component => ({props, children}) => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(React.createElement(Component, props, children), {translate: identity});
  const vTree = shallowRenderer.getRenderOutput();
  return pipe(
    mapObject((folder, folderName) =>
      pipe(
        mapObject((componentPath, componentName) => {
          const ComponentToTest = require(componentPath).default; // eslint-disable-line import/no-dynamic-require
          return containsComponent(ComponentToTest)(vTree);
        }),
        pickBy(value => value)
      )(folder)
    ),
    pickBy(negate(isEmpty))
  )(components);
};

export default pipe(
  mapObject((folder, folderName) =>
    mapObject((componentPath, componentName) => {
      const Component = require(componentPath).default; // eslint-disable-line import/no-dynamic-require
      const componentFixtures = pipe(
        get([folderName, componentName]),
        values,
        map(pipe(require, get('default')))
      )(fixtures);

      return {
        children: reduce(
          (acc, fixture) => {
            return defaultsDeep(getChildren(Component)(fixture), acc);
          },
          {},
          componentFixtures
        )
      };
    }, folder)
  ),
  dependencies => {
    return pipe(
      flatMap.convert({cap: false})((folder, folderName) =>
        flatMap.convert({cap: false})(({children} = {}, componentName) => {
          return mapObject(
            mapObject(() => set(['parents', folderName, componentName], true, {})),
            children
          );
        }, folder)
      ),
      reduce(defaultsDeep, dependencies)
    )(dependencies);
  }
)(components);
