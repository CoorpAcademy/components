import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithContext} from '../../../../util/render-with-context';
import DashboardPreview from '..';
import defaultFixture from './fixtures/selected';

browserEnv();

test('should call the onSelectDashboard function with the value of the target', t => {
  t.plan(2);

  const context = {
    translate: (key: string) => {
      return key;
    },
    skin: {}
  };

  const props = {
    ...defaultFixture.props,
    onSelectDashboard: () => {
      t.pass();
    }
  };
  const {container} = renderWithContext(<DashboardPreview {...props} />, {context});

  const selector = container.querySelector('a[data-name="analytics-content-link"]') as Element;
  t.truthy(selector);

  fireEvent.click(selector);
});

test('should not crash if the onChange function has not been specified', t => {
  t.plan(1);

  const context = {
    translate: (key: string) => {
      return key;
    },
    skin: {}
  };

  const props = {
    ...defaultFixture.props,
    onSelectDashboard: undefined
  };

  const {container} = renderWithContext(<DashboardPreview {...props} />, {context});
  const selector = container.querySelector('a[data-name="analytics-content-link"]') as Element;
  t.truthy(selector);

  fireEvent.click(selector);
});
