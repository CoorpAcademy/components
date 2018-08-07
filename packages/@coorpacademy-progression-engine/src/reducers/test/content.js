// @flow
import test from 'ava';
import {getConfig} from '../../config';
import content from '../content';
import {
  answerAction,
  extraLifeAcceptedAction,
  extraLifeRefusedAction,
  askClueAction
} from './fixtures/actions';
import {microlearning} from './fixtures/engines';
import {stateForSecondSlide} from './fixtures/states';

const _content = {
  ref: '1.A1',
  type: 'chapter'
};
const config = getConfig(microlearning);

test('should return content when action type is answer', t => {
  const result = content(config)(_content, answerAction, stateForSecondSlide);
  t.deepEqual(result, {
    ref: '1.A1.2',
    type: 'slide'
  });
});

test('should return content when action type is extraLifeAccepted', t => {
  const result = content(config)(_content, extraLifeAcceptedAction, stateForSecondSlide);
  t.deepEqual(result, {
    type: 'node',
    ref: 'extraLife'
  });
});

test('should return content when action type is extraLifeRefused', t => {
  const result = content(config)(_content, extraLifeRefusedAction, stateForSecondSlide);
  t.deepEqual(result, {
    type: 'node',
    ref: 'extraLife'
  });
});

test('should return input content when action type is not answer', t => {
  const result = content(config)(_content, askClueAction, stateForSecondSlide);
  t.deepEqual(result, _content);
});
