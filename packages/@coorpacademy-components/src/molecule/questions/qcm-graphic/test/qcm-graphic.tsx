import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent} from '@testing-library/react';
import QCMImage from '..';
import {renderWithContext} from '../../../../util/render-with-context';
import defaultFixture from './fixtures/default';

browserEnv();

test('onClick should be reachable, should match given aria-label', t => {
  t.plan(5);
  let answerWasClicked = false;
  defaultFixture.props.answers[1] = {
    ...defaultFixture.props.answers[1],
    onClick: () => {
      answerWasClicked = true;
    }
  };

  const {container} = renderWithContext(<QCMImage {...defaultFixture.props} />);
  const secondAnswer = container.querySelector(
    '[data-name="answerGraphic"]:nth-child(2) :nth-child(2) :nth-child(1)'
  ) as Element;
  t.truthy(secondAnswer);
  t.is(
    secondAnswer.getAttribute('aria-label'),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sut labore et dolore magna aliqua.'
  );

  const answer = container.querySelector(
    '[data-name="answerGraphic"]:nth-child(2) :nth-child(2) :nth-child(2) :nth-child(1) :nth-child(1) :nth-child(1)'
  ) as Element;
  t.truthy(answer);
  fireEvent.click(answer);
  t.true(answerWasClicked);
  t.pass();
});

test("should set: selected's background to Primary, unselected's no background", t => {
  t.plan(9);
  const {container} = renderWithContext(<QCMImage {...defaultFixture.props} />);
  const firstAnswer = container.querySelector(
    '[data-name="answerGraphic"]:nth-child(1)'
  ) as Element;
  t.truthy(firstAnswer);
  t.is(firstAnswer.getAttribute('style'), null);
  const unselectedBackgroundAnswer = container.querySelector(
    '[data-name="answerGraphic"]:nth-child(1) :nth-child(1)'
  ) as Element;
  t.truthy(unselectedBackgroundAnswer);
  t.is(unselectedBackgroundAnswer.getAttribute('style'), 'background-color: rgb(244, 244, 245);');

  const firstAnswerText = container.querySelector(
    '[data-name="answerGraphic"]:nth-child(2) :nth-child(2) :nth-child(1)'
  );
  t.truthy(firstAnswerText);

  const thirdAnswer = container.querySelector(
    '[data-name="answerGraphic"]:nth-child(3)'
  ) as Element;
  t.truthy(thirdAnswer);
  t.is(thirdAnswer.getAttribute('style'), 'box-shadow: 0 4px 16px rgba(0, 122, 179, 0.25);');

  const selectedBackgroundAnswer = container.querySelector(
    '[data-name="answerGraphic"]:nth-child(3) :nth-child(1)'
  ) as Element;
  t.truthy(selectedBackgroundAnswer);
  t.is(selectedBackgroundAnswer.getAttribute('style'), 'background-color: rgb(0, 176, 255);');
});
