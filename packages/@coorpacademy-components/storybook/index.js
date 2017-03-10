import {relative} from 'path';
import React from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import keys from 'lodash/fp/keys';
import forEach from 'lodash/fp/forEach';
import toPairs from 'lodash/fp/toPairs';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {createBrowserHistory} from '@coorpacademy/history';
import createTranslate from '@coorpacademy/translate';
import Provider from '../src/atom/provider';
import en from '../locales/en/global';
import fr from '../locales/fr/global';
import skin from './assets/skin';

import {components, fixtures} from './components';

const locales = {en, fr};
const translate = createTranslate(locales.fr);
const history = createBrowserHistory();

const options = {
  history,
  skin,
  translate
};

// eslint-disable-next-line lodash-fp/no-unused-result
pipe(
  toPairs,
  map(([folderName, _folder]) => ([
    folderName,
    pipe(
      toPairs,
      map(([componentName, factory]) => {
        const _fixtures = get([folderName, componentName], fixtures);
        const stories = storiesOf(`${folderName}.${componentName}`, module);
        // eslint-disable-next-line lodash-fp/no-unused-result
        pipe(
          toPairs,
          map(([fixtureName, fixture]) => {
            stories.add(fixtureName, () => React.createElement(
              Provider,
              options,
              React.createElement(
                factory,
                fixture.props
              )
            ));
          })
        )(_fixtures);
      })
    )(_folder)
  ]))
)(components);
