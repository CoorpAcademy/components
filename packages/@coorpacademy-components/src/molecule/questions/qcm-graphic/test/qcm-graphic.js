import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import Adapter from 'enzyme-adapter-react-16';
import QCMImage from '..';
import defaultFixture from './fixtures/default';

browserEnv();
configure({adapter: new Adapter()});
const translate = identity;

test('onClick should be reachable, should match given aria-label', t => {
  let answerWasClicked = false;
  defaultFixture.props.answers[1] = {
    ...defaultFixture.props.answers[1],
    onClick: () => {
      answerWasClicked = true;
    }
  };

  const wrapper = shallow(<QCMImage {...defaultFixture.props} />, {
    context: {translate}
  });

  const answersImages = wrapper.find('[data-name="answerImage"]');
  t.true(answersImages.at(1).exists());
  t.is(
    answersImages.at(1).props()['aria-label'],
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sut labore et dolore magna aliqua.'
  );

  const answers = wrapper.find('[data-name="answerGraphic"]');
  answers.at(1).simulate('click');
  t.true(answerWasClicked);
  t.pass();
});

test("should set: selected's background to Primary, unselected's no background", t => {
  const wrapper = shallow(<QCMImage {...defaultFixture.props} />, {
    context: {translate}
  });
  const answers = wrapper.find('[data-name="answerGraphic"]');

  const firstAnswer = answers.at(0);
  t.true(firstAnswer.exists());
  t.deepEqual(firstAnswer.props().style, {});
  const unselectedBackgroundAnswer = firstAnswer.children().at(0);
  t.true(unselectedBackgroundAnswer.exists());
  t.deepEqual(unselectedBackgroundAnswer.props().style, {backgroundColor: '#F4F4F5'});
  const firstAnswerText = firstAnswer.children().at(1).children().at(1).children().at(0);
  t.true(firstAnswerText.exists());

  const thirdAnswer = answers.at(2);
  t.true(thirdAnswer.exists());
  t.deepEqual(thirdAnswer.props().style, {boxShadow: '0 4px 16px rgba(0, 122, 179, 0.25)'});
  const selectedBackgroundAnswer = thirdAnswer.children().at(0);
  t.true(selectedBackgroundAnswer.exists());
  t.deepEqual(selectedBackgroundAnswer.props().style, {backgroundColor: '#00B0FF'});
});
