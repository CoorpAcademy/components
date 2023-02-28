import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SkillCard from '..';
import customSkillFixture from './fixtures/custom-skill';
import noAriaLabelsFixtures from './fixtures/no-aria-labels';

browserEnv();
configure({adapter: new Adapter()});

test('onClick should be reachable, should match given aria-label', t => {
  let buttonWasClicked = false;
  customSkillFixture.props = {
    ...customSkillFixture.props,
    onClick: () => {
      buttonWasClicked = true;
    }
  };
  const wrapper = mount(<SkillCard {...customSkillFixture.props} />);

  const cardWrapper = wrapper.find('[data-name="skill-card-wrapper"]');
  t.true(cardWrapper.at(0).exists());
  t.is(cardWrapper.at(0).props()['aria-label'], 'Skill Card');

  const skillTitle = cardWrapper.find('[data-name="skill-title"]');
  t.true(skillTitle.at(0).exists());
  t.is(skillTitle.at(0).props()['aria-label'], 'Skill aria label');

  const questionsLabel = cardWrapper.find('[data-name="questions-to-revise-label"]');
  t.true(questionsLabel.at(0).exists());
  t.is(questionsLabel.at(0).props()['aria-label'], 'revise aria label');

  const buttonLink = cardWrapper.find('[data-name="skill-card-button"]');
  t.true(buttonLink.at(0).exists());
  t.is(buttonLink.at(0).props()['aria-label'], 'This is a custom skill, Button aria label');
  buttonLink.at(0).simulate('click', {});
  t.true(buttonWasClicked);

  t.pass();
});

test('onHover should change button text color && backgroundColor', t => {
  const wrapper = mount(<SkillCard {...customSkillFixture.props} />);

  const expectedStyleNoHover = {
    backgroundColor: 'rgba(0, 176, 255, 0.07)',
    color: '#00B0FF',
    transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
  };

  const expectedStyleOnHover = {
    backgroundColor: '#00B0FF',
    color: '#FFFFFF',
    transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
  };

  let cardWrapper = wrapper.find('[data-name="skill-card-wrapper"]');
  t.true(cardWrapper.at(0).exists());

  let buttonWrapper = cardWrapper.find('[data-name="button-wrapper"]');
  t.true(buttonWrapper.at(0).exists());
  let buttonLink = buttonWrapper.find('[data-name="skill-card-button"] button');
  t.true(buttonLink.at(0).exists());
  t.deepEqual(buttonLink.at(0).props().style, expectedStyleNoHover);

  // hover
  buttonWrapper.simulate('mouseover');

  wrapper.update();
  cardWrapper = wrapper.find('[data-name="skill-card-wrapper"]');
  buttonWrapper = cardWrapper.find('[data-name="button-wrapper"]');
  t.true(buttonWrapper.at(0).exists());
  buttonLink = buttonWrapper.find('[data-name="skill-card-button"] button');
  t.true(buttonLink.at(0).exists());

  t.deepEqual(buttonLink.at(0).props().style, expectedStyleOnHover);

  // leave hover
  buttonWrapper.simulate('mouseleave');

  wrapper.update();

  buttonLink = wrapper.find('[data-name="skill-card-button"] button');
  t.true(buttonLink.at(0).exists());
  t.deepEqual(buttonLink.at(0).props().style, expectedStyleNoHover);

  t.pass();
});

test('should use default aria-labels if aria-label props are not provided', t => {
  const wrapper = mount(<SkillCard {...noAriaLabelsFixtures.props} />);

  const cardWrapper = wrapper.find('[data-name="skill-card-wrapper"]');
  t.true(cardWrapper.at(0).exists());

  const skillTitle = cardWrapper.find('[data-name="skill-title"]');
  t.true(skillTitle.at(0).exists());
  t.is(skillTitle.at(0).props()['aria-label'], 'Critical thinking and analysis');

  const questionsLabel = cardWrapper.find('[data-name="questions-to-revise-label"]');
  t.true(questionsLabel.at(0).exists());
  t.is(questionsLabel.at(0).props()['aria-label'], '75 questions to revise');

  const buttonLink = cardWrapper.find('[data-name="skill-card-button"] button');
  t.true(buttonLink.at(0).exists());
  t.is(buttonLink.at(0).props()['aria-label'], 'Critical thinking and analysis');

  t.pass();
});
