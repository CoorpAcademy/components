import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {identity, defaultsDeep} from 'lodash/fp';
import MoocHeader from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});

test('should focus when in searchBar input', t => {
  const translate = identity;

  const wrapper = mount(<MoocHeader {...defaultFixture.props} />, {
    context: {translate}
  });
  const searchInput = wrapper.find('[data-name="search-input"]');
  t.assert(searchInput.exists());
  searchInput.simulate('focus', {});
  t.pass();
});

test('should submit when a submit value exists in the searchBar input', t => {
  const translate = identity;

  const wrapper = mount(<MoocHeader {...defaultFixture.props} />, {
    context: {translate}
  });

  const searchForm = wrapper.find('[data-name="searchForm"]');
  t.assert(searchForm.exists());
  searchForm.simulate('submit', {});
  t.pass();
});

test('should launch onResetSearch handler when reset is triggered', t => {
  t.plan(3);
  const translate = identity;

  const props = defaultsDeep(defaultFixture.props, {
    onResetSearch: () => t.pass()
  });

  const wrapper = mount(<MoocHeader {...props} />, {
    context: {translate}
  });

  const searchFormReset = wrapper.find('[data-name="search-form-reset"]');
  t.assert(searchFormReset.exists());
  searchFormReset.simulate('click', {});
  t.pass();
});

test('Launch onMenuOpen & onMenuClose handlers', t => {
  t.plan(6);
  const translate = identity;

  const props = defaultsDeep(defaultFixture.props, {
    onMenuOpen: () => t.pass(),
    onMenuClose: () => t.pass()
  });
  const wrapper = mount(<MoocHeader {...props} />, {
    context: {translate}
  });

  const navMobileOpen = wrapper.find('[data-name="nav-mobile-open"]');
  t.assert(navMobileOpen.exists());
  navMobileOpen.simulate('click', {});

  const navMobileClose = wrapper.find('[data-name="nav-mobile-close"]');
  t.assert(navMobileClose.exists());
  navMobileClose.simulate('click', {});

  t.pass();
});

test('Pass if onMenuOpen & onMenuClose are not provided', t => {
  const translate = identity;

  const wrapper = mount(<MoocHeader {...defaultFixture.props} />, {
    context: {translate}
  });

  const navMobileOpen = wrapper.find('[data-name="nav-mobile-open"]');
  t.assert(navMobileOpen.exists());
  navMobileOpen.simulate('click', {});
  const navMobileClose = wrapper.find('[data-name="nav-mobile-close"]');
  t.assert(navMobileClose.exists());
  navMobileClose.simulate('click', {});

  t.pass();
});

test('render should return null if no props are provided', t => {
  t.is(new MoocHeader({}).render(), null);
  t.is(new MoocHeader().render(), null);
  t.pass();
});
