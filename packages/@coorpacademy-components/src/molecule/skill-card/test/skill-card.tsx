import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import SkillCard from '..';
import customSkillFixture from './fixtures/custom-skill';
import noAriaLabelsFixtures from './fixtures/no-aria-labels';

browserEnv();

test('onClick should be reachable, should match given aria-label', t => {
  t.plan(10);
  let buttonWasClicked = false;
  customSkillFixture.props = {
    ...customSkillFixture.props,
    onClick: () => {
      buttonWasClicked = true;
    }
  };
  const {container} = render(<SkillCard {...customSkillFixture.props} />);

  const cardWrapper = container.querySelector('[data-name="skill-card-wrapper"]') as Element;
  t.truthy(cardWrapper);
  t.is(cardWrapper.getAttribute('aria-label'), 'Skill Card');

  const skillTitle = cardWrapper.querySelector('[data-name="skill-title"]') as Element;
  t.truthy(skillTitle);
  t.is(skillTitle.getAttribute('aria-label'), 'Skill aria label');

  const questionsLabel = cardWrapper.querySelector(
    '[data-name="questions-to-revise-label"]'
  ) as Element;
  t.truthy(questionsLabel);
  t.is(questionsLabel.getAttribute('aria-label'), 'revise aria label');

  const buttonLink = cardWrapper.querySelector('[data-name="skill-card-button"]') as Element;
  t.truthy(buttonLink);
  t.is(buttonLink.getAttribute('aria-label'), 'This is a custom skill, Button aria label');
  fireEvent.click(buttonLink);
  t.true(buttonWasClicked);

  t.pass();
});

test('onHover should change button text color && backgroundColor', t => {
  t.plan(10);
  const {container} = render(<SkillCard {...customSkillFixture.props} />);

  const expectedStyleNoHover =
    'background-color: rgba(0, 176, 255, 0.07); color: rgb(0, 176, 255); transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;';

  const expectedStyleOnHover =
    'background-color: rgb(0, 176, 255); color: rgb(255, 255, 255); transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;';

  let cardWrapper = container.querySelector('[data-name="skill-card-wrapper"]') as Element;
  t.truthy(cardWrapper);

  let buttonWrapper = cardWrapper.querySelector('[data-name="button-wrapper"]') as Element;
  t.truthy(buttonWrapper);
  let buttonLink = buttonWrapper.querySelector('[data-name="skill-card-button"]') as Element;
  t.truthy(buttonLink);
  t.is(buttonLink.getAttribute('style'), expectedStyleNoHover);

  // hover
  fireEvent.mouseOver(buttonWrapper);

  cardWrapper = container.querySelector('[data-name="skill-card-wrapper"]') as Element;
  buttonWrapper = cardWrapper.querySelector('[data-name="button-wrapper"]') as Element;
  t.truthy(buttonWrapper);
  buttonLink = buttonWrapper.querySelector('[data-name="skill-card-button"]') as Element;
  t.truthy(buttonLink);

  t.is(buttonLink.getAttribute('style'), expectedStyleOnHover);

  // leave hover
  fireEvent.mouseLeave(buttonWrapper);

  buttonLink = container.querySelector('[data-name="skill-card-button"]') as Element;
  t.truthy(buttonLink);
  t.is(buttonLink.getAttribute('style'), expectedStyleNoHover);

  t.pass();
});

test('should use default aria-labels if aria-label props are not provided', t => {
  t.plan(8);
  const {container} = render(<SkillCard {...noAriaLabelsFixtures.props} />);

  const cardWrapper = container.querySelector('[data-name="skill-card-wrapper"]') as Element;
  t.truthy(cardWrapper);

  const skillTitle = cardWrapper.querySelector('[data-name="skill-title"]') as Element;
  t.truthy(skillTitle);
  t.is(skillTitle.getAttribute('aria-label'), 'Critical thinking and analysis');

  const questionsLabel = cardWrapper.querySelector(
    '[data-name="questions-to-revise-label"]'
  ) as Element;
  t.truthy(questionsLabel);
  t.is(questionsLabel.getAttribute('aria-label'), '75 questions to revise');

  const buttonLink = cardWrapper.querySelector('[data-name="skill-card-button"]') as Element;
  t.truthy(buttonLink);
  t.is(buttonLink.getAttribute('aria-label'), 'Critical thinking and analysis');

  t.pass();
});
