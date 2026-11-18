import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import ContentSelectionList from '..';
import empty from './fixtures/empty';

browserEnv();
test.afterEach.always(cleanup);

test.serial('content lists keep their required marker by default', t => {
  const view = render(<ContentSelectionList {...empty.props} />, {wrapper: wrappingComponent});
  t.truthy(view.getByText('*'));
});

test.serial('optional content lists omit the required marker', t => {
  const view = render(<ContentSelectionList {...empty.props} required={false} />, {
    wrapper: wrappingComponent
  });
  t.is(view.queryByText('*'), null);
});
