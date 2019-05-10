import test from 'ava';
// @ts-ignore
import {getConfig} from '../../config';
import content from '../content';
import {
  answerAction,
  extraLifeAcceptedAction,
  extraLifeRefusedAction,
  askClueAction
} from './fixtures/actions';

import {microlearning} from './fixtures/engines';

const _content = {
  ref: '1.A1',
  type: 'chapter'
};
const config = getConfig(microlearning);

test('should return content when action type is answer', t => {
  // @ts-ignore : Fake Content
  const result = content(config)(_content, answerAction);
  t.deepEqual(result, {
    ref: '1.A1.2',
    type: 'slide'
  });
});

test('should return content when action type is extraLifeAccepted', t => {
  // @ts-ignore : Fake Content
  const result = content(config)(_content, extraLifeAcceptedAction);
  t.deepEqual(result, {
    type: 'node',
    ref: 'extraLife'
  });
});

test('should return content when action type is extraLifeRefused', t => {
  // @ts-ignore : Fake Content
  const result = content(config)(_content, extraLifeRefusedAction);
  t.deepEqual(result, {
    type: 'node',
    ref: 'extraLife'
  });
});

test('should return input content when action type is not answer', t => {
  // @ts-ignore : Fake Content
  const result = content(config)(_content, askClueAction);
  t.deepEqual(result, _content);
});
