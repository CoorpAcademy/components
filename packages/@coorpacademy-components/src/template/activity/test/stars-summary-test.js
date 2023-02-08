import test from 'ava';
import browserEnv from 'browser-env';
import {mockTranslate} from '@coorpacademy/translate';
import {mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import StarsSummary from '../stars-summary';
import fixtures from './fixtures/all-engines';

browserEnv();
configure({adapter: new Adapter()});
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
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const wrapper = mount(<StarsSummary {...props} />, {context});

  const indexOnZero = wrapper.find('[data-testid="stars-summary-engine-index-0"]');
  t.true(indexOnZero.exists());
  const engineTabs = wrapper.find('[data-testid="stars-summary-engine-tabs"] li');
  t.is(engineTabs.length, 10);

  const activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');

  t.true(activeLearnerStars.exists());

  const leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.false(leftNavigation.exists());
  const rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.true(rightNavigation.exists());
});

test('when mount component and after click on handleRight, it should update state with correct value and hide first engine and show left navigation button', t => {
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const wrapper = mount(<StarsSummary {...props} />, {context});

  const rightArrowView = wrapper.find('[data-testid="stars-summary-right-arrow"]');
  rightArrowView.simulate('click', {});

  const indexOnOne = wrapper.find('[data-testid="stars-summary-engine-index-1"]');
  t.true(indexOnOne.exists());
  const engineTabs = wrapper.find('[data-testid="stars-summary-engine-tabs"] li');
  t.is(engineTabs.length, 10);
  wrapper.update();

  const activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.false(activeLearnerStars.exists());
  const hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.true(hiddenLearnerStars.exists());
  const activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.true(activeMicrolearningStars.exists());
  const hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.false(hiddenMicrolearningStars.exists());

  const leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.true(leftNavigation.exists());
  const rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.true(rightNavigation.exists());
});

test('when mount component with 10 engines and after clicking on handleRight four times, it should update state with correct value and hide first and second engine and hide right navigation button', t => {
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const wrapper = mount(<StarsSummary {...props} />, {context});

  const rightArrowView = wrapper.find('[data-testid="stars-summary-right-arrow"]');
  rightArrowView.simulate('click', {});
  rightArrowView.simulate('click', {});
  rightArrowView.simulate('click', {});
  rightArrowView.simulate('click', {});

  const indexOnFour = wrapper.find('[data-testid="stars-summary-engine-index-4"]');
  t.true(indexOnFour.exists());

  const engineTabs = wrapper.find('[data-testid="stars-summary-engine-tabs"] li');
  t.is(engineTabs.length, 10);
  wrapper.update();

  const activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.false(activeLearnerStars.exists());
  const hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.true(hiddenLearnerStars.exists());
  const activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.false(activeMicrolearningStars.exists());
  const hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.true(hiddenMicrolearningStars.exists());

  const leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.true(leftNavigation.exists());
  const rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.false(rightNavigation.exists());
});

test('when mount component and after click on handleRight twice and handleLeft once, it should update state with correct value and display the correct items', t => {
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const wrapper = mount(<StarsSummary {...props} />, {context});

  const rightArrowView = wrapper.find('[data-testid="stars-summary-right-arrow"]');
  rightArrowView.simulate('click', {});
  rightArrowView.simulate('click', {});

  const indexOnTwo = wrapper.find('[data-testid="stars-summary-engine-index-2"]');
  t.true(indexOnTwo.exists());

  const engineTabs = wrapper.find('[data-testid="stars-summary-engine-tabs"] li');
  t.is(engineTabs.length, 10);
  wrapper.update();

  let activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.false(activeLearnerStars.exists());
  let hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.true(hiddenLearnerStars.exists());
  let activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.false(activeMicrolearningStars.exists());
  let hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.true(hiddenMicrolearningStars.exists());

  let leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.true(leftNavigation.exists());
  let rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.true(rightNavigation.exists());

  const leftArrowView = wrapper.find('[data-testid="stars-summary-left-arrow"]');
  leftArrowView.simulate('click', {});
  const indexOnOne = wrapper.find('[data-testid="stars-summary-engine-index-1"]');
  t.true(indexOnOne.exists());

  t.is(engineTabs.length, 10);
  wrapper.update();

  activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.false(activeLearnerStars.exists());
  hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.true(hiddenLearnerStars.exists());
  activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.true(activeMicrolearningStars.exists());
  hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.false(hiddenMicrolearningStars.exists());
  leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.true(leftNavigation.exists());
  rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.true(rightNavigation.exists());

  leftArrowView.simulate('click', {});
  const indexOnZero = wrapper.find('[data-testid="stars-summary-engine-index-0"]');
  t.true(indexOnZero.exists());

  t.is(engineTabs.length, 10);

  wrapper.update();

  activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.true(activeLearnerStars.exists());
  hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.false(hiddenLearnerStars.exists());
  activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.true(activeMicrolearningStars.exists());
  hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.false(hiddenMicrolearningStars.exists());
  leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.false(leftNavigation.exists());
  rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.true(rightNavigation.exists());
});
