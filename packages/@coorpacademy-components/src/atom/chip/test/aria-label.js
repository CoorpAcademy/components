import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import Chip from '..';

browserEnv();
test.afterEach.always(cleanup);

const mount = props => render(<Chip {...props} />, {wrapper: wrappingComponent});

test.serial('without ariaLabel the chip is named by its text, as before', t => {
  const view = mount({text: 'Camille Durand', onClick: () => {}});
  t.truthy(view.getByRole('button', {name: 'Camille Durand'}));
});

test.serial('ariaLabel names the chip', t => {
  const view = mount({
    text: 'Camille Durand',
    ariaLabel: 'Remove Camille Durand',
    onClick: () => {}
  });
  t.truthy(view.getByRole('button', {name: 'Remove Camille Durand'}));
});
