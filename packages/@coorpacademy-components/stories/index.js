import {relative} from 'path';
import React from 'react';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import toPairs from 'lodash/fp/toPairs';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Provider from '../src/atom/provider';

// import {components, fixtures} from './components';

import Button from './Button';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
