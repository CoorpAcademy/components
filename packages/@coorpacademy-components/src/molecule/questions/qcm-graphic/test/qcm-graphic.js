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
  t.is(answersImages.at(1).props()['aria-label'], 'Lorem ipsum');

  const answers = wrapper.find('[data-name="answerGraphic"]');
  answers.at(1).simulate('click');
  t.true(answerWasClicked);
  t.pass();
});

test("should set: selected's background to Primary w/ alpha 5% && color to primary, unselected's no background && color to a nuance of primary", t => {
  const wrapper = shallow(<QCMImage {...defaultFixture.props} />, {
    context: {translate}
  });
  const answerBackgrounds = wrapper.find('[data-name="answerBackground"]');

  const unselectedAnswer = answerBackgrounds.at(0);
  t.true(unselectedAnswer.exists());
  t.deepEqual(unselectedAnswer.props().style, {backgroundColor: '#F4F4F5'});

  const selectedAnswer = answerBackgrounds.at(2);
  t.true(selectedAnswer.exists());
  t.deepEqual(selectedAnswer.props().style, {backgroundColor: '#00B0FF'});
});
