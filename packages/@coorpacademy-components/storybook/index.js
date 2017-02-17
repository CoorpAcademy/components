import {relative} from 'path';
import React from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import keys from 'lodash/fp/keys';
import forEach from 'lodash/fp/forEach';
import toPairs from 'lodash/fp/toPairs';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Provider from '../src/atom/provider';

import {components, fixtures} from './components';

pipe(
  toPairs,
  map(([folderName, _folder]) => ([
    folderName,
    pipe(
      toPairs,
      map(([componentName, factory]) => {
        const _fixtures = get([folderName, componentName], fixtures);
        const stories = storiesOf(`${folderName}.${componentName}`, module);
        pipe(
          toPairs,
          map(([fixtureName, fixture]) => {
            stories.add(fixtureName, () => React.createElement(factory, fixture.props));
          })
        )(_fixtures);
      })
    )(_folder)
  ]))
)(components);
