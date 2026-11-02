import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import ContentSelectionList from '..';
import empty from './fixtures/empty';
import assignment from './fixtures/assignment';

browserEnv();
test.afterEach.always(cleanup);

test.serial('an empty list shows its placeholder, not a « 0 items » select-all or Delete', t => {
  const view = render(<ContentSelectionList {...empty.props} />, {wrapper: wrappingComponent});
  t.truthy(view.getByText('No modules added yet'));
  t.truthy(view.getByText('Choose the modules learners should complete.'));
  t.is(view.queryByText('0 items'), null);
  t.is(view.container.querySelector('input[type="checkbox"]'), null);
  t.is(view.queryByRole('button', {name: 'Delete'}), null);
  t.is(view.getAllByRole('button', {name: 'Add content'}).length, 2);
});

test.serial('a filled list keeps its select-all and Delete', t => {
  const view = render(<ContentSelectionList {...assignment.props} />, {
    wrapper: wrappingComponent
  });
  t.truthy(view.getByText('2 items'));
  t.true(view.getAllByRole('button', {name: 'Delete'}).length > 0);
});
