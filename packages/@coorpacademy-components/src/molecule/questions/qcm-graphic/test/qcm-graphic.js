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

  const answers = wrapper.find('[data-name="answerGraphic"]');
  t.true(answers.at(1).exists());
  t.is(answers.at(1).props()['aria-label'], 'Lorem ipsum');

  const answerWrappers = wrapper.find('[data-name="answerGraphicWrapper"]');
  answerWrappers.at(1).simulate('click');
  t.true(answerWasClicked);
  t.pass();
});
