// @flow
import test from 'ava';
import getConfig from '../../config';
import nextContent from '../next-content';
import {
  answerAction,
  extraLifeAcceptedAction,
  extraLifeRefusedAction,
  askClueAction,
  moveAction
} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const _nextContent = {
  ref: '1.A1',
  type: 'chapter'
};
const config = getConfig(microlearning);

test('should return nextContent when action type is answer', t => {
  const result = nextContent(config)(_nextContent, answerAction);
  t.deepEqual(result, {
    ref: '1.A1.1',
    type: 'slide'
  });
});

test('should return nextContent when action type is extraLifeAccepted', t => {
  const result = nextContent(config)(_nextContent, extraLifeAcceptedAction);
  t.deepEqual(result, {
    ref: '1.A1.1',
    type: 'slide'
  });
});

test('should return nextContent when action type is extraLifeRefused', t => {
  const result = nextContent(config)(_nextContent, extraLifeRefusedAction);
  t.deepEqual(result, {
    ref: 'failExitNode',
    type: 'failure'
  });
});

test('should return nextContent when action type is move', t => {
  const result = nextContent(config)(_nextContent, moveAction);
  t.deepEqual(result, {
    ref: '1.A1.1',
    type: 'slide'
  });
});

test('should return input content when action type is not answer', t => {
  const result = nextContent(config)(_nextContent, askClueAction);
  t.deepEqual(result, _nextContent);
});
