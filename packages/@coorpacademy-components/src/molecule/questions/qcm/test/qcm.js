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
  const answers = wrapper.find(`[data-name="answer"]`);
  t.true(answers.at(1).exists());
  t.is(answers.at(1).props()['aria-label'], 'aria Answer');
  answers.at(1).simulate('click', {});
  t.true(answerWasClicked);
  t.pass();
});

test("should set: selected's background to Primary w/ alpha 5% && color to primary, unselected's no background && color to a nuance of primary", t => {
  const wrapper = mount(<Qcm {...defaultFixture.props} />);
  const answers = wrapper.find(`[data-name="answer"]`);
  const expectedPrimaryColor = '#00B0FF';
  // unselected, should have only color prop in style, transformed by lightness 15%,
  // should not have onMouseLeave prop nor onMouseEnter (should rely on css)
  t.true(answers.at(1).exists());
  t.deepEqual(answers.at(1).props().style, {
    color: convert(`color(${expectedPrimaryColor} lightness(15%))`)
  });

  t.is(answers.at(1).props().onMouseEnter, undefined);
  t.is(answers.at(1).props().onMouseLeave, undefined);

  // selected, should have alpha for the backgroundColor, primary #00B0FF for color
  // should have hover replacement functions
  t.true(answers.at(2).exists());
  t.deepEqual(answers.at(2).props().style, {
    backgroundColor: 'rgba(0, 176, 255, 0.05)',
    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.2)',
    color: expectedPrimaryColor
  });

  t.truthy(answers.at(2).props().onMouseEnter);
  t.truthy(answers.at(2).props().onMouseLeave);

  t.pass();
});

test('should set className to longAnswer if the answer is the longest of the set', t => {
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
  const answers = wrapper.find(`[data-name="answer"]`);
  t.is(answers.at(6).text(), 'Lorem ipsum dolor');
  t.is(answers.at(6).props()['aria-label'], 'Lorem ipsum dolor');
  t.pass();
});

test('should change background color on selected + hovered (less transparency)', t => {
  const wrapper = mount(<Qcm {...defaultFixture.props} />);
  let answers = wrapper.find(`[data-name="answer"]`);
  const expectedPrimaryColor = '#00B0FF';

  // selected, should have alpha for the backgroundColor, primary #00B0FF for color
  t.true(answers.at(2).exists());
  answers.at(2).simulate('mouseEnter', {});
  wrapper.update();
  answers = wrapper.find(`[data-name="answer"]`);
  t.deepEqual(answers.at(2).props().style, {
    backgroundColor: 'rgba(0, 176, 255, 0.1)',
    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.2)',
    color: expectedPrimaryColor
  });
  answers.at(2).simulate('mouseleave', {});
  wrapper.update();
  answers = wrapper.find(`[data-name="answer"]`);
  t.deepEqual(answers.at(2).props().style, {
    backgroundColor: 'rgba(0, 176, 255, 0.05)',
    boxShadow: '0 4px 16px rgba(0, 176, 255, 0.2)',
    color: expectedPrimaryColor
  });

  t.pass();
});
