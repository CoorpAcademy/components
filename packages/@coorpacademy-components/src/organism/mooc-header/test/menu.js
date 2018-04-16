import identity from 'lodash/fp/identity';
import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchForm from '../../../molecule/search-form';
import MoocHeader from '..';
import loggedFixture from './fixtures/logged';

browserEnv();
configure({adapter: new Adapter()});

const context = {
  translate: identity,
  skin: {
    common: {
      primary: '#FF7043'
    }
  }
};

test('should open and close settings menu on toggle click', t => {
  const wrapper = mount(<MoocHeader {...loggedFixture.props} />, {context});
  const instance = wrapper.instance();

  t.false(instance.state.isSettingsOpen);

  instance.handleSettingsToggle();
  t.true(instance.state.isSettingsOpen);

  instance.handleSettingsToggle();
  t.false(instance.state.isSettingsOpen);

  instance.handleSettingsToggle();
  t.true(instance.state.isSettingsOpen);

  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('click', false, true);
  document.dispatchEvent(evt);
  t.false(instance.state.isSettingsOpen);

  wrapper.unmount();
});

test('should prevent closing settings menu if click occur inside menu', t => {
  const wrapper = shallow(<MoocHeader {...loggedFixture.props} />, {context});
  const instance = wrapper.instance();

  t.false(instance.state.isSettingsOpen);

  instance._checkOnClose({});
  t.false(instance.state.isSettingsOpen);

  instance.handleSettingsToggle();
  instance.menuSettings = {
    contains: () => true
  };
  instance._checkOnClose({});
  t.true(instance.state.isSettingsOpen);
});

test('should open and close menu on logo click', t => {
  const MENU_TOGGLE = '[data-name="logo-mobile"]';
  const wrapper = shallow(<MoocHeader {...loggedFixture.props} />, {context});
  const instance = wrapper.instance();

  t.false(instance.state.isMenuOpen);

  wrapper.find(MENU_TOGGLE).simulate('click');
  t.true(instance.state.isMenuOpen);

  wrapper.find(MENU_TOGGLE).simulate('click');
  t.false(instance.state.isMenuOpen);
});

test('should close menu when user click on link', t => {
  const wrapper = shallow(<MoocHeader {...loggedFixture.props} />, {context});
  const instance = wrapper.instance();

  t.false(instance.state.isMenuOpen);

  instance.handleMenuToggle();
  t.true(instance.state.isMenuOpen);

  instance.handleLinkClick();
  t.false(instance.state.isMenuOpen);
});

const PAGES = '[data-name^="page-"]';
test('should hide pages on search bar focus', t => {
  const wrapper = shallow(<MoocHeader {...loggedFixture.props} />, {context});
  const instance = wrapper.instance();
  const searchForm = wrapper.find(SearchForm);

  t.false(instance.state.isFocus);
  t.true(wrapper.find(PAGES).length > 0);

  searchForm.simulate('searchFocus');
  t.true(instance.state.isFocus);
  t.is(wrapper.find(PAGES).length, 0);

  searchForm.simulate('searchBlur');
  t.false(instance.state.isFocus);
  t.true(wrapper.find(PAGES).length > 0);
});
