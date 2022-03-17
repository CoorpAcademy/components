import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewHeader from '..';
import defaultFixture from './fixtures/all-questions-ok';

browserEnv();
configure({adapter: new Adapter()});

test('onQuitClick (close button onClick) should be reachable, should match given aria-label', t => {
  let closeButtonWasClicked = false;
  defaultFixture.props = {
    ...defaultFixture.props,
    onQuitClick: () => {
      closeButtonWasClicked = true;
    }
  };
  const wrapper = mount(<ReviewHeader {...defaultFixture.props} />);
  const headerWrapper = wrapper.find('[data-name="review-header"]');
  t.true(headerWrapper.at(0).exists());
  t.is(headerWrapper.at(0).props()['aria-label'], 'aria-header-wrapper');
  const modeTitle = headerWrapper.find('[data-name="review-header-mode"]');
  t.true(modeTitle.at(0).exists());
  t.is(modeTitle.at(0).props()['aria-label'], 'Revision mode');
  const skillName = headerWrapper.find('[data-name="review-header-skill-name"]');
  t.true(skillName.at(0).exists());
  t.is(skillName.at(0).props()['aria-label'], 'Agility');
  const closeButtonWrapper = headerWrapper.find('[data-name="review-header-close-button-wrapper"]');
  t.true(closeButtonWrapper.at(0).exists());
  const closeButton = headerWrapper.find('[data-name="review-header-close-button"]');
  t.true(closeButton.at(0).exists());
  t.is(closeButton.at(0).props()['aria-label'], 'aria-close-button');
  closeButton.at(0).simulate('click', {});
  t.true(closeButtonWasClicked);
  t.pass();
});
