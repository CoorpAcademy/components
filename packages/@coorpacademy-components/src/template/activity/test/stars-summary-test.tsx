import test from 'ava';
import browserEnv from 'browser-env';
import {mockTranslate} from '@coorpacademy/translate';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import StarsSummary from '../stars-summary';
import {renderWithContext} from '../../../util/render-with-context';
import fixtures from './fixtures/all-engines';

browserEnv();

const context = {
  skin: {
    common: {
      primary: '#FF7043',
      light: '#FF7043',
      dark: '#FF7043'
    }
  },
  translate: mockTranslate
};

test('on component mount, it should initialize state with 10 engines, should find the navigation tools', t => {
  t.plan(5);
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const {container} = renderWithContext(<StarsSummary {...props} />, {context});

  const indexOnZero = container.querySelector('[data-testid="stars-summary-engine-index-0"]');
  t.truthy(indexOnZero);
  const engineTabs = container.querySelectorAll('[data-testid="stars-summary-engine-tabs"] li');
  t.is(engineTabs.length, 10);

  const activeLearnerStars = container.querySelector('[data-name="learner_total_active"]');
  t.truthy(activeLearnerStars);

  const leftNavigation = container.querySelector('[data-name="left-arrow"]');
  t.falsy(leftNavigation);
  const rightNavigation = container.querySelector('[data-name="right-arrow"]');
  t.truthy(rightNavigation);
});

test('when mount component and after click on handleRight, it should update state with correct value and hide first engine and show left navigation button', t => {
  t.plan(9);
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const {container} = renderWithContext(<StarsSummary {...props} />, {context});

  const rightArrowView = container.querySelector(
    '[data-testid="stars-summary-right-arrow"]'
  ) as Element;
  t.truthy(rightArrowView);
  fireEvent.click(rightArrowView);

  const indexOnOne = container.querySelector('[data-testid="stars-summary-engine-index-1"]');
  t.truthy(indexOnOne);
  const engineTabs = container.querySelectorAll('[data-testid="stars-summary-engine-tabs"] li');
  t.is(engineTabs.length, 10);

  const activeLearnerStars = container.querySelector('[data-name="learner_total_active"]');
  t.falsy(activeLearnerStars);
  const hiddenLearnerStars = container.querySelector('[data-name="learner_total_hidden"]');
  t.truthy(hiddenLearnerStars);
  const activeMicrolearningStars = container.querySelector(
    '[data-name="microlearning_total_active"]'
  );
  t.truthy(activeMicrolearningStars);
  const hiddenMicrolearningStars = container.querySelector(
    '[data-name="microlearning_total_hidden"]'
  );
  t.falsy(hiddenMicrolearningStars);

  const leftNavigation = container.querySelector('[data-name="left-arrow"]');
  t.truthy(leftNavigation);
  const rightNavigation = container.querySelector('[data-name="right-arrow"]');
  t.truthy(rightNavigation);
});

test('when mount component with 10 engines and after clicking on handleRight four times, it should update state with correct value and hide first and second engine and hide right navigation button', t => {
  t.plan(8);
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const {container} = renderWithContext(<StarsSummary {...props} />, {context});

  const rightArrowView = container.querySelector(
    '[data-testid="stars-summary-right-arrow"]'
  ) as Element;
  fireEvent.click(rightArrowView);
  fireEvent.click(rightArrowView);
  fireEvent.click(rightArrowView);
  fireEvent.click(rightArrowView);

  const indexOnFour = container.querySelector('[data-testid="stars-summary-engine-index-4"]');
  t.truthy(indexOnFour);

  const engineTabs = container.querySelectorAll('[data-testid="stars-summary-engine-tabs"] li');
  t.is(engineTabs.length, 10);

  const activeLearnerStars = container.querySelector('[data-name="learner_total_active"]');
  t.falsy(activeLearnerStars);
  const hiddenLearnerStars = container.querySelector('[data-name="learner_total_hidden"]');
  t.truthy(hiddenLearnerStars);
  const activeMicrolearningStars = container.querySelector(
    '[data-name="microlearning_total_active"]'
  );
  t.falsy(activeMicrolearningStars);
  const hiddenMicrolearningStars = container.querySelector(
    '[data-name="microlearning_total_hidden"]'
  );
  t.truthy(hiddenMicrolearningStars);

  const leftNavigation = container.querySelector('[data-name="left-arrow"]');
  t.truthy(leftNavigation);
  const rightNavigation = container.querySelector('[data-name="right-arrow"]');
  t.falsy(rightNavigation);
});

test('when mount component and after click on handleRight twice and handleLeft once, it should update state with correct value and display the correct items', t => {
  t.plan(24);
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const {container} = renderWithContext(<StarsSummary {...props} />, {context});

  const rightArrowView = container.querySelector(
    '[data-testid="stars-summary-right-arrow"]'
  ) as Element;
  fireEvent.click(rightArrowView);
  fireEvent.click(rightArrowView);

  const indexOnTwo = container.querySelector('[data-testid="stars-summary-engine-index-2"]');
  t.truthy(indexOnTwo);

  const engineTabs = container.querySelectorAll('[data-testid="stars-summary-engine-tabs"] li');
  t.is(engineTabs.length, 10);

  let activeLearnerStars = container.querySelector('[data-name="learner_total_active"]');
  t.falsy(activeLearnerStars);
  let hiddenLearnerStars = container.querySelector('[data-name="learner_total_hidden"]');
  t.truthy(hiddenLearnerStars);
  let activeMicrolearningStars = container.querySelector(
    '[data-name="microlearning_total_active"]'
  );
  t.falsy(activeMicrolearningStars);
  let hiddenMicrolearningStars = container.querySelector(
    '[data-name="microlearning_total_hidden"]'
  );
  t.truthy(hiddenMicrolearningStars);

  let leftNavigation = container.querySelector('[data-name="left-arrow"]');
  t.truthy(leftNavigation);
  let rightNavigation = container.querySelector('[data-name="right-arrow"]');
  t.truthy(rightNavigation);

  const leftArrowView = container.querySelector(
    '[data-testid="stars-summary-left-arrow"]'
  ) as Element;
  fireEvent.click(leftArrowView);
  const indexOnOne = container.querySelector('[data-testid="stars-summary-engine-index-1"]');
  t.truthy(indexOnOne);

  t.is(engineTabs.length, 10);

  activeLearnerStars = container.querySelector('[data-name="learner_total_active"]');
  t.falsy(activeLearnerStars);
  hiddenLearnerStars = container.querySelector('[data-name="learner_total_hidden"]');
  t.truthy(hiddenLearnerStars);
  activeMicrolearningStars = container.querySelector('[data-name="microlearning_total_active"]');
  t.truthy(activeMicrolearningStars);
  hiddenMicrolearningStars = container.querySelector('[data-name="microlearning_total_hidden"]');
  t.falsy(hiddenMicrolearningStars);
  leftNavigation = container.querySelector('[data-name="left-arrow"]');
  t.truthy(leftNavigation);
  rightNavigation = container.querySelector('[data-name="right-arrow"]');
  t.truthy(rightNavigation);

  fireEvent.click(leftArrowView);
  const indexOnZero = container.querySelector('[data-testid="stars-summary-engine-index-0"]');
  t.truthy(indexOnZero);

  t.is(engineTabs.length, 10);

  activeLearnerStars = container.querySelector('[data-name="learner_total_active"]');
  t.truthy(activeLearnerStars);
  hiddenLearnerStars = container.querySelector('[data-name="learner_total_hidden"]');
  t.falsy(hiddenLearnerStars);
  activeMicrolearningStars = container.querySelector('[data-name="microlearning_total_active"]');
  t.truthy(activeMicrolearningStars);
  hiddenMicrolearningStars = container.querySelector('[data-name="microlearning_total_hidden"]');
  t.falsy(hiddenMicrolearningStars);
  leftNavigation = container.querySelector('[data-name="left-arrow"]');
  t.falsy(leftNavigation);
  rightNavigation = container.querySelector('[data-name="right-arrow"]');
  t.truthy(rightNavigation);
});
