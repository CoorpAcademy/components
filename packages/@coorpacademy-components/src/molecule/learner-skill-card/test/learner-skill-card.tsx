import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mockTranslate} from '@coorpacademy/translate';
import {renderWithContext} from '../../../util/render-with-context';
import LearnerSkillCard from '..';
import noAriaLabelsFixtures from './fixtures/no-aria-labels';

browserEnv();

const context = {
  translate: mockTranslate
};

test('should use default aria-labels if aria-label props are not provided', t => {
  t.plan(8);
  const {container} = renderWithContext(
    <LearnerSkillCard {...noAriaLabelsFixtures.props} />,
    context
  );

  const cardWrapper = container.querySelector(
    '[data-name="learner-skill-card-wrapper"]'
  ) as Element;
  t.truthy(cardWrapper);

  const skillTitle = cardWrapper.querySelector('[data-name="skill-title"]') as Element;
  t.truthy(skillTitle);
  t.is(skillTitle.getAttribute('aria-label'), 'Critical thinking and analysis');

  const reviewButtonLink = cardWrapper.querySelector(
    '[data-name="learner-skill-card-review-button"]'
  ) as Element;
  t.truthy(reviewButtonLink);
  t.is(reviewButtonLink.getAttribute('aria-label'), 'Critical thinking and analysis');

  const exploreButtonLink = cardWrapper.querySelector(
    '[data-name="learner-skill-card-explore-button"]'
  ) as Element;
  t.truthy(exploreButtonLink);
  t.is(exploreButtonLink.getAttribute('aria-label'), 'Critical thinking and analysis');

  t.pass();
});
