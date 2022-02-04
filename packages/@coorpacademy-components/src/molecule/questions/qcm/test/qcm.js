import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import {identity} from 'lodash/fp';
import {convert} from 'css-color-function';
import Adapter from 'enzyme-adapter-react-16';
import Qcm from '..';
import defaultFixture from './fixtures/default';
import noAriaLabelFixture from './fixtures/no-selected';

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
  const wrapper = shallow(<Qcm {...defaultFixture.props} />, {
    context: {translate}
  });
  const answer = wrapper.find(`[data-name="answer"]`);
  t.true(answer.at(1).exists());
  t.is(answer.at(1).props()['aria-label'], 'aria Answer');
  answer.at(1).simulate('click', {});
  t.true(answerWasClicked);
  t.pass();
});

test("should set: selected's background to Primary w/ alpha 5% && color to primary, unselected's no background && color to a nuance of primary", t => {
  const wrapper = mount(<Qcm {...defaultFixture.props} />);
  const answer = wrapper.find(`[data-name="answer"]`);
  const expectedPrimaryColor = '#00B0FF';
  // unselected, should have only color prop in style, transformed by lightness 15%
  t.true(answer.at(1).exists());
  t.deepEqual(answer.at(1).props().style, {
    color: convert(`color(${expectedPrimaryColor} lightness(15%))`)
  });

  // selected, should have alpha for the backgroundColor, primary #00B0FF for color
  t.true(answer.at(2).exists());
  t.deepEqual(answer.at(2).props().style, {
    backgroundColor: 'rgba(0, 176, 255, 0.05)',
    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.2)',
    color: expectedPrimaryColor
  });

  t.pass();
});

test('should set className to longAnswer if the answer has the biggest length', t => {
  const wrapper = mount(<Qcm {...defaultFixture.props} />);
  const answer = wrapper.find(`[data-name="answer"]`);
  // regular answer
  t.true(answer.at(4).exists());
  t.is(answer.at(4).props().className, 'qcm__answer label__innerHTML');

  // long answer
  t.true(answer.at(5).exists());
  t.is(
    answer.at(5).props().className,
    'qcm__longestAnswer qcm__answer qcm__answer label__innerHTML qcm__unselectedAnswer'
  );
  t.pass();
});

test('should use title as default aria-label if no aria-label is provided', t => {
  const wrapper = mount(<Qcm {...noAriaLabelFixture.props} />);
  const answer = wrapper.find(`[data-name="answer"]`);
  t.is(answer.at(6).text(), 'Lorem ipsum dolor');
  t.is(answer.at(6).props()['aria-label'], 'Lorem ipsum dolor');
  t.pass();
});
