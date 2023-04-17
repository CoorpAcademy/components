import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {once, set} from 'lodash/fp';
import {fireEvent} from '@testing-library/react';
import BrandCreateForm from '..';
import {renderWithContext} from '../../../util/render-with-context';
import fixture from './fixtures/modified';

browserEnv();

test('should submit form', t => {
  const context = {
    translate: (key: string) => {
      t.pass();
      return key;
    }
  };

  t.plan(3);
  const props = set(
    'onSubmit',
    once(() => t.pass()),
    fixture.props
  );
  const {container} = renderWithContext(<BrandCreateForm {...props} />, {context});
  const button = container.querySelector('[data-name="brand_create_submit_button"]') as Element;
  t.truthy(button);
  fireEvent.submit(button as Element);
});
