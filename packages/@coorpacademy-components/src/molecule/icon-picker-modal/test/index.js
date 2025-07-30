import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import delay from 'delay';
import IconPickerModal from '..';
import {filterIcons} from '../use-icon-search';
import {renderWithContext} from '../../../util/render-with-context';

browserEnv();

test('should call onClose when close button is clicked', t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(1);

  const props = {
    isOpen: true,
    onClose: () => t.pass()
  };
  const {container} = renderWithContext(<IconPickerModal {...props} />, context);
  const closeButton = container.querySelector("[data-testid='close-icon']");
  fireEvent.click(closeButton);
});

test('should call onClick when icon is clicked', t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(1);

  const props = {
    isOpen: true,
    onClick: () => t.pass(),
    onClose: () => {}
  };

  const {container} = renderWithContext(<IconPickerModal {...props} />, context);

  const icon = container.querySelector('[data-testid="button-icon-1"]');
  fireEvent.click(icon);
});

test('IconPickerModal should load more icons on scroll', async t => {
  const ICONS_PER_LOAD = 48;

  const props = {
    isOpen: true,
    onClose: () => {}
  };

  const {container} = renderWithContext(<IconPickerModal {...props} />, {
    translate: key => key
  });

  const modal = container.querySelector('[data-testid="modal-body"]');
  Object.defineProperty(modal, 'scrollTop', {value: 400, writable: true});
  Object.defineProperty(modal, 'clientHeight', {value: 600, writable: true});
  Object.defineProperty(modal, 'scrollHeight', {value: 1000, writable: true});
  fireEvent.scroll(modal);
  await new Promise(resolve => {
    setTimeout(resolve, 300);
  });

  const icons = container.querySelectorAll('[data-testid^="button-icon-"]');
  t.is(icons.length, ICONS_PER_LOAD * 2);
});

test('should update search results on search input change', async t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(3);

  const props = {
    isOpen: true,
    onClose: () => {}
  };

  const {container, rerender} = renderWithContext(<IconPickerModal {...props} />, context);

  const searchInput = container.querySelector('[data-name="search-input"]');
  t.truthy(searchInput);
  fireEvent.input(searchInput, {target: {value: 'banana'}});
  await delay(500);
  t.is(searchInput.value, 'banana');
  await delay(500);
  rerender(<IconPickerModal {...props} />);
  await delay(500);
  const icons = container.querySelectorAll('[data-testid^="button-icon-"]');
  t.is(icons.length, 1);
});

test('should reset search results when reset button is clicked', async t => {
  const context = {
    translate: key => {
      return key;
    }
  };
  t.plan(4);

  const props = {
    isOpen: true,
    onClose: () => {}
  };

  const {container, rerender} = renderWithContext(<IconPickerModal {...props} />, context);

  const searchInput = container.querySelector('[data-name="search-input"]');
  t.truthy(searchInput);
  fireEvent.input(searchInput, {target: {value: 'banana'}});
  await delay(500);
  t.is(searchInput.value, 'banana');
  await delay(500);
  rerender(<IconPickerModal {...props} />);
  await delay(500);

  const searchFormReset = container.querySelector('[data-name="search-form-reset"]');
  t.truthy(searchFormReset);
  fireEvent.mouseDown(searchFormReset);

  await delay(500);
  rerender(<IconPickerModal {...props} />);

  const icons = container.querySelectorAll('[data-testid^="button-icon-"]');
  t.is(icons.length, 48);
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
