import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import {defaultsDeep} from 'lodash/fp';
import {renderWithContext} from '../../../util/render-with-context';
import MoocHeader from '..';
import defaultFixture from './fixtures/default';

browserEnv();

test('should focus when in searchBar input', t => {
  t.plan(2);
  const {container} = renderWithContext(<MoocHeader {...defaultFixture.props} />);
  const searchInput = container.querySelector('[data-name="search-input"]') as HTMLInputElement;
  t.truthy(searchInput);
  searchInput.focus();
  t.is(document.activeElement, searchInput);
});

test('should submit when a submit value exists in the searchBar input', t => {
  t.plan(2);

  const {container} = renderWithContext(<MoocHeader {...defaultFixture.props} />);
  const searchForm = container.querySelector('[data-name="searchForm"]');
  t.truthy(searchForm);
  fireEvent.submit(searchForm as Element);
  t.pass();
});

test('should launch onResetSearch handler when reset is triggered', t => {
  t.plan(3);
  const props = defaultsDeep(defaultFixture.props, {
    onResetSearch: () => t.pass()
  });
  const {container} = renderWithContext(<MoocHeader {...props} />);
  const searchFormReset = container.querySelector('[data-name="search-form-reset"]');
  t.truthy(searchFormReset);
  fireEvent.click(searchFormReset as Element);
  t.pass();
});

test('Launch onMenuOpen & onMenuClose handlers', t => {
  t.plan(5);

  const props = defaultsDeep(defaultFixture.props, {
    onMenuOpen: () => t.pass(),
    onMenuClose: () => t.pass()
  });
  const {container} = renderWithContext(<MoocHeader {...props} />);

  const navMobileOpen = container.querySelector('[data-name="nav-mobile-open"]');
  t.truthy(navMobileOpen);
  fireEvent.click(navMobileOpen as Element);

  const navMobileClose = container.querySelector('[data-name="nav-mobile-close"]');
  t.truthy(navMobileClose);
  fireEvent.click(navMobileClose as Element);

  t.pass();
});

test('Pass if onMenuOpen & onMenuClose are not provided', t => {
  t.plan(3);
  const {container} = renderWithContext(<MoocHeader {...defaultFixture.props} />);

  const navMobileOpen = container.querySelector('[data-name="nav-mobile-open"]');
  t.truthy(navMobileOpen);
  fireEvent.click(navMobileOpen as Element);

  const navMobileClose = container.querySelector('[data-name="nav-mobile-close"]');
  t.truthy(navMobileClose);
  fireEvent.click(navMobileClose as Element);
  t.pass();
});

test('render should return null if no props are provided', t => {
  t.is(new MoocHeader({}).render(), null);
  t.is(new MoocHeader().render(), null);
  t.pass();
});
