import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Qcm from '..';
import {renderWithContext} from '../../../../util/render-with-context';
import defaultFixture from './fixtures/default';

browserEnv();

test('onClick should be reachable, should match given aria-label', t => {
  t.plan(3);
  defaultFixture.props.answers[1] = {
    ...defaultFixture.props.answers[1],
    onClick: () => {
      t.pass();
    }
  };
  const {container} = renderWithContext(<Qcm {...defaultFixture.props} />);
  const answer = container.querySelector(
    '[data-name="answer"]:nth-child(2) :nth-child(2)'
  ) as Element;
  t.truthy(answer);
  fireEvent.click(answer);
  t.pass();
});

test('should set className to longAnswer if the answer is the longest of the set', t => {
  t.plan(5);
  const {container} = render(<Qcm {...defaultFixture.props} />);
  // regular answer
  const answer = container.querySelector('[data-name="answer"]:nth-child(5)') as Element;
  t.truthy(answer);
  t.is(answer.className, 'qcm__answer qcm__innerHTML label__innerHTML qcm__selectedAnswer');

  // long answer
  const longAnswer = container.querySelector('[data-name="answer"]:nth-child(6)') as Element;
  t.truthy(longAnswer);
  t.is(
    longAnswer.className,
    'qcm__longestAnswer qcm__answer qcm__answer qcm__innerHTML label__innerHTML qcm__unselectedAnswer'
  );
  t.pass();
});
