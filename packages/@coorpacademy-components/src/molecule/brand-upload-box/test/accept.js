import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import BrandUploadBox from '..';
import defaultFixture from './fixtures/default';

browserEnv();
test.afterEach.always(cleanup);

test('forwards accept to the native file input', t => {
  const {container} = render(<BrandUploadBox {...defaultFixture.props} accept=".xlsx,.csv" />, {
    wrapper: wrappingComponent
  });
  t.is(container.querySelector('input[type="file"]').accept, '.xlsx,.csv');
});

test('accepts any file when accept is absent', t => {
  const {container} = render(<BrandUploadBox {...defaultFixture.props} />, {
    wrapper: wrappingComponent
  });
  t.is(container.querySelector('input[type="file"]').accept, '');
});
