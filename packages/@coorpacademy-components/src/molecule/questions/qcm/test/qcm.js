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
  const answers = wrapper.find('[data-name="answer"]');
  t.true(answers.at(1).exists());
  t.is(answers.at(1).props()['aria-label'], 'aria Answer');
  answers.at(1).simulate('click', {});
  t.true(answerWasClicked);
  t.pass();
});

test("should set: selected's background to Primary w/ alpha 5% && color to primary, unselected's no background && color to a nuance of primary", t => {
  const wrapper = mount(<Qcm {...defaultFixture.props} />);
  const answers = wrapper.find('[data-name="answer"]');
  const unselectedAnswer = answers.at(1);
  const expectedPrimaryColor = '#00B0FF';
  // ---- unselected ----
  // should not have styles on the wrapper
  t.true(unselectedAnswer.exists());
  t.deepEqual(unselectedAnswer.props().style, {});

  // should have only color prop in label style, transformed by lightness 15%
  const unselectedLabel = unselectedAnswer.children().at(1);
  t.true(unselectedLabel.exists());
  t.deepEqual(unselectedLabel.props().style, {
    color: convert(`color(${expectedPrimaryColor} lightness(15%))`)
  });

  // check dangerouslySetInnerHTML
  t.deepEqual(unselectedLabel.props().dangerouslySetInnerHTML, {
    __html: 'Lorem ipsum'
  });
  t.is(unselectedLabel.text(), 'Lorem ipsum');

  // should have a backgroundColor of '#F4F4F5' /* cm_grey_75 */
  const unselectedBackground = unselectedAnswer.children().at(0);
  t.true(unselectedBackground.exists());
  t.deepEqual(unselectedBackground.props().style, {
    backgroundColor: '#F4F4F5'
  });

  // selected
  // should have box-shadow color based on primary
  const selectedAnswer = answers.at(2);
  t.true(selectedAnswer.exists());
  t.deepEqual(selectedAnswer.props().style, {
    boxShadow: `0 4px 16px ${convert(`color(${expectedPrimaryColor} a(20%))`)}`
  });

  // should have only color prop in label style, w/o transforming expectedPrimaryColor
  const selectedLabel = selectedAnswer.children().at(1);
  t.true(selectedLabel.exists());
  t.deepEqual(selectedLabel.props().style, {
    color: expectedPrimaryColor
  });

  // check dangerouslySetInnerHTML
  t.deepEqual(selectedLabel.props().dangerouslySetInnerHTML, {
    __html: 'Lorem'
  });

  t.is(selectedLabel.text(), 'Lorem');

  // should have backgroundColor as expectedPrimaryColor (primary to be overlayed by the css)
  const selectedBackground = selectedAnswer.children().at(0);
  t.true(selectedBackground.exists());
  t.deepEqual(selectedBackground.props().style, {
    backgroundColor: expectedPrimaryColor
  });

  t.pass();
});

test('should set className to longAnswer if the answer is the longest of the set', t => {
  const wrapper = mount(<Qcm {...defaultFixture.props} />);
  const answer = wrapper.find('[data-name="answer"]');
  // regular answer
  t.true(answer.at(4).exists());
  t.is(answer.at(4).props().className, 'qcm__answer label__innerHTML qcm__selectedAnswer');

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
  const answers = wrapper.find('[data-name="answer"]');
  t.is(answers.at(6).text(), 'Lorem ipsum dolor');
  t.is(answers.at(6).props()['aria-label'], 'Lorem ipsum dolor');
  t.pass();
});
