import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import IconPickerModal, {filterIcons} from '..';
import {renderWithContext} from '../../../util/render-with-context';

browserEnv();

test('should call onCancel when cancel button is clicked', t => {
  const context = {
    translate: (key: string) => {
      return key;
    }
  };
  t.plan(1);

  const props = {
    isOpen: true,
    onCancel: () => t.pass(),
    onConfirm: () => {},
    onClose: () => {}
  };
  const {container} = renderWithContext(<IconPickerModal {...props} />, context);
  const cancelButton = container.querySelector("[aria-label='__cancel']");
  fireEvent.click(cancelButton);
});

test('should call onConfirm with selected icon when confirm button is clicked', t => {
  const context = {
    translate: (key: string) => {
      return key;
    }
  };
  t.plan(1);

  const props = {
    isOpen: true,
    onCancel: () => {},
    onConfirm: () => t.pass(),
    onClose: () => {}
  };

  const {container} = renderWithContext(<IconPickerModal {...props} />, context);

  const icon = container.querySelector('[data-testid="button-icon-1"]');
  fireEvent.click(icon);

  const confirmButton = container.querySelector("[aria-label='__confirm']");
  fireEvent.click(confirmButton);
});

test('filterIcons should filter icons based on query', t => {
  const allIcons = ['apple', 'banana', 'cherry'];
  const results = filterIcons('ban', allIcons);
  t.deepEqual(results, ['banana']);
});

test('filterIcons should return all icons when query is empty', t => {
  const allIcons = ['apple', 'banana', 'cherry'];
  const results = filterIcons('', allIcons);
  t.deepEqual(results, allIcons);
});
