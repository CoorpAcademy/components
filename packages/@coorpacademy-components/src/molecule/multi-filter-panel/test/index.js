import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import MultiFilterPanel from '..';
import {renderWithContext} from '../../../util/render-with-context';
import fixture from './fixtures/default';

browserEnv();

test('calls onClearAll when clicking the "Clear all" button', t => {
  t.plan(2);
  const props = {
    ...fixture.props,
    onClearAll: () => {
      t.pass();
    }
  };
  const context = {
    translate: key => {
      return key;
    }
  };
  const {container} = renderWithContext(<MultiFilterPanel {...props} />, context);

  const clearAllButton = container.querySelector('[data-name="filters-all-clear-button"]');
  t.truthy(clearAllButton);
  fireEvent.click(clearAllButton);
});

test('calls onRemoveSelectedFilter when clicking the "Videos" chip', t => {
  t.plan(2);
  const props = {
    ...fixture.props,
    onRemoveSelectedFilter: () => {
      t.pass();
    }
  };
  const context = {
    translate: key => {
      t.pass();
      return key;
    }
  };
  const {container} = renderWithContext(<MultiFilterPanel {...props} />, context);

  const videoChip = container.querySelector('[data-name="chip-Videos"]');
  t.truthy(videoChip);
  fireEvent.click(videoChip);
});
