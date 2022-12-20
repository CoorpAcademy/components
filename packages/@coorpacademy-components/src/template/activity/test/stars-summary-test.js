import test from 'ava';
import browserEnv from 'browser-env';
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
  }
};

test('when mount component, it should initialize state with correct value', t => {
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const wrapper = mount(<StarsSummary {...props} />, {context});
  const instance = wrapper.instance();
  t.is(instance.state.firstItem, 0);
  t.is(instance.state.totalItems, 10);

  const activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.is(activeLearnerStars.exists(), true);

  const leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.is(leftNavigation.exists(), false);
  const rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.is(rightNavigation.exists(), true);
});

test('when mount component and after click on handleRight, it should update state with correct value and hide first engine and show left navigation button', t => {
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const wrapper = mount(<StarsSummary {...props} />, {context});
  const instance = wrapper.instance();

  instance.handleOnRight();
  t.is(instance.state.firstItem, 1);
  t.is(instance.state.totalItems, 10);
  wrapper.update();

  const activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.is(activeLearnerStars.exists(), false);
  const hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.is(hiddenLearnerStars.exists(), true);
  const activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.is(activeMicrolearningStars.exists(), true);
  const hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.is(hiddenMicrolearningStars.exists(), false);

  const leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.is(leftNavigation.exists(), true);
  const rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.is(rightNavigation.exists(), true);
});

test('when mount component with 10 engines and after clicking on handleRight four times, it should update state with correct value and hide first and second engine and hide right navigation button', t => {
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const wrapper = mount(<StarsSummary {...props} />, {context});
  const instance = wrapper.instance();

  instance.handleOnRight();
  instance.handleOnRight();
  instance.handleOnRight();
  instance.handleOnRight();
  t.is(instance.state.firstItem, 4);
  t.is(instance.state.totalItems, 10);
  wrapper.update();

  const activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.is(activeLearnerStars.exists(), false);
  const hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.is(hiddenLearnerStars.exists(), true);
  const activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.is(activeMicrolearningStars.exists(), false);
  const hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.is(hiddenMicrolearningStars.exists(), true);

  const leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.is(leftNavigation.exists(), true);
  const rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.is(rightNavigation.exists(), false);
});

test('when mount component and after click on handleRight twice and handleLeft once, it should update state with correct value and display the correct items', t => {
  const props = {
    engines: fixtures.props.engines,
    total: fixtures.props.total
  };
  const wrapper = mount(<StarsSummary {...props} />, {context});
  const instance = wrapper.instance();

  instance.handleOnRight();
  instance.handleOnRight();
  t.is(instance.state.firstItem, 2);
  t.is(instance.state.totalItems, 10);
  wrapper.update();

  let activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.is(activeLearnerStars.exists(), false);
  let hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.is(hiddenLearnerStars.exists(), true);
  let activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.is(activeMicrolearningStars.exists(), false);
  let hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.is(hiddenMicrolearningStars.exists(), true);

  let leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.is(leftNavigation.exists(), true);
  let rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.is(rightNavigation.exists(), true);

  instance.handleOnLeft();
  t.is(instance.state.firstItem, 1);
  t.is(instance.state.totalItems, 10);
  wrapper.update();

  activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.is(activeLearnerStars.exists(), false);
  hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.is(hiddenLearnerStars.exists(), true);
  activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.is(activeMicrolearningStars.exists(), true);
  hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.is(hiddenMicrolearningStars.exists(), false);
  leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.is(leftNavigation.exists(), true);
  rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.is(rightNavigation.exists(), true);

  instance.handleOnLeft();
  t.is(instance.state.firstItem, 0);
  t.is(instance.state.totalItems, 10);
  wrapper.update();

  activeLearnerStars = wrapper.find('[data-name="learner_total_active"]');
  t.is(activeLearnerStars.exists(), true);
  hiddenLearnerStars = wrapper.find('[data-name="learner_total_hidden"]');
  t.is(hiddenLearnerStars.exists(), false);
  activeMicrolearningStars = wrapper.find('[data-name="microlearning_total_active"]');
  t.is(activeMicrolearningStars.exists(), true);
  hiddenMicrolearningStars = wrapper.find('[data-name="microlearning_total_hidden"]');
  t.is(hiddenMicrolearningStars.exists(), false);
  leftNavigation = wrapper.find('[data-name="left-arrow"]');
  t.is(leftNavigation.exists(), false);
  rightNavigation = wrapper.find('[data-name="right-arrow"]');
  t.is(rightNavigation.exists(), true);
});
