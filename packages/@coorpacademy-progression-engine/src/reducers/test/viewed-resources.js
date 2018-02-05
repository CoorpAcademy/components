// @flow
import test from 'ava';
import set from 'lodash/fp/set';
import {getConfig} from '../../config';
import viewedResources from '../viewed-resources';
import {askClueAction, resourceAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const config = getConfig(microlearning);

test('should return updated viewedResources when action type is resource', t => {
  const result = viewedResources(config)([], resourceAction);
  t.deepEqual(result, [{ref: '1.A1', resources: ['les_1'], type: 'chapter'}]);
});

test('should return updated viewedResources when action type is resource but content type is not chapter', t => {
  const action = set('payload.content.type', 'slide', resourceAction);
  const result = viewedResources(config)([], action);
  t.deepEqual(result, []);
});

test('should return the same given array when action type is extraLifeAccepted and slide is already in array', t => {
  const result = viewedResources(config)([], askClueAction);
  t.deepEqual(result, []);
});
